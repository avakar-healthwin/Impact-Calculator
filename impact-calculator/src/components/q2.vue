
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
    <div class="container">
         <div class="left">
             <h1>How many active motorcycles do you have? </h1>
             <div class="slidecontainer">
                 <div class="number">{{motorcycle}}</div>
                <input type="range" min="1" max="10" value="10" class="slider" id="myRange" v-model="motorcycle">
            </div>
         </div>
         <div class="right">
             <h1>How many active scooties do you have?</h1>
             <div class="slidecontainer">
                 <div class="number">{{scooty}}</div>
                <input type="range" min="1" max="10" value="10" class="slider" v-model="scooty">
            </div>
         </div>
     </div>
     <button> Next </button>
     <router-link to="/q1"><i class="fas fa-arrow-left"></i></router-link>
 </div>
</template>

<script>

export default {
    components: {
      
    },
  data () {
    return {
      motorcycle:0,
      scooty:0,
    }
  }
}
</script>

<style lang="scss" scoped>
    .main-container{
        background-image: url('../assets/car.gif');
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 100vh;
    }
    .container{
        padding-top: 30px;
    display: flex;
    max-width: 100%;
    flex-flow: row wrap;
    justify-content: space-evenly;
}
.container .left{
    flex: 50%;
    max-width: 50%;
}

//---------for range slider
.slidecontainer{
    width: 90%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    padding-left: 50px;
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
button{
    width: 30%;
    border: 2px solid #70D3CB;
    box-sizing: border-box;
    border-radius: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
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

    color: #FFFFFF;
    background: tre;
    text-align: center;
    position: relative;
    left: 35%;
    top: 10%;

}
button:hover{
    background: #70D3CB;
    cursor: pointer;
    
}
i{
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
</style>
