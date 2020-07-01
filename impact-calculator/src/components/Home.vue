
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
    <router-link to="/"><i class='bx fa bxs-home top1-i'></i></router-link>
    <div class="pc">
      <div class="container">
        <div class="left">
            <h1>Impact Calculator</h1>
            <p>Get insights about the impact of your household waste.</p>
            <router-link to="/q1"><button>Calculate Your Impact! </button></router-link>
        </div>
        <div class="right">
          <div class="image">
            <img src="../assets/tree.gif" alt="" width="615" height="750">
        </div>
      </div>
    </div>
  </div>
  <div class="mobile">
      <dir class="header">
      <div class="title">Impact Calculator</div>
      <div class="menu">
        <router-link to="/"><i class='bx fa bxs-home'></i></router-link>
         <i v-on:click="openq1()" class="fas fa-arrow-right arrow"></i>
      </div>
    </dir>
    <div class="mob-container">
      <h1>Ecological Impact Calculator</h1>
      <img src="../assets/tree.gif" alt="">
      <p>Get an insight about the impacts of your household-waste. Let’s save the world by adoptingto Waste Management practices! </p>
      <button v-on:click="openq1()" >Calculate Your Impact!</button>

    </div>
  </div>
</div>
</template>

<script>

export default {
    components: {
      
    },
    methods:{
      openq1(){
        this.$router.push('/q1');
      },
    },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
body {
   margin: 0;
   padding: 0;
}
    *{
      font-family: Titillium Web;
      margin: 0px;
      padding: 0px;
    }
    .mobile{
      display: none;
    }
    .top1-i{
      position: absolute;
      font-size: 24px;
      top: 40px;
      left: 40px;
      color: white;
      padding: 10px;
      border-radius: 50%;
      // background: #7ABBB0;
    }
    .top1-i:hover{
      cursor: pointer;
      background: #7ABBB0;
    }
    .container{
      width:100%;
      height:100vh;
      // background:green;
      display: flex;
      flex-flow: row nowrap;
      align-items:flex-start;
      padding-bottom: 0px;
      margin-bottom: 0px;
    }
    .left{
      // background:blue;
      flex: 60%;
      max-width: 60%;
      height: 100vh;
      background:  #40050C;
      // padding-left: 80px;
      margin-bottom: 0px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
    }
    .left h1{
      margin-top:4%;
      // margin-left:3%;
      max-width: 80%;
      font-family: Titillium Web;
      font-style: normal;
      font-weight: 900;
      font-size: 75px;
      line-height: 95px;
      display: flex;
      align-items: center;
      
      color: #FFFFFF;
    }
    .left p{
      max-width: 60%;
      // margin-left:3%;
      font-family: Titillium Web;
      font-style: normal;
      font-weight: 300;
      font-size: 32px;
      line-height: 55px;
      display: flex;
      align-items: center;
      letter-spacing: -0.019em;

      /* Gray 6 */

      color: #F2F2F2;
      margin-top: 40px;
      text-align: center;

    }
    .left button{
      margin-top:50%;
      // margin-left:3%;
      width: 540px;
      // width: 80%;
      // max-width: 80%;
      height:84px;
      max-width: 100%;
      font-family: Titillium Web;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 45px;
      /* identical to box height */

      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: 0.05em;
      background: #40050C;
      color: #FFFFFF;
      border: 2px solid #1D848F;
      box-sizing: border-box;
      border-radius: 50px;
      outline: none;
      align-self: flex-end;
      
    }
    a{
      text-decoration: none;
    }
    .left button:hover{
      background: #1D848F;
      cursor: pointer;
    }
    .right{
      flex: 40%;
      max-width: 40%;
      height: 100vh;
      padding-bottom: 0px;
      margin-bottom: 0px;
    }
    .right .image{
      max-width: 100%;
      height:100vh;
    }
    .right img{
      max-width: 100%;
      height: 100vh;
     
    }
@media all and (max-width: 600px){
  .header
    {
    position: relative;
    top: auto;
    }
  .pc{
    display: none;
  }
  .top1-i{
    display: none;
  }
  .mobile{
    display: block;
    margin-top: 40px;
  }
  .mob-container{
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    background: #40050C;
  }
  .mob-container h1{
    padding: 20px;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 50px;
    /* or 104% */

    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #FFFFFF;

  }
  .mob-container img{
    width: 100%;
    max-width: 100%;
    height: auto;
  }
  .mob-container p{
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
    letter-spacing: -0.015em;

    /* Gray 6 */

    color: #F2F2F2;
    padding: 20px;
    // align-self: center;
  }
  .mob-container button{
    border: 2px solid #70D3CB;
    box-sizing: border-box;
    border-radius: 50px;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height */

    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.05em;

    color: #FFFFFF;
    width: 85%;
    max-width: 85%;
    padding: 20px;
    background: transparent;
    height: 50px;
    outline: none;
    // align-self: center;
    align-self: flex-start;
    margin-bottom: 20px;
    margin-left: 20px;
    text-align: center;
  }
  .mob-container button:hover{
    background: #70D3CB;
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
    position: fixed;
    top: 0;
    z-index: 20;
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
@media all and (max-width: 1000px) and (min-width: 600px){
  .left h1{
    font-size: 50px;
    line-height: 70px;
  }
  .left button{
    height: 60px;
    width: 400px;
  }
}
</style>
