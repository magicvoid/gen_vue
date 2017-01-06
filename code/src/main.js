// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';

import Play from './components/play'
import Sell from './components/sell'
import Me from './components/me'

Vue.use(VueRouter)
Vue.use(VueResource);
let routes = [
  {path: '/play', component: Play}, 
  {path: '/me', component: Me},
  {path: '/sell', component: Sell}
];
let router = new VueRouter({
  //'linkActiveClass': 'active',
   routes // （缩写）相当于 routes: routes
});
/* eslint-disable no-new */
let app = new Vue({
	router,
   el:'#app',
  
  render:(h) => h(App)
})
router.push('./play')
//export default app;
