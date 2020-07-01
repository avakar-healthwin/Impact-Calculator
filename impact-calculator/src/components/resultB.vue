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
    <img class="top-img" src="../assets/resultB.gif" alt="">
    <div class="title1">
         <h1>Congratulations!</h1>
     </div>
    <div class="container">
      <!-- <h1>Your compost can fertilize {{no_of_fields}} crop fields and help farmers save {{amount}} amount.</h1> -->
      <h2>You just reduced your household waste by <span> 40%!</span></h2>
      <img src="../assets/3.png" alt="">
      <!-- <h2>You just reduced your household waste by 40%! </h2> -->
    </div>
    <router-link to="/resultA"><i class="fas fa-arrow-left  last-i"></i></router-link>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      no_of_fields:0,
      amount:0,
      total_waste_gen:0,
    }
  },
  methods:{
    openresultA(){
      this.$router.replace('/resultA');
    },
    saveData(){
      let vue = this;
      let User={
        members: vue.data.members,
        petrol_cars: vue.data.petrol_cars,
        diesel_cars: vue.data.diesel_cars,
        bikes: vue.data.bikes,
        scooty: vue.data.scooty,
        total_waste_gen: vue.total_waste_gen,
        no_of_fields: vue.no_of_fields,
        amount: vue.amount
      }
      var db = firebase.firestore();
          let v = Math.random().toString(36).slice(2); 
          db.collection("users").doc(v+'.data').set({
              User
          })
          .then(function() {
              console.log("Document successfully written!");
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });
    },
  },
  mounted(){
    this.total_waste_gen = this.data.members*0.5*365*70*0.00110231;
    this.no_of_fields = (this.total_waste_gen*0.7*0.4)/2.625;
    // this.no_of_fields = this.no_of_fields.toFixed(2);
    this.no_of_fields = Math.round(this.no_of_fields);
    this.amount = this.total_waste_gen*0.7*0.4*50*1000;
    // this.amount = this.amount.toFixed(2);
    this.amount = Math.round(this.amount);
    this.saveData();
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
.main-container{
  background: #40050C;
  height: 100vh;
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
.title1{
    max-width: 100%;
    height: 20%;
    background: rgba(113, 209, 201, 0.9);
    border-radius: 0 0 50px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.title1 h1{
  max-width: 60%;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 55px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

color: #FFFFFF;
}
.top-img{
  position: absolute;
  top: 0;
  left: 30%;
  text-align: center;;
  // height: 150px;
  // width: 200px;
  height: 70%;
  width: 40%;
}
.container{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
// .container h1{
//   padding-top: 20px;
//   max-width: 70%;
//   font-family: Titillium Web;
//   font-style: normal;
//   font-weight: 600;
//   font-size: 36px;
//   line-height: 55px;
//   display: flex;
//   align-items: center;
//   text-align: center;
//   letter-spacing: 0.05em;

//   color: #70D3CB;

// }
.container img{
  margin-top: 30px;
  max-width: 60%;
  height: auto;
  height: 400px;
  width: 400px;
}
.container h2{
  padding-top: 20px;
  max-width: 80%;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 73px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  color: #FFFFFF;
}
.container h2 span{
  margin-left: 20px;

  padding: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #1D848F;
  box-sizing: border-box;
  border-radius: 50%;
}
.last-i{
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
@media screen and (max-width: 1300px) and (min-width: 1000px){
  .title1 h1{
    font-size: 50px;
    line-height: 40px;
    max-width: 60%;
  }
  .top-img{
  position: absolute;
  top: 0;
  left: 30%;
  text-align: center;;
  // height: 150px;
  // width: 200px;
  height: 70%;
  width: 40%;
}
  // .container h1{
  //   font-size: 24px;
  //   line-height: 30px;
  //   max-width: 80%;
  // }
  .container h2{
    padding-top: 60px;
    font-size: 38px;
    line-height: 40px;
    max-width: 80%;
  }
  .container img{
  margin-top: 30px;
  max-width: 60%;
  height: auto;
  height: 400px;
  width: 400px;
}
}
@media screen and (max-width: 1000px) and (min-width: 500px){
  .title1 h1{
    font-size: 44px;
    line-height: 45px;
    max-width: 80%;
  }
  .top-img{
  position: absolute;
  top: 0;
  left: 30%;
  text-align: center;;
  // height: 150px;
  // width: 200px;
  height: 70%;
  width: 40%;
}
  .container h1{
    font-size: 24px;
    line-height: 30px;
    max-width: 80%;
  }
  .container img{
    padding-top: 20px;
  }
  .container h2{
    padding-top: 20px;
    font-size: 28px;
    line-height: 35px;
    max-width: 80%;
  }
}
@media screen and (max-width: 500px){
  .title1 h1{
    font-size: 22px;
    line-height: 28px;
    max-width: 85%;
  }
  .top1-i{
    display: none;
  }
  .top-img{
    left: 25%;
    top: 50px;
    width: 150px;
    height: 120px;
  }
  .container h1{
    font-size: 18px;
    line-height: 28px;
    max-width: 90%;
  }
  .container img{
    padding-top: 20px;
  }
  .container h2{
    padding-top: 60px;
    font-size: 24px;
    line-height: 30px;
    max-width: 85%;
  }
  i{
    display: none;
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
