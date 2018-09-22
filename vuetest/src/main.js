import Vue from 'vue'
import App from './App'
// import Router from './router'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import goods from './components/goods/goods.vue'
import ratings from './components/rating/rating.vue'
import sellers from './components/seller/seller.vue'

import './components/stylus/index.styl'
Vue.config.productionTip = false
Vue.use(Router)
Vue.use(VueResource)
/* eslint-disable no-new */

const routes = [
  // { path: '/', component: goods },
  { path: '/goods', component: goods },
  { path: '/rating', component: ratings },
  { path: '/seller', component: sellers }
]

const router = new Router({
  routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
