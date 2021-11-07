import Taro from "@tarojs/taro";
import { DBID } from "../config";

const db = Taro.cloud.database({
  env: DBID,
});

const getHomeInfo = (dbName) => {
  return db.collection(dbName).where({"_id": "home_info"}).get();
};

export default { getHomeInfo };
