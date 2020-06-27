import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import q1 from './components/q1.vue'
import q2 from './components/q2.vue'
import q3 from './components/q3.vue'
import loading from './components/loading.vue'
import loading2 from './components/loading2.vue'
import resultA from './components/resultA.vue'
import resultB from './components/resultB.vue'
import Home from './components/Home.vue'
import waste from './components/waste.vue'
import carbon from './components/carbon.vue'
import firebase from 'firebase'

Vue.use(VueRouter);


const route = [
  { path: '/',component:Home},
  { path: '/q1',component: q1},
  { path: '/q2',component: q2},
  { path: '/q3',component: q3},
  { path: '/loading',component: loading},
  { path: '/resultA',component: resultA},
  { path: '/waste',component: waste},
  { path: '/carbon',component: carbon},
  { path: '/resultB',component: resultB},
  { path: '/loading2',component: loading2},
];

var firebaseConfig = {
  apiKey: "AIzaSyDb_Rk345fvOK30D6_QSx8DH_MLg3eJTPE",
  authDomain: "impactcalculator.firebaseapp.com",
  databaseURL: "https://impactcalculator.firebaseio.com",
  projectId: "impactcalculator",
  storageBucket: "impactcalculator.appspot.com",
  messagingSenderId: "698747761566",
  appId: "1:698747761566:web:d5b53afa6711da009e5c8f",
  measurementId: "G-SMB72CBLLE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();




const router = new VueRouter({
  routes:route,
  mode:'history'
});

export const bus = new Vue();

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})