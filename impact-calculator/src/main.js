import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import q1 from './components/q1.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter);


const route = [
  { path: '/',component:Home},
  { path: '/q1',component: q1},
];


const router = new VueRouter({
  routes:route,
  mode:'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})