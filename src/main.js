import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import http from "../http.js";

import Vant from 'vant';
import 'vant/lib/index.css';
import { 
  Tab,
  Tabs, 
  Icon, 
  Field, 
  Toast, 
  Uploader,
  Divider,
  Dialog,
  ActionSheet,
  List,
  Collapse, 
  CollapseItem,

  DatetimePicker

} from "vant";
Vue.use(Vant);

Vue.prototype.$http = http;
Vue.use(Tab)
  .use(Tabs)
  .use(Icon)
  .use(Field)
  .use(Toast)
  .use(Uploader)
  .use(Divider)
  .use(Dialog)
  .use(ActionSheet)
  .use(List)
  .use(Collapse)
  .use(CollapseItem)

  .use(DatetimePicker)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
