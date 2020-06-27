
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
        <div> <h1> Welcome</h1></div>
        </div>
        <!-- <img   src="" alt=""> -->
        <div class="menu">
        <router-link to="/"><i class='bx fa bxs-home'></i></router-link>
         <router-link to="/"><i class="fas fa-arrow-right"></i></router-link>
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

.header{
  display:none;
}

@media all and (max-width:500px){

.header{
  top: 0px;
  width: 100%;
  height: 40px;
  position: fixed;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background: #661016;;
  z-index: 10;
}

    h1{
    margin-left: 20%;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 50px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;

    }

    .menu{
  margin-right: 10%;
  display:flex;
  justify-content:center;
  align-items:center;
}
    i{
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
