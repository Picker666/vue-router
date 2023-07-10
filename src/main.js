import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes.js'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log('global == beforeEach == to, from: ', to, from);
  if (to.path === '/testing') {
    next('/');
    // next(new Error('testing'))
  } else {
    next();
  }
});

// 全局路由异常处理
router.onError((err) => {
  console.log('err: ', err);
});

// 全局解析守卫
router.beforeResolve((to, from, next) => {
  console.log('global == beforeResolve == to, from: ', to, from);
  next();
});

// 全局独享守卫
router.afterEach((to, from) => {
  console.log('global == afterEach == to, from: ', to, from);
  // ...
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
