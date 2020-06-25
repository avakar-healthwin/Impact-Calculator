
<template>
 <div class="main-container">
     <div class="container">
         <img src="../assets/loading.gif" alt="">
         <h1>Calculating Results</h1>
     </div>
 </div>
</template>

<script>

export default {
    components: {
      
    },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }
    .container img{
        width: 50%;
        height: auto;
    }
    .container h1{
        font-family: Titillium Web;
        font-style: normal;
        font-weight: 900;
        font-size: 36px;
        line-height: 55px;
        /* identical to box height */

        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.05em;

        color: #40050C;

    }
</style>
