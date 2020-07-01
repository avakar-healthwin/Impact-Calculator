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
         <i v-on:click="openresultA()" class="fas fa-arrow-left arrow"></i>
      </div>
    </dir>
      <div class="container">
          <h1>Carbon Footprint </h1>
          <div class="para">
            <p>Your vehicles produce <span>{{co2_by_vehicles}}</span> kg of CO2 every year!</p>
            <p>It’s time you plant <span>{{no_of_trees}}</span> trees.</p>
          </div>
          <img src="../assets/asset.png" alt="">
          <div class="button">
              <button v-on:click="replaceCarbon()" class="btn-1">See Waste Generated </button>
              <button v-on:click="openLoading2()" class="btn-2">Check your compost</button>
          </div>
      </div>
      <router-link to="/resultA"><i class="fas fa-arrow-left  last-i"></i></router-link>
  </div>
</template>

<script>

export default {
  components:{
    
  },
  methods:{
    openresultA(){
      this.$router.replace('/resultA');
    }
  },
  data () {
    return {
      co2_by_vehicles:0,
      no_of_trees:0,
    }
  },
  methods:{
    replaceCarbon(){
      this.$router.replace('/waste');
    },
    openLoading2(){
        this.$router.replace('/loading2');
    },
  },
  mounted(){
      this.co2_by_vehicles = (this.data.diesel_cars*5400) + (this.data.petrol_cars*4600) + (this.data.bikes*2030) + (this.data.scooty*1700);
      // this.co2_by_vehicles = this.co2_by_vehicles.toFixed(2);
      this.co2_by_vehicles = Math.round(this.co2_by_vehicles);
      this.no_of_trees = ((this.data.diesel_cars*5400)/25) + ((this.data.petrol_cars*4600)/25) + ((this.data.bikes*2030)/25) + ((this.data.scooty*1700)/25);
      // this.no_of_trees = this.no_of_trees.toFixed(2);
      this.no_of_trees = Math.round(this.no_of_trees);
  },
  props:['data']
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
        max-width: 100%;
        height: 100vh;
        // height: 100%;
        background: #40050C;
    }
.container{
  display: flex;
  flex-flow: column nowrap;
//   justify-content: center;
  align-items: flex-start;
  justify-content: start;
  padding-left: 80px;
  padding-top: 50px;
}
.container h1{
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 105px;
    /* or 146% */

    display: flex;
    align-items: center;

    color: #FFFFFF;
}
.container .para{
  width: 90%;
  max-width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 20px;
}
.container p{
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 45px;
    // display: flex;
    // align-items: center;
    letter-spacing: -0.015em;

    /* Gray 6 */

    color: #F2F2F2;
    max-width: 80%;
}
.container p span{
  font-size: 48px;
  padding: 10px;
  padding-left: 25px;
  padding-right: 25px;
  border:  2px solid white;
  border-radius: 50%;
}
.container img{
    // max-width: 80%;
    // width: 40%;
    // height: 200px;
    // height: auto;
    // position: relative;
    // left: 0px;
    // right: 0px;
    position: absolute;
    top: 35%;
    width: 80%;
    // height: auto;
    height: 380px;
    // margin-bottom: 30%;
}
// .container .below-image{
//   font-family: Titillium Web;
//     font-style: normal;
//     font-weight: 300;
//     font-size: 36px;
//     line-height: 45px;
//     display: flex;
//     align-items: center;
//     letter-spacing: -0.015em;

//     /* Gray 6 */

//     color: #F2F2F2;
//     max-width: 80%;
//     margin-top: 20%;
// }
.container .button{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    max-width: 100%;
    padding-top: 10px;
    width: 80%;
    margin-top: 29%;
}
.container .button .btn-1{
  background: rgba(29, 132, 143, 0.5);;
  border-radius: 64px;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 40px;
  /* or 292% */

  // display: flex;
  // align-items: center;
  // justify-content: center;
  color: #1D848F;
  max-width: 40%;
  height: 50px;
  width: 400px;
  border: none;
  outline: none;
  opacity: 0.5;
  max-width: 40%;
}

