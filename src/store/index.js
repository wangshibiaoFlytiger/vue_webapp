import Vue from "vue";
import Vuex from "vuex";
import film from "./film/index";

import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [
    // 配置vuex内置的logger插件, 这样即可在控制台查看到vuex的相关状态变化
    createLogger()
  ],

  // 定义所有的vuex模块
  modules: {
    film
  }
});

export default store;
