
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
    <dir class="header">
      <div class="title">Impact Calculator</div>
      <div class="menu">
        <router-link to="/"><i class='bx fa bxs-home'></i></router-link>
         <i v-on:click="openq2()" class="fas fa-arrow-left arrow"></i>
      </div>
    </dir>
     <div class="title1">
         <img src="../assets/bike.gif" alt="">
     </div>
     <div class="container">
         <div class="left">
             <h1>How many active motorcycles do you have? </h1>
             <input class="scooty-bike" type="number" id="members" name="members" placeholder="Enter Here" min="1" v-model="Motorcycles.bikes"><br>
             <div class="slidecontainer">
                 <div class="number">{{Motorcycles.bikes}}</div>
                <input type="range" min="0" max="5" value="10" class="slider" id="myRange" v-model="Motorcycles.bikes">
            </div>
         </div>
         <div class="right">
             <h1>How many active scooties do you have?</h1>
             <input class="scooty-bike" type="number" id="members" name="members" placeholder="Enter Here" min="1" v-model="Motorcycles.scooty"><br>
             <div class="slidecontainer">
                 <div class="number">{{Motorcycles.scooty}}</div>
                <input type="range" min="0" max="5" value="10" class="slider" v-model="Motorcycles.scooty">
            </div>
         </div>
     </div>
     <div class="btn"><button v-on:click="passBikes()"> Next </button></div>
     <router-link to="/q2"><i class="fas fa-arrow-left top-i"></i></router-link>
    </div>
</template>

<script>
import { bus } from '../main'

export default {
    components: {
      
    },
  data () {
    return {
      Motorcycles:{
            bikes:"",
            scooty:"",
        }
    }
  },
  methods:{
      passBikes(){
        let vue = this;
        bus.$emit('pass-bikes',this.Motorcycles);
        vue.$router.push('/loading');
      },
      openq2(){
          this.$router.replace('/q2');
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
.main-container{
    background: #40050C;
    height: 100vh;
}
.title1{
    max-width: 100%;
    height: 20%;
    background: rgba(191, 41, 46, 0.7);
    border-radius: 0 0 50px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.title1 img{
    height: 100px;
    width: 100px;
    max-width: 100%;
    height: auto;
}
.container{
    display: flex;
    max-width: 100%;
    flex-flow: row wrap;
    justify-content: space-evenly;
}
.container .left{
    flex: 50%;
    max-width: 50%;
    // display: flex;
    // flex-flow: column nowrap;
    // justify-content: start;
}

//---------for range slider
.slidecontainer{
    max-width: 80%;
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    padding-top: 20px;
}
.number{
    padding-left: 20px;
    height: 60px;
    width: 60px;
    font-weight: 900;
    border-radius: 30px;
    border: 2px solid white;
    color: white;
    font-size: 36px;
    border: 2px solid #70D3CB;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}
.slider {
  -webkit-appearance: none;
  width: 50%;
  height: 10px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  align-self: center;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 23px;
  height: 24px;
  border: 0;
  background: url('../assets/logo.png');
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 23px;
  height: 24px;
  border: 0;
  background: url('../assets/logo.png');
  cursor: pointer;
}
//------------end of range slider

h1{
    max-width: 80%;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 105px;
    /* or 146% */

    display: flex;
    align-items: center;

    color: #FFFFFF;
    padding-left: 80px;
}
.container .right{
    flex: 50%;
    max-width: 50%;
}
.scooty-bike{
    display: none;
}
.header{
    display: none;
}
.btn{
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    width: 30%;
    border: 2px solid #70D3CB;
    box-sizing: border-box;
    border-radius: 50px;
    height: 60px;
    display: flex;
    justify-content: center;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 55px;
    /* identical to box height */

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;

    color: #FFFFFF;
    background: #40050C;
    text-align: center;
    // position: relative;
    // left: 34%;
    // top: 10%;
    outline: none;
    
}
button:hover{
    background: #70D3CB;
    cursor: pointer;
    
}
.top-i{
    position: absolute;
    left: 4%;
    bottom: 8%;
    color: white;
    font-size: 24px;
    box-sizing: border-box;
    border: 1px solid #70D3CB;
    padding: 6px;
    border-radius: 50%;
}
@media all and (max-width: 1200px){
    .container{
        display: flex;
        flex-flow: row wrap;
    }
.container .left{
    flex: 100%;
    max-width: 100%;
    margin-bottom: 40px;
}
.container .right{
    flex: 100%;
    max-width: 100%;
}

h1{
    font-size: 36px;
    line-height: 45px;
    margin-top: 20px;
    margin-bottom: 20px;
}
button{
    width: 60%;
}
}

@media all and (max-width: 600px){

.slidecontainer{
    display: none;
}
.top1-i{
    display: none;
}
.scooty-bike{
    display: block;
    border: 2px solid #FFD9A0;
    box-sizing: border-box;
    border-radius: 50px;
    width: 100%;
    max-width: 100%;
    height: 50px;
    outline: none;
    background: transparent;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 37px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;

    color: #FFFFFF;
}
::placeholder{
      color: white;
      text-align: center;
    }
    .container{
        padding: 30px;
        padding-bottom: 0px;
    }
    .container .left{
        margin-bottom: 0px;
    }
    .container .right{
        margin-bottom: 0px;
    }
    h1{
        margin-right: 0px;
        font-size: 28px;
        line-height: 40px;
        max-width: 100%;
        margin-top: 0px;
        margin-bottom: 15px;
    }
    .btn{
        margin-top: 0px;
        padding: 30px;
        padding-top: 0px;
        
    }
    .btn button{
        width: 100%;
        height: 60px;
        border: 2px solid #70D3CB;
        box-sizing: border-box;
        border-radius: 50px;
        margin-bottom: 10px;
    }
    .title1{
        margin-top: 40px;
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
    z-index: 10;
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
  .top-i{
      display: none;
  }
  h1{
      padding-left: 0px;
  }
}
</style>
