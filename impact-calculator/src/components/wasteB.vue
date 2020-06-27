<template>
  <div class="main-container" >
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
    <div class="container">
      <div>
      <h1> Carbon Footprint</h1>
      <h2> Your vehicles produce XYZ kg of CO2 every year</h2>
    </div>
     <div class="cont">
      <img class="image" src="../assets/Asset 1.png"> 
    </div>
    <div class="cont2">
      <div class="carfoot">See Carbon Footrint</div>
      <routerlink><Button class="button">Check Your compost</Button></routerlink>
    </div>
    </div>

</div>
</template>

<script>

export default {

  components:{
    
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang='scss'>
*{
  padding:0;
  margin-left:1.5%;
  Font-family: Titillium Web;


}
   body{
    background-color:#40050C;
  }
  .container{
    display:flex;
    flex-direction:column;
    justify-contnent: space-between;
    align-items:space-between;
    width:100%;
    height:100vh;
  }

h1{
 
display: flex;
align-items: center;
font-style: normal;
font-weight: 900;
font-size: 72px;
padding:0;
margin:0;
 margin-top:5%;
display: flex;
align-items: center;

color: #FFFFFF;


}
h2{
  margin:0;
//width:100%;
font-family: Titillium Web;
font-style: normal;
font-weight: 300;
font-size: 36px;

display: flex;
align-items: center;
letter-spacing: -0.015em;
color: #F2F2F2;
}
.cont{
  top:25%;
  position:absolute;
display:flex;
width:100%;
height:auto;
}

.image{
  width:70%;
height:auto;
}

.carfoot{
width: 354px;
height: 39.19px;

font-family: Titillium Web;
font-style: normal;
font-weight: 900;
font-size: 36px;
line-height: 105px;
/* or 292% */

display: flex;
align-items: center;
justify-contnent:center;
text-align:center;
padding-left:30px;
color: #CA3338;
background: #661016;
border-radius: 64px;
}
.button{

margin-top:20px;
border: 2px solid #70D3CB;
box-sizing: border-box;
border-radius: 50px;

width: 606.65px;
height: 84px;

font-family: Titillium Web;
font-style: normal;
font-weight: 900;
font-size: 36px;
line-height: 55px;

background-color:#40050C;

display: flex;
align-items: center;
text-align: center;
justify-content:center;
text-align:center;
letter-spacing: 0.05em;
color: #FFFFFF;
margin-bottom:10%;
}
.cont2{
 // position:absolute;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

</style>
