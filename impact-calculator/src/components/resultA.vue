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
            <div class="img-container">
                <h1>Waste Generated</h1>
                <img src="../assets/waste.svg" alt="">
            </div>
        </div>
        <div class="right">
            <div class="img-container">
                <h1>Carbon Footprint</h1>
                <img src="../assets/carbon-footprint.svg" alt="">
            </div>
        </div>
    </div>
    <div class="last-container">
        <h1>Get some great insights!</h1>
        <button>Go ahead and check how much waste you can compost</button>
    </div>
    <router-link to="/"><i class="fas fa-arrow-left"></i></router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style lang='scss'>
.main-container{
    max-width: 100%;
    height: 100vh;
    // height: 100%;
    background: #40050C;
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
    height: 470px;
    width: 500px;
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
    max-width: 90%;
    height: 300px;
    width: 300px;
    background: #FFD9AB;
}
.right{
    flex: 50%;
    max-width: 50%;
}
.last-container{
    position: absolute;
    top: 75vh;
    max-width: 100%;
    right: 7px;
    bottom: 0px;
    left: 7px;
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
    margin-bottom: 10px;
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
</style>
