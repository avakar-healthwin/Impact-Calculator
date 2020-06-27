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
         <i v-on:click="openresultA()" class="fas fa-arrow-left arrow"></i>
      </div>
    </dir>
    <div class="container">
        <img src="../assets/loading2.gif" alt="">
    </div>
    <h1>Preparing your manure!</h1>
  </div>
</template>

<script>

export default {
  components:{
    
  },
  data () {
    return {
      
    }
  },
  methods:{
    openresultA(){
      this.$$router.replace('/resultA');
    }
  },
  mounted(){
    let vue = this;
    setTimeout(function(){
      vue.$router.replace('/resultB');
    },4000);
  }
}
</script>

<style lang='scss' scoped>
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
    justify-content: center;
    align-items: center;
}
.container img{
    max-width: 60%;
    height: auto;
}
h1{
    position: absolute;
    top: 70%;
    left: 40%;
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

@media screen and (max-width: 500px){
  .container img{
    max-width: 100%;
    height: auto;
    position: absolute;
    top: 25%;
  }
  h1{
    font-size: 30px;
    max-width: 60%;
    line-height: 45px;
    // position: absolute;
    left: 20%;
    top: 60%;
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
