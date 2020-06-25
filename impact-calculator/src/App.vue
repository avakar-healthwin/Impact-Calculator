<template>
  <div id="app">
    <!-- <app-home></app-home> -->
    <!-- <app-q1></app-q1> -->
    <!-- <app-q2></app-q2> -->
    <!-- <app-q3></app-q3> -->
    <!-- <app-loading></app-loading> -->
    <app-resultA></app-resultA>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import q1 from './components/q1.vue'
import q2 from './components/q2.vue'
import q3 from './components/q3.vue'
import loading from './components/loading.vue'
import resultA from './components/resultA.vue'

export default {
  components:{
    'app-home':Home,
    'app-q1':q1,
    'app-q2':q2,
    'app-q3':q3,
    'app-loading':loading,
    'app-resultA':resultA
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang='scss'>
</style>
