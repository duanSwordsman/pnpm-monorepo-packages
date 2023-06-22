import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import TDesign from "tdesign-vue";

Vue.use(VueRouter);
Vue.use(TDesign);

// 开启debug模式
Vue.config.debug = true;

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/icon",
      component: () => import("./components/Icon.vue"),
    },
  ],
});

const app = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
