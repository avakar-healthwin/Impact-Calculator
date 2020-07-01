<template>
  <div id="app">
    <!-- <app-home></app-home> -->
    <!-- <app-q1></app-q1> -->
    <!-- <app-q2></app-q2> -->
    <!-- <app-q3></app-q3> -->
    <!-- <app-loading></app-loading> -->
    <app-resultA></app-resultA>
    <!-- <app-loading2></app-loading2> -->
    <!-- <app-waste></app-waste> -->
    <!-- <app-carbon></app-carbon> -->
    <!-- <app-resultB></app-resultB> -->
    <!-- <router-view :data="Details"></router-view> -->
  </div>
</template>

<script>
import { bus } from './main'

import Home from './components/Home.vue'
import q1 from './components/q1.vue'
import q2 from './components/q2.vue'
import q3 from './components/q3.vue'
import loading from './components/loading.vue'
import resultA from './components/resultA.vue'
import loading2 from './components/loading2.vue'
import resultB from './components/resultB.vue'
import waste from './components/waste.vue'
import carbon from './components/carbon.vue'

export default {
  components:{
    'app-home':Home,
    'app-q1':q1,
    'app-q2':q2,
    'app-q3':q3,
    'app-loading':loading,
    'app-resultA':resultA,
    'app-loading2':loading2,
    'app-resultB':resultB,
    'app-waste':waste,
    'app-carbon':carbon,
  },
  data () {
    return {
      Details:{
        members:0,
        diesel_cars:0,
        petrol_cars:0,
        bikes:0,
        scooty:0,
      }
    }
  },
  mounted(){
    bus.$on('pass-members',(value) =>{
      this.Details.members = value;
    });
    bus.$on('pass-cars',(value) =>{
      this.Details.diesel_cars = value.diesel_cars;
      this.Details.petrol_cars = value.petrol_cars;
    });
    bus.$on('pass-bikes',(value) =>{
      this.Details.bikes = value.bikes;
      this.Details.scooty = value.scooty;
    })
  }
}
</script>

<style lang='scss'>
body {
   margin: 0;
   padding:0;
}
// *{
//   margin: 0;
//    padding:0;
// }
</style>
