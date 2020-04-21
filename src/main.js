import Vue from "vue";
import ElementUI from "element-ui";
import jsPlumb from "jsplumb";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.use(ElementUI);
Vue.prototype.$jsPlumb = jsPlumb.jsPlumb;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
