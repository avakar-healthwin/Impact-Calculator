
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
         <router-link to="/"><i class="fas hi fa-arrow-left"></i></router-link>
      </div>
    </div>

    <div class="container">
       <img src="../assets/car.gif" class="image2">
      <div class="cont">
         <div class="left">
             <h1 class="ques">How many active petrol cars do you have at home?  </h1>
             <div class="slidecontainer">
                 <div class="number">{{Cars.petrol_cars}}</div>
                <input type="range" min="0" max="5" value="10" class="slider" id="myRange" v-model="Cars.petrol_cars">
                <input type="number" class="input" id="members" name="members" placeholder="Enter Here" min="1" v-model="members">
            </div>
         </div>
         <div class="right">
             <h1 class="ques ques2">How many active diesel cars do you have at home?</h1>
             <div class="slidecontainer">
                 <div class="number">{{Cars.diesel_cars}}</div>
                <input type="range" min="0" max="5" value="10" class="slider" v-model="Cars.diesel_cars">
                <input type="number" class="input"  id="members" name="members" placeholder="Enter Here" min="1" v-model="members">
            </div>
         </div>
       </div>
         <div class="butt"><button class="button" v-on:click="passCars()"> Next </button>
        </div>
     <router-link to="/q1"><i class="fas faa fa-arrow-left"></i></router-link>
     </div>
 </div>
</template>

<script>
import { bus } from '../main'

export default {
    components: {
      
    },
  data () {
    return {
        Cars:{
            petrol_cars:0,
            diesel_cars:0,
        }
      
    }
  },
  methods:{
      passCars(){
        let vue = this;
        bus.$emit('pass-cars',this.Cars);
        vue.$router.push('/q3');
      }
  }
}
</script>

<style lang="scss" scoped>
.image2{
  display:none;
}
    *{
      font-family: Titillium Web;
    //   margin: 0px;
    //   padding: 0px;
    }
    .main-container{
        background-image: url('../assets/car.gif');
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 100vh;
    }

    .header{
      display:none;
    }
    .container{
      background: rgba(64, 5, 12, 0.4);
   // padding-top: 30px;
    display: flex;
    flex-direction:column;
    width: 100%;
    height:100vh;
   // flex-flow: row wrap;
    justify-content: space-evenly;
}
.cont{
  display:flex;
  justify-content:center;
  align-items:center;

}

.input{
  display:none;
}
  ::placeholder{
      color: white;
      text-align: center;
    }

.container .left{
    display:flex;
    flex: 50%;
    width: 50%;
    flex-direction:column;
}

//---------for range slider
.slidecontainer{
    width: 90%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    padding-left: 0px;
}
.number{
  margin-left:12%;
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
  margin-left:8%;
  -webkit-appearance: none;
  width: 50%;
  height: 10px;
  border-radius: 5px;
  background:  #70D3CB;
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
// .right h1{
//     max-width: 73%;
// }
.ques{
  margin-left:5%;
//  margin-top:10%;
    max-width: 75%;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 900;
    font-size: 66px;
    line-height: 85px;
    /* or 146% */

    display: flex;
    align-items: center;

    color: #FFFFFF;
    padding-left: 80px;
}
.container .right{
  display:flex;
    flex: 50%;
    width: 100%;
    flex-direction:column;
}

.butt{  

  width:100%;
  height:auto;
  display:flex;
  justify-content:center;
  align-items:center;
}

.button{

width: 476px;
height: 64px;
border: 2px solid #70D3CB;
box-sizing: border-box;
border-radius: 50px;

font-style: normal;
font-weight: 900;
font-size: 36px;
line-height: 55px;
background: transparent;
display: flex;
align-items: center;
justify-content:center;
text-align: center;
letter-spacing: 0.05em;
color: #FFFFFF;

}

button:hover{
    background: #70D3CB;
    cursor: pointer;   
}
.faa{
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


@media all and (max-width:1000px){

*{
  background-image:none !important;
  background: #40050C;
}
.faa{
  display:none;
}

.main-container{
height:210vh;
display:flex;
justify-content:center;
align-items:flex-end;
}

.image2{
  display:flex;
  position:absolute;
  top:0;
  width:100%;
  height:50.5%;
  z-index:0;
}

.cont{
  z-index:10;
  position:absolute;
  top:37vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  background: rgba(64, 5, 12, 0.4);
border-radius: 46px 46px 0px 0px;

}
input{
display:none;
}

   input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.number{
  display:none;
}
.ques{
font-size:36px;
background: none;
margin-left:0;
padding:0;
padding-top:60px;
line-height:60px;
}
.ques2{
  margin:0;
  margin-bottom:30px;
}
.container .left{
  width:100%;
    background: rgba(64, 5, 12, 0.4);
   // background:blue;
border-radius: 46px 46px 0px 0px;
display:flex;
justify-content:center;
align-items:center;
margin-left:0;
padding:0;
}

.container .right{
    width:100%;
 //   background:blue;
    display:flex;
justify-content:flex-start;
align-items:center;
margin-left:0;
padding:0;
}
.input{

width: 324px;
height: 50px;
padding:0;
margin-left:30px;
border: 2px solid #FFD9A0;
box-sizing: border-box;
border-radius: 50px;
outline:none;
font-family: Titillium Web;
font-style: normal;
font-weight: 900;
font-size: 24px;
line-height: 37px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.05em;
text-color: white;
color:white;

}
.butt{
  z-index:100;
 
  width:100%;
  height:auto;
  display:flex;
  justify-content:flex-start;
  align-items:center;
}

.button{
  margin-left:11%;
z-index:10;
width: 324px;
height: 70px;
border: 2px solid #70D3CB;
box-sizing: border-box;
border-radius: 50px;

font-style: normal;
font-weight: 900;
font-size: 36px;
line-height: 55px;
background: transparent;
display: flex;
align-items: center;
justify-content:center;
text-align: center;
letter-spacing: 0.05em;
color: #FFFFFF;

}


}

@media all and (max-width:700px){

.image2{
  margin-top:55px;
}

.header{
  z-index:3;
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
      margin-left:10%;
      width:100%;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 20px;
    color: #FFFFFF;
    }

    .menu{
  margin-right: 10%;
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
