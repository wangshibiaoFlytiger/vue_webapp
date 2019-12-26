import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import {
  List,
  Cell,
  PullRefresh,
  Row,
  Col,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem
} from "vant";

// 注册全局组件, 这样就无需在使用组件之前前做import操作了
Vue.use(List)
  .use(Cell)
  .use(PullRefresh)
  .use(Row)
  .use(Col)
  .use(Tab)
  .use(Tabs)
  .use(Tabbar)
  .use(TabbarItem);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
