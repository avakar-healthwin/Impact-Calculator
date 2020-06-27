
<template>
 <div class="main-container">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
     <dir class="header">
      <div class="title">Impact Calculator</div>
      <div class="menu">
        <router-link to="/"><i class='bx fa bxs-home'></i></router-link>
         <i v-on:click="openq3()" class="fas fa-arrow-left arrow"></i>
      </div>
    </dir>
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
    methods:{
        openq3(){
            this.$$router.replace('/q3');
        },
    },
  data () {
    return {
      
    }
  },
  mounted(){
      let vue = this;
      setTimeout(function(){
          vue.$router.replace('/resultA');
      },4000);
  }
}
</script>

<style lang="scss" scoped>
    *{
      font-family: Titillium Web;
      margin: 0px;
      padding: 0px;
    }
    .header{
        display: none;
    }
    .container{
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
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
    @media all and (max-width: 600px){
        .container{
            margin-top: 40px;
        }
        .container img{
            // position: relative;
            // top: 100px;
            width: 100%;
            height: auto;
        }

.container h1{
        font-family: Titillium Web;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 45px;
        /* identical to box height */

        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.05em;

        color: #40050C;
        max-width: 80%;

    }

  //-------------------------navbar----------------------
  .header{
    width: 100%;
    height: 50px;
    background: #661016;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .header .title{
    padding-left: 10px;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 50px;
    /* or 167% */

    display: flex;
    align-items: center;

    color: #FFFFFF;
  }
  .header .menu{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    // padding-top: 0px;
    // padding-top: 15px;
    // padding-top: 18px;
    padding: 10px;
  }
  a{
    text-decoration: none;
  }
  .header .menu i{
    flex: 50%;
    padding-top: 0px;
    max-width: 50%;
    font-size: 26px;
    color: white;
    display: flex;
    align-self: center;
    // align-items: center;
    // justify-content: center;
    box-sizing: border-box;
    border-radius:50%;
    padding: 4px;
    margin-right: 10px;
  }
  .header .menu .arrow{
    border: 1px solid #70D3CB;
  }
  //----------------------navbar--------------------------------------------
    }
</style>
