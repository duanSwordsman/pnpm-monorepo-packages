import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 开启debug模式
Vue.config.debug = true;

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/icon',
      component: () => import('./components/Icon.vue')
    }
  ]
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');