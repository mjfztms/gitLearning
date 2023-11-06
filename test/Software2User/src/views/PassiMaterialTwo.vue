<template>
  <!-- <dv-full-screen-container> -->
      <div class="login-container">
      <star-background  />
      <!--    <dv-border-box8 style="position: fixed;margin-left: 30%;width: 65%;margin-bottom: 20%;height: 80%;margin-top: 3%;">-->

      <!--    </dv-border-box8>-->
      <dv-decoration-8 style="position: fixed;width:25%;height:10%;margin-top: 40%" />
      <dv-decoration-8 :reverse="true" style="position: fixed;width:25%;height:10%;margin-top: 3%;margin-left: 5%" />
      <dv-decoration-9 style="position:fixed; width:25%;height:25%;margin-left:3%;margin-top: 20%"><span style="font-size: 300%;color: #b3bac7"></span></dv-decoration-9>
      <dv-decoration-11 style="position: fixed;width: 25%;height: 10%;margin-left: 3%;margin-top: 10%"><span style="font-size: 300%;color: #b3bac7">钝化材料界面2</span></dv-decoration-11>
      <dv-border-box-11 style="position: fixed;margin-left: 30%;width: 65%;margin-bottom: 20%;height: 92%;margin-top: 3%;"   title="" >
        
        <dv-border-box-13 style="position: fixed;margin: 5% 12.5%;width: 40%;height: 40%">
          <div  style="text-align:center; font-size: 400%;color: #b3bac7;font-family:youshe;margin-top: 5%">
            点蚀深度
          </div>
          <div style="margin-top: 1%">
            <a-input class="input" :value="PittingDpth" disabled=true />
          </div>

          <div  style="text-align:center; font-size: 400%;color: #b3bac7;font-family:youshe; justify-content: center; margin-top: 6%">
            多因素耦合作用 </div>
          <div class="gradient-border" id="box" style="margin-top:1%;margin-left:15%;width: 70%;height: 10%">{{life}}</div>
        </dv-border-box-13>

        <dv-border-box-4 style="position: fixed;margin-left: 10%;margin-top:28%;width: 35%;height: 30%">
          <div style="margin-top: 12%;margin-left: 5%">
            <div  style="text-align:center; font-size: 400%;color: #b3bac7;font-family:youshe;margin-top: 5%">结果</div>
          <div class="gradient-border" id="box" style="position: fixed; font-size: 200%; margin-left:5%; margin-top:1%; width: 25%;height: 4%">结果</div>
  <!--          <a-input-number class="input"  v-model="CoatCorLifeOutput"  @change="onChange" size="large" :disabled="true" />-->
          </div>




          <!-- <a id="corcal" class="cormodule" @click="caclu" style="background: linear-gradient(90deg, #dde5e0, #d9dde8, #d0abc4,#899aa1);">
            开始计算
          </a> -->
        </dv-border-box-4>

        <a id="corok" class="cormodule" @click="backforward">
          确定
        </a>
      </dv-border-box-11>
      </div>
  <!-- </dv-full-screen-container> -->
</template>

