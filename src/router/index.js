import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
import addEngineCode from "../views/addEngineCode.vue";
import regFormPage from "../views/regFormPage.vue";
import jsplumbPage from "../views/jsplumbPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/add_engine_code",
    name: "addEngineCode",
    component: addEngineCode
  },
  {
    path: "/reg_form_page",
    name: "regFormPage",
    component: regFormPage
  },
  {
    path: "/jsplumb_page",
    name: "jsplumbPage",
    component: jsplumbPage
  }
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes
});

export default router;
