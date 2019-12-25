import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { List, Cell, PullRefresh } from "vant";

// 注册全局组件, 这样就无需在使用组件之前前做import操作了
Vue.use(List)
  .use(Cell)
  .use(PullRefresh);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
