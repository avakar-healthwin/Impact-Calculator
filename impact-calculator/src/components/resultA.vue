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
         <i v-on:click="openq3()" class="fas fa-arrow-left arrow"></i>
      </div>
    </dir>
    <div class="container">
        <div class="left">
            <div class="img-container" v-on:click="openWaste()">
                <h1>Waste Generated</h1>
                <img src="../assets/waste.svg" alt="">
            </div>
        </div>
        <div class="right">
            <div class="img-container" v-on:click="openCarbon()">
                <h1>Carbon Footprint</h1>
                <img src="../assets/carbon-footprint.svg" alt="">
            </div>
        </div>
    </div>
    <div class="last-container">
        <h1>Get some great insights!</h1>
        <button v-on:click="openLoading2">Go ahead and check how much waste you can compost</button>
    </div>
    <router-link to="/"><i class="fas fa-arrow-left last-i last-i"></i></router-link>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
    components:{
        'app-navbar':Navbar,
    },
  data () {
    return {
      
    }
  },
  methods:{
      openWaste(){
          this.$router.push('/waste');
      },
      openCarbon(){
          this.$router.push('/carbon');
      },
      openLoading2(){
          this.$router.push('/loading2');
      },
      openq3(){
          this.$router.replace('/q3');
      }
  }
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
    max-width: 100%;
    height: 100vh;
    // height: 100%;
    background: #40050C;
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
    display: flex;
    max-width: 100%;
    flex-flow: row wrap;
    justify-content: start;
    padding: 60px;
    padding-right: 0px;
}
.left{
    flex: 50%;
    max-width: 50%;
}
.img-container{
    max-width: 100%;
    // height: 470px;
    // width: 500px;
    width: 72%;
    height: auto;
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid #70D3CB;
    box-sizing: border-box;
    border-radius: 64px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    padding-left: 60px;
    position: relative;
    left: 8%;
}
.img-container:hover{
    background: rgba(191, 41, 46, 0.3);
    border: 1px solid rgba(191, 41, 46, 0.3);
    cursor: pointer;
}
.container h1{
    max-width: 100%;
    // width: 80%;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 75px;
    /* or 150% */

    display: flex;
    align-items: center;

    color: #FFFFFF;
    margin-top: 5px;
    margin-bottom: 0px;
}
img{
    max-width: 100%;
    height: 300px;
    width: 300px;
    // color-adjust: #FFD9AB;
    // background-color: #FFD9AB;
}
.right{
    flex: 50%;
    max-width: 50%;
}
.last-container{
    position: absolute;
    top: 75vh;
    max-width: 100%;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: rgba(191, 41, 46, 0.7);
    border-radius: 50px 50px 0px 0px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    // padding-bottom: 85px;
}
.last-container h1{
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;

    color: #70D3CB;
    margin-bottom: 15px;
    margin-top: 0px;


}
.last-container button{
    border: 2px solid #70D3CB;
    box-sizing: border-box;
    border-radius: 50px;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 35px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;

    color: #FFFFFF;
    background: rgba(191, 41, 46, 0.7);
    outline: none;
    max-width: 40%;
    // width: 40%;

}
.last-container button:hover{
    background: #70D3CB;
    cursor: pointer;
}
.last-i{
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
        .container{
            padding-left: 40px;
            margin-top: 20px;
        }
        .left{
            flex: 100%;
            max-width: 100%;
        }
        .top1-i{
            display: none;
        }
        .img-container{
            // height: 250px;
            // width: 250px;
            width: 75%;
            height: auto;
            // padding-left: 10px;
            padding: 20px;
            padding-bottom: 0px;
            // padding-left: 30px;
            // padding-right: 30px;
            border-radius: 40px;
            margin-bottom: 20px;
            padding-top: 10px;
        }
        .img-container h1{
            margin-left: 0px;
        }
        .img-container img{
            width: 80%;
            height: auto;
        }
        .right{
            flex: 100%;
            max-width: 100%;
        }
        .container h1{
            font-size: 24px;
            line-height: 30px;
            margin-left: 0px;
        }
        .last-container{
            top: 85vh;
            border-radius: 30px 30px 0px 0px;
        }
        .last-container h1{
            font-size: 24px;
            line-height: 30px;
            position: absolute;
            // top: 75vh;
            top: -5vh;
            left: 17%;
            margin-left: 0px;
        }
        .last-container button{
            font-size: 18px;
            line-height: 24px;
            width: 90%;
            padding: 7px;
            max-width: 100%;
            border-radius: 25px;
        }
        .last-i{
            display: none;
        }

.header{
    width: 100%;
    height: 50px;
    background: #661016;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    // position: fixed;
    // top: 0;
    // z-index: 20;
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
        .container{
            padding-top: 10px;
        }
    }
        @media all and (max-width: 1100px) and (min-width: 800px){
            .container h1{
                font-size: 36px;
                line-height: 45px;
            }
            .last-container h1{
                font-size: 36px;
                line-height: 45px;
            }
            .last-container button{
                font-size: 36px;
                line-height: 45px;
                max-width: 60%;
            }
        }
            // @media all and (max-width: 800px) and (min-width: 60px){
            // .container h1{
            //     font-size: 30px;
            //     line-height: 40px;
            // }
            // .last-container h1{
            //     font-size: 30px;
            //     line-height: 40px;
            // }
            // .last-container button{
            //     font-size: 30px;
            //     line-height: 40px;
            //     max-width: 60%;
        //     // }
        // }
</style>
