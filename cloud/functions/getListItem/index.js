// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const db = cloud.database()
  const _ = db.command
  const $ = _.aggregate
  let dbResult = {};
  try {
    // 获取图书列表
    let book = await db.collection('book_count').aggregate()
      .match({ count: _.gt(0) }) // 聚合函数时使用 macth 进行where 条件判断
      .lookup({
        from: "book_list",
        localField: "_id",
        foreignField: "_id",
        as: "bookList"
      })
      .replaceRoot({
        newRoot: $.mergeObjects([$.arrayElemAt(['$bookList', 0]), '$$ROOT'])
      })
      .project({
        bookList: 0
      })
      .end();

    book.errMsg === "collection.aggregate:ok" ? Object.assign(dbResult, { bookList: book.list }) : null;

    // 获取轮播图信息
    let swiper = await db.collection('swiper_img_url').where({ "_id": "swiper_img_url" }).get();

    swiper.errMsg === "collection.get:ok" ? Object.assign(dbResult, { swiperUrl: swiper.data }) : null;

  } catch (e) {
    console.log(e);
  }

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    dbResult,
  }
}