import Vue from 'vue'
import App from './App.vue'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import home from './components/login/home.vue'
import register from './components/login/register.vue'
import login from './components/login/login.vue'
import pwd1 from './components/login/pwd1.vue'
import pwd2 from './components/login/pwd2.vue'
import pwd3 from './components/login/pwd3.vue'

var router = new VueRouter({
	routes:[
		{path:"/",redirect:'/home'},
		{path:"/home",component:home},
		{path:"/register",component:register},
		{path:"/login",component:login},
		{path:"/pwd1",component:pwd1},
		{path:"/pwd2",component:pwd2},
		{path:"/pwd3",component:pwd3}
	]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
