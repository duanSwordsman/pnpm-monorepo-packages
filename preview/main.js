import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import TDesign from "tdesign-vue";
import Icon from "@duan-swordsman/icon";
// eslint-disable-next-line
import 'virtual:svg-icons-register'

Vue.use(VueRouter);
Vue.use(TDesign);
Vue.use(Icon);

// 开启debug模式
Vue.config.debug = true;

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/icon",
      component: () => import("./components/Icon.vue"),
    },
    {
      path: "/markd",
      component: () => import("./components/Markd.vue"),
    },
  ],
});

const app = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
