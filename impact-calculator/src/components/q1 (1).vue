
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

     <div class="header">
      <div class="icons">
         <h1 class="imp"> Impact Calculator</h1>
        </div>
        <!-- <img   src="" alt=""> -->
        <div class="menu">
        <router-link to="/"><i class='bx hi fa bxs-home'></i></router-link>
         <router-link to="/"><i class="fas hi fa-arrow-right"></i></router-link>
      </div>
    </div>

   <div class="image">
     <img src="../assets/familylines.png" alt="">
   </div>
   <div class="container">
     <div class="left">
       <h1>How many people are there in your family?</h1>
     </div>
     <div class="right">
       <input type="number" id="members" name="members" placeholder="Enter Here" min="1" v-model="members"><br>
       <button v-on:click="passMembers()"> Next</button>
     </div>
   </div>
   <router-link to="/"><i class="fas faa fa-arrow-left"></i></router-link>
 </div>
</template>


<script>
import { bus } from '../main'

export default {
    components: {
      
    },
  data () {
    return {
      members:"",
    }
  },
  methods:{
    passMembers(){
      let vue = this;
      bus.$emit('pass-members',this.members);
      vue.$router.push('/q2');
    }
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
  display:none;
}
    .image{
      width: 100%;
      height: 100vh;
      background: #40050C;
    
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
      left: 0px;
      right: 0px;
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
      margin-left:10%;
      max-width: 80%;
      font-family: Titillium Web;
      font-style: normal;
      font-weight: 800;
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
      max-width: 50%;
      display: flex;
      flex-flow: column nowrap;
     justify-content: center;
      align-items: center;
    }
    .right input{
      font-size: 30px;
      font-weight: 800;
      border: 2px solid #70D3CB;
      box-sizing: border-box;
      border-radius: 50px;
      background: rgba(191, 41, 46, 0.7);
      color: white;
      width: 25vw;
      align-self: center;
      outline: none;
      // padding-left: 10px;
      text-align: center;
    }
    ::placeholder{
      color: white;
      text-align: center;
    }
    input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
    .right button{
      background: #7ABBB0;
      border: 2px solid #70D3CB;
      box-sizing: border-box;
      border-radius: 50px;
      font-size: 30px;
      text-align: center;
      font-weight: 900;
      padding: 10px;
      width: 500px;
      background: rgba(191, 41, 46, 0.7);
      color: white;
      outline: none;
    }
    .right button:hover{
      background: #70D3CB;
      cursor: pointer;
    }
    faa{
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

    @media all and (max-width: 600px){
      .image img{
        margin-top:110px;
        max-width: 100%;
        width: 400px;
        height: auto;
      }
      .container{
        display:flex;
        align-items:center;
        top: 30%;
      }
      .container .left{
        flex: 100%;
        max-width: 100%;
        padding-left: 0px;
      }
      .container .left h1{
        margin-top:10%;
        max-width: 90%;
        padding-left: 0px;
        font-size: 35px;
        line-height: 40px;
      }
      .container .right{
        width: 100%;
        display: flex;
      }
      .container .right input{
        height: 50px;
        width: 324px;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: .2ex;
        font-weight: 800;
      }
      .container .right button{
        height: 70px;
        width: 324px;
        font-size: 24px;
        padding-top: 0px;
        font-weight: 900;
        letter-spacing: .3ex;
        top: -20px;
      }

    }


@media all and (max-width:600px){
  
.header{
  top: 0px;
   width: 100%;
  height: 55px;
  position: fixed;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background: #40050C;
}

    .imp{
      width:100%;
      margin-left:5%;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 20px;
    color: #FFFFFF;
    }

    .menu{
  margin-right: 4%;
  display:flex;
  justify-content:center;
  align-items:center;
}
    .hi{
    font-size: 20px;
    color: white;
    padding: 5px;
    border: 1px solid #70D3CB;
    box-sizing: border-box;
    border-radius: 50%;
    margin:10px;
    }
}




</style>
