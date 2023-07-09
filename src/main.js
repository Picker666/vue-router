import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes.js'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
