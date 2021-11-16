import Taro from "@tarojs/taro";

/**
 * 调用云函数的查询
 * @param name // 云函数名称
 * @param data // 查询的条件
 * @returns
 */
const select = (type: string, params: object) => {
  return new Promise((resolve, reject) => {
    Taro.cloud
      .callFunction({
        name: "bookMail",
        data: {
          type,
          ...params,
        },
      })
      .then((res: any) => {
        if (res.errMsg === "cloud.callFunction:ok") {
          resolve(res.result);
        }
      })
      .catch((e) => reject(e));
  });
};

/**
 * 调用云函数实现登陆
 * @param type 
 * @param params 
 * @returns 
 */
const login = (type: string, params: object) => {
  return new Promise((resolve, reject) => {
    Taro.cloud
      .callFunction({
        name: "bookMail",
        data: {
          type,
          ...params,
        },
      })
      .then((res: any) => {
        if (res.errMsg === "cloud.callFunction:ok") {
          resolve(res.result);
        }
      })
      .catch((e) => reject(e));
  });
};

export default {
  select,
  login,
};
