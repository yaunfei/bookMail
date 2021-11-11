import Taro from "@tarojs/taro";

/**
 * 调用云函数的查询
 * @param name // 云函数名称
 * @param data // 查询的条件
 * @returns 
 */
const select = (name: string, data: object) => {
  return new Promise((resolve, reject) => {
    Taro.cloud
      .callFunction({
        name,
        data,
      })
      .then((res: any) => {
        if (res.errMsg === "cloud.callFunction:ok") {
          resolve(res.result.dbResult);
        }
      })
      .catch((e) => reject(e));
  });
};

export default {
  select,
}
