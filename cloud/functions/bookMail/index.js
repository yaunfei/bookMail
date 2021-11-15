const getListItem = require('./getListItem/index');
const login = require('./login/index');

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'getListItem':
      return await getListItem.main(event, context);
    case 'login':
      return await login.main(event, context);
  }
}
