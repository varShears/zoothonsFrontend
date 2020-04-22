import Vue from "vue";
import ElementUI from "element-ui";
import jsPlumb from 'jsplumb'
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $ from "jquery";
// axios
import axios from 'axios'
Vue.prototype.$axios = axios;
Vue.prototype.$ = $;
Vue.use(ElementUI);

import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

Vue.use(codemirror)
Vue.prototype.$jsPlumb = jsPlumb.jsPlumb
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
