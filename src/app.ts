import { createApp } from "vue";
import { store, key } from "./store";
import Taro from "@tarojs/taro";
import "./app.less";
import { DBID } from "@/service/config";

const App = createApp({
  mounted() {
    if (process.env.TARO_ENV === "weapp") {
      Taro.cloud.init({
        env: DBID,
      });
    }
  },
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(store, key);

export default App;
