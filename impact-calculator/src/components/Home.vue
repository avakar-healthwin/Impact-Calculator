
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
    <i class='bx fa bxs-home'></i>
  <div class="container">
    <div class="left">
        <h1>Welcome to the Ecological Impact Calculator</h1>
        <p>Get an insight about the impacts of your household-waste. Let’s save the world by adopting to Waste Management practices!</p>
        <button>Calculate Your Impact! </button>
    </div>
    <div class="right">
      <div class="image">
        <img src="../assets/tree.gif" alt="" width="600" height="750">
      </div>

    </div>
  </div>
</div>
</template>

<script>

export default {
    components: {
      
    },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
    i{
      position: absolute;
      font-size: 24px;
      top: 40px;
      left: 40px;
      color: white;
      padding: 10px;
      border-radius: 50%;
      background: #7ABBB0;
    }
    i:hover{
      cursor: pointer;
    }
    .container{
      display: flex;
      flex-flow: row nowrap;
      padding-bottom: 0px;
      margin-bottom: 0px;
    }
    .left{
      flex: 60%;
      max-width: 60%;
      // height: 100vh;
      background:  #40050C;
      padding: 60px;
      padding-left: 80px;
      margin-bottom: 0px;
    }
    .left h1{
      max-width: 80%;
      font-family: Titillium Web;
      font-style: normal;
      font-weight: 900;
      font-size: 70px;
      line-height: 85px;
      /* or 131% */

      display: flex;
      align-items: center;

      color: #FFFFFF;
    }
    .left p{
      max-width: 80%;
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
    .left button{
      max-width: 80%;
      width: 450px;
      font-family: Titillium Web;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 45px;
      /* identical to box height */

      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: 0.05em;
      background: #40050C;
      color: #FFFFFF;
      border: 2px solid #7ABBB0;
      border-radius: 50px;
    }
    .left button:hover{
      background: #7ABBB0;
      cursor: pointer;
    }
    .right{
      flex: 40%;
      max-width: 40%;
      height: 100%;
    }
    .right .image{
      max-width: 100%;
    }
    .right img{
      max-width: 100%;
      // height: auto;
     
    }

</style>
