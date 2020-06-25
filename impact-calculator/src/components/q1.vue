
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
   <div class="image">
     <img src="../assets/familylines.png" alt="">
     
   </div>
   <div class="container">
     <div class="left">
       <h1>How many people are there in your family?</h1>
     </div>
     <div class="right">
       <input type="number" id="members" name="members" placeholder="Enter Here"><br><br>
       <button> Next</button>
     </div>
   </div>
   <router-link to="/"><i class="fas fa-arrow-left"></i></router-link>
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
    *{
      font-family: Titillium Web;
    }
    .main-container{
      left: 0px;
      right: 0px;
    }
    .image{
      width: 100%;
      height: 100vh;
      background: #40050C;
      // background-image: url('../assets/familylines.png');
      // background: #40050C;
      // background-repeat: no-repeat;
      // background-attachment: fixed;
      // background-size: 100% 70%;
    }
    .image img{
      width: 100%;
      // height: 80vh;
      height: auto;
    }
    .container{
      max-width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      background: rgba(191, 41, 46, 0.7);
      border-radius: 50px 50px 0px 0px;
      position: absolute;
      top: 60vh;
      left: 7px;
      right: 7px;
      bottom: 0;
      padding: 40px;
      padding-top: 20px;
      // opacity: 0.5;
    }
    
    .left{
      flex: 50%;
      max-width: 50%;
    }
    .left h1{
      max-width: 70%;
      font-family: Titillium Web;
      font-style: normal;
      font-weight: bold;
      font-size: 4vw;
      line-height: 75px;
      /* or 146% */

      display: flex;
      align-items: center;

      color: #FFFFFF;
      padding-left: 80px;
      padding-top: 0px;
    }
    .right{
      flex: 50%;
      max-width: 50%;
      display: flex;
      flex-flow: column nowrap;
      align-items: baseline;
      
      justify-content: center;
    }
    .right input{
      font-size: 30px;
      font-weight: 800;
      border: 2px solid #70D3CB;
      box-sizing: border-box;
      border-radius: 50px;
      background: rgba(191, 41, 46, 0.7);
      color: white;
      max-width: 60%;
      width: 20vw;
      align-self: center;
      outline: none;
      padding-left: 10px;
      text-align: center;
    }
    ::placeholder{
      color: white;
      text-align: center;
    }
    .right button{
      max-width: 80%;
      background: #7ABBB0;
      border: 2px solid #70D3CB;
      box-sizing: border-box;
      border-radius: 50px;
      font-size: 30px;
      text-align: center;
      font-weight: 900;
      padding: 10px;
      width: 400px;
      position: relative;
      left: 9.3vw;
      background: rgba(191, 41, 46, 0.7);
      color: white;
      outline: none;
    }
    .right button:hover{
      background: #70D3CB;
      cursor: pointer;
    }
    i{
      font-size: 20px;
      color: white;
      padding: 5px;
      border: 1px solid #70D3CB;
      box-sizing: border-box;
      position: absolute;
      bottom: 5%;
      left: 5%;
      border-radius: 50%;
    }

    @media all and (max-width: 500px){
      .image img{
        max-width: 100%;
        width: 400px;
        height: auto;
      }
      .container{
        top: 50%;
      }
      .container .left{
        flex: 100%;
        max-width: 100%;
        padding-left: 0px;
      }
      .container .left h1{
        max-width: 90%;
        padding-left: 0px;
        font-size: 30px;
        line-height: 40px;
      }
      .container .right{
        flex: 100%;
        max-width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: start;
      }
      .container .right input{
        max-width: 60%;
        height: 40px;
        width: 200px;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: .2ex;
        font-weight: 800;
      }
      .container .right button{
        height: 45px;
        width: 280px;
        max-width: 80%;
        font-size: 24px;
        padding-top: 0px;
        font-weight: 900;
        letter-spacing: .3ex;
        top: -20px;
      }
    //   i{
    //   font-size: 20px;
    //   color: white;
    //   padding: 5px;
    //   border: 1px solid #70D3CB;
    //   box-sizing: border-box;
    //   position: absolute;
    //   bottom: 10%;
    //   left: 10%;
    //   border-radius: 50%;
    // }
    }
</style>
