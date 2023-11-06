<template>
  <div class="login-container">
    <star-background  />
<!--    <dv-border-box8 style="position: fixed;margin-left: 30%;width: 65%;margin-bottom: 20%;height: 80%;margin-top: 3%;">-->

<!--    </dv-border-box8>-->
    <dv-decoration-8 style="position: fixed;width:25%;height:10%;margin-top: 40%" />
    <dv-decoration-8 :reverse="true" style="position: fixed;width:25%;height:10%;margin-top: 3%;margin-left: 5%" />
    <dv-decoration-9 style="position:fixed; width:25%;height:25%;margin-left:3%;margin-top: 20%"><span style="font-size: 300%;color: #b3bac7">Loading</span></dv-decoration-9>
    <dv-decoration-11 style="position: fixed;width: 25%;height: 10%;margin-left: 3%;margin-top: 10%"><span style="font-size: 300%;color: #b3bac7">寿命评估系统</span></dv-decoration-11>
    <dv-border-box-11 style="position: fixed;margin-left: 30%;width: 65%;margin-bottom: 20%;height: 80%;margin-top: 3%;"   title="镁合金选择" >

    </dv-border-box-11>

  </div>
</template>

<script>
  import StarBackground from '../components/StarBackground'
    export default {
      name: "Tem",

      components: { StarBackground },
      beforeCreate: function() {
        document.getElementsByTagName('body')[0].className = 'body-bg'
      },
    }
</script>

<style lang="scss">
  .body-bg {
    background-attachment: fixed;
    overflow: hidden;
    /*background-color: #050608;*/
  }

  .login-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: #000207;
    /*font-size: 100px;*/
    /*background-image: url("../../static/bg1.png") ;*/
    /*background: no-repeat;*/
  }
</style>
