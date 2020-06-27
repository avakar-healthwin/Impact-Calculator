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
          <div class="title1">Waste Generated</div>
          <p>Your household generates {{total_waste_gen}} tonnes of waste in its lifetime.</p>
          <img src="../assets/balance1.png" alt="">
          <h2>It is as heavy as {{no_of_buses}} buses.</h2>
          <button v-on:click="replaceWaste()" class="btn-1">See Carbon Footprint </button>
          <button v-on:click="openLoading2()" class="btn-2">Check your compost</button>
      </div>
      <router-link to="/resultA"><i class="fas fa-arrow-left  last-i"></i></router-link>
  </div>
</template>

<script>

export default {
  components:{
    
  },
  data () {
    return {
      total_waste_gen:0,
      no_of_buses:0,
    }
  },
  methods:{
    replaceWaste(){
      this.$router.replace('/carbon');
    },
    openLoading2(){
        this.$router.replace('/loading2');
    },
    openresultA(){
      this.$router.replace('/resultA');
    }
  },
  mounted(){
      this.total_waste_gen = this.data.members*0.5*365*60*0.00110231;
      this.total_waste_gen = this.total_waste_gen.toFixed(2);
      this.no_of_buses = this.total_waste_gen/20;
      this.no_of_buses = this.no_of_buses.toFixed(1);
      console.log(this.data);
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
  width: 100%;
  background: #40050C;
  height: 100vh;
}
.container{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.container .title1{
  max-width: 60%;
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
.container p{
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 55px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;

  /* Gray 6 */

  color: #F2F2F2;
}
.container img{
  max-width: 80%;
  width: 650px;
  height: 600px;
  height: auto;
}
.container h2{
  max-width: 60%;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 73px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;

  /* Gray 6 */

  color: #F2F2F2;
  margin-bottom: 20px;
}
.container .btn-1{
  background: #661016;
  border-radius: 64px;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 40px;
  /* or 292% */

  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  max-width: 40%;
  height: 50px;
  width: 400px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  opacity: 0.5;
}
.container .btn-2{
  background: #40050C;
  border-radius: 50px;
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
  max-width: 60%;
  height: 60px;
  width: 550px;
  justify-content: center;
  border: 2px solid #7ABBB0;
  outline: none;
}
.container .btn-2:hover{
   background: #7ABBB0;
   cursor: pointer;
}
.container .btn-1:hover{
  cursor: pointer;
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


@media all and (max-width: 1200px){
  .container .title1{
    font-size: 48px;
    line-height: 60px;
  }
  .container p{
    font-size: 30px;
    line-height: 40px;
  }
  .container h2{
    font-size: 40px;
    line-height: 50px;
  }
  .container .btn-1{
    font-size: 22px;
    line-height: 30px;
  }
  .container .btn-2{
    font-size: 30px;
    line-height: 35px;
  }
}
@media all and (max-width: 500px){
  .container .title1{
  max-width: 80%;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 40px;
  /* or 146% */

  display: flex;
  align-items: center;

  color: #FFFFFF;
  margin-top: 20px;
}
.top1-i{
  display: none;
}
.container p{
  max-width: 80%;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.017em;

  /* Gray 6 */

  color: #F2F2F2;
  margin-top: 10px;
}
.container img{
  margin-top: 20px;
  max-width: 80%;
  width: 400px;
  height: 400px;
  height: auto;
}
.container h2{
  margin-top: 20px;
  max-width: 90%;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;

  /* Gray 6 */

  color: #F2F2F2;
  margin-bottom: 20px;
}
.container .btn-1{
  background: #661016;
  border-radius: 64px;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;
  /* or 292% */

  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  max-width: 60%;
  height: 50px;
  width: 400px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  opacity: 0.5;
}
.container .btn-2{
  background: #40050C;
  border-radius: 50px;
  font-family: Titillium Web;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 55px;
  /* identical to box height */

  display: flex;
  align-items: center;
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

  .last-i{
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