<script>
  import StarBackground from '../components/StarBackground'
  export default {
    name: "Tem",
    components: { StarBackground },
    beforeCreate: function() {
      document.getElementsByTagName('body')[0].className = 'body-bg'
    },
    data(){
      return {
        life:0,
        Corbox1:[],
        PittingDpth: 6
      }
    },
    created() {
      this.getOptions()
    },
    mounted() {

    },
    computed:{
    },
    methods: {

      backforward(){
        this.$router.push('/map')
      },
      getOptions(){
        let _this = this
        // this.$http.post('http://172.22.9.125:8082/Box/GetBox',{"box":"box1"},{headers:{"token":'1111-1111-1111'}})
        this.$service.post('/Box_Operat/Select_inf',{"name":"Corbox1"})
          .then(function (response)
          {
            _this.Corbox1 = response.data.data.Corbox1
            console.log(response.data.data.param[0].Corbox1)
            console.log(_this.Corbox1)
          }).catch((error) =>{
          console.log(error);
        });
      },
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
  .input{
    font-size: 230%;
    color: #c6cbd2;
    line-height: 150%;
    background-color: transparent;
    width: 60%;
    height: 50px
  }

  .input:disabled {  
    background-color: transparent;
    color: #fff;
    text-align:center;
  }

  .ant-select {
    width: 100%;
    color: #06B0FE;
    font-size: 22px;
    font-weight: 400;
    font-family: pangmen;
  }
  .ant-select-selection--single {
    background: rgba(4, 3, 36, .5);
    border: 1px solid #06B0FE;
    width: 100%;
    height: 100%;
  }
  .select-wrap  .ant-select-selection__rendered{
    line-height: 36px;
  }
  .select-wrap  .ant-select-arrow {
    color: #06B0FE;
    font-size: 14px;
    font-weight: 600;
  }
  /* 全局修改下拉框的样式 */
  .ant-select-dropdown {
    /* color: rgba(255, 255, 255, .7); */
    /* background-color: #040324;
    background: #040324; */
    /* font-size: 22px; */
    /* border: 1px solid #06B0FE; */
  }
  .ant-select-dropdown-menu {
    background-color: #040324;
    background: #040324;
    border: 1px solid #06B0FE;
    font-size: 22px;
    font-family: pangmen;
  }
  .ant-select-dropdown-menu-item {
    padding: 0px 12px !important;
    height: 60px !important;
    line-height: 60px !important;
    font-size: 22px !important;
    color: rgba(255, 255, 255, .7) !important;
  }
  .ant-select-dropdown-menu-item:hover {
    background: rgba(6, 176, 254, .2) !important;
    color: #06B0FE !important;
  }
  .ant-select-dropdown-menu-item-selected {
    background: rgba(6, 176, 254, .2) !important;
    color: #06B0FE !important;
  }
  .ant-select-dropdown-menu-item-active {
    background: rgba(6, 176, 254, .2) !important;
    color: #06B0FE !important;
  }
  // 进度条
  ::-webkit-scrollbar {
    width: 6px;
    height: 1px;
  }
  // 滑块部分
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.1);
  }
  // 轨道部分
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);
    background: #0d1331;
    border-radius: 3px;
  }
  ::-webkit-input-placeholder {
    color: #97adbf;
  }

  ::-ms-input-placeholder {
    color: #97adbf;
  }
  // date-c代表外部的class
  .date-c ::placeholder{
    color:#97adbf;
  }
  #corok{
    position: fixed;
    bottom: 6%;
    left: 80%;
  }
  #corcal{
    position: fixed;
    bottom: 12%;
    left: 35%;
  }
  .cormodule{
    /*position: fixed;*/
    /*bottom: 6%;*/
    /*left: 80%;*/
    width: 10%;
    font-family: zhankuyuyang;
    font-size: 300%;
    text-align: center;
    background: linear-gradient(90deg, #16ea6a, #184ce5, #b11b7f,#03a9f4);
    background-size: 400%;
    border-radius: 20%;
    z-index: 1;
  }
  .cormodule:active{
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0,0,0,0.24);
  }
  .cormodule::before{
    content:"";
    position: absolute;
    left: -5px;
    top:-5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(90deg, #0323f4, #41b5f4, #b6b07e,#03a9f4);
    background-size: 400%;
    border-radius: 50%;
    filter: blur(20px);
    z-index: -1;
  }
  .cormodule:hover::before{
    animation: sun 8s infinite;
  }
  .cormodule:hover{
    animation: sun 10s infinite;
  }
  @keyframes sun {
    100%{
      background-position: -400% 0;
    }
  }
  html, body {
    height: 100%;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #1D1F20;
  }
  #box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 200px;
    color: white;
    font-family: 'Raleway';
    font-size: 2.5rem;
  }
  .gradient-border {
    --borderWidth: 3px;
    background: #1D1F20;
    position: relative;
    border-radius: var(--borderWidth);
  }
  .gradient-border:after {
    content: '';
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    border-radius: calc(2 * var(--borderWidth));
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }


  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