.container .button .btn-2{
  background: #40050C;
  border-radius: 50px;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 55px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  color: #FFFFFF;
  max-width: 40%;
  height: 50px;
  width: 400px;
  justify-content: center;
  border: 2px solid #1D848F;
  outline: none;
  max-width: 40%;
}
.container .btn-2:hover{
   background: #1D848F;;
   cursor: pointer;
}
.container .btn-1:hover{
  cursor: pointer;
  opacity: 0.8;
}
.last-i{
    position: absolute;
    left: 6%;
    bottom: 8%;
    color: white;
    font-size: 24px;
    box-sizing: border-box;
    border: 1px solid #70D3CB;
    padding: 6px;
    border-radius: 50%;
}
@media all and (max-width: 1300px) and (min-width: 1100px){
  .container img{
    position: absolute;
    top: 35%;
    height: 350px;
    width: 80%;
    // margin-bottom: 30%;
}
.container .button{
  margin-top: 30.5%;
}
}
@media all and (max-width: 1100px){
  .container h1{
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 55px;
    /* or 146% */

    display: flex;
    align-items: center;

    color: #FFFFFF;
}
.container p{
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 40px;
    // display: flex;
    // align-items: center;
    letter-spacing: -0.015em;

    /* Gray 6 */

    color: #F2F2F2;
    max-width: 80%;
    margin-top: 10px;
}
.container img{
    position: absolute;
    top: 30%;
    height: 400px;
    width: 80%;
    // margin-bottom: 30%;
}
// .container .below-image{
//   font-family: Titillium Web;
//     font-style: normal;
//     font-weight: 300;
//     font-size: 28px;
//     line-height: 40px;
//     display: flex;
//     align-items: center;
//     letter-spacing: -0.015em;

//     /* Gray 6 */

//     color: #F2F2F2;
//     max-width: 80%;
//     margin-top: 35%;
// }
.container .button{
  margin-top: 43%;
}
.container .button .btn-1{
  background: #661016;
  border-radius: 64px;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;
  /* or 292% */

  // display: flex;
  // align-items: center;
  // justify-content: center;
  color: #FFFFFF;
  max-width: 40%;
  height: 50px;
  width: 400px;
  // margin-bottom: 20px;
  border: none;
  outline: none;
  opacity: 0.5;
  // align-self: center;
}
.container .button .btn-2{
  background: #40050C;
  border-radius: 50px;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 35px;
  /* identical to box height */

  // display: flex;
  // align-items: center;
  // text-align: center;
  letter-spacing: 0.05em;

  color: #FFFFFF;
  max-width: 40%;
  height: 50px;
  width: 400px;
  justify-content: center;
  border: 2px solid #7ABBB0;
  outline: none;
}
}

@media all and (max-width: 600px){
  .container{
    padding-left: 40px;
    padding-top: 0px;
  }
  .container h1{
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 45px;
    /* or 146% */

    display: flex;
    align-items: center;

    color: #FFFFFF;
    margin-top: 10px;
}
.top1-i{
  display: none;
}
.container p{
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    // display: flex;
    // align-items: center;
    letter-spacing: -0.015em;

    /* Gray 6 */

    color: #F2F2F2;
    max-width: 90%;
    margin-top: 10px;
}
.container img{
    position: absolute;
    top: 24%;
    left: 20px;
    right: 20px;
    height: auto;
    width: 90%;
    // margin-bottom: 30%;
}
.container .below-image{
  font-family: Titillium Web;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    // display: flex;
    // align-items: center;
    letter-spacing: -0.015em;

    /* Gray 6 */

    color: #F2F2F2;
    max-width: 90%;
    margin-top: 50%;      // FIND ANOTHER APPROACH FOR THIS METHOD
}
.container .button{
    display: flex;
    flex-flow: column;
    justify-content: start;
    align-items: flex-start;
    max-width: 100%;
    padding-top: 10px;
    width: 100%;
}
.container .button .btn-1{
  background: #661016;
  border-radius: 64px;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 24px;
  /* or 292% */

  // display: flex;
  // align-items: center;
  // justify-content: center;
  color: #FFFFFF;
  max-width: 60%;
  height: 40px;
  width: 400px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  opacity: 0.5;
  // align-self: center;
  align-self: flex-start;
  margin-top: 10px;
  margin-bottom: 15px;
}
.container .button .btn-2{
  background: #40050C;
  border-radius: 50px;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  // display: flex;
  // align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  color: #FFFFFF;
  max-width: 80%;
  height: 50px;
  width: 550px;
  justify-content: center;
  border: 2px solid #7ABBB0;
  outline: none;
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
  .last-i{
  display: none;
}
}

</style>
