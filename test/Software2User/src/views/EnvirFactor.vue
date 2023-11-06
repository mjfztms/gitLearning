<template>

  <div class="login-container">
    <star-background  />

    <dv-decoration-8 style="position: fixed;width:25%;height:10%;margin-top: 40%" />
    <dv-decoration-8 :reverse="true" style="position: fixed;width:25%;height:10%;margin-top: 3%;margin-left: 5%" />
    <dv-decoration-9 style="position:fixed; width:25%;height:25%;margin-left:3%;margin-top: 20%"><span style="font-size: 300%;color: #b3bac7"></span></dv-decoration-9>
    <dv-decoration-11 style="position: fixed;width: 25%;height: 10%;margin-left: 3%;margin-top: 10%"><span style="font-size: 300%;color: #b3bac7">环境因素</span></dv-decoration-11>
    <dv-border-box-11 style="position: fixed;margin-left: 30%;width: 65%;margin-bottom: 20%;height: 90%;margin-top: 3%;"   title="" >
      <dv-border-box-1 style="position: fixed;margin-left: 2.5%;margin-top: 5%;width: 60%;height: 65%">
        <div style="position: fixed; width:30px;height:700px;margin: 2% 29.5%"> 
          <dv-decoration-2 :reverse="true" style="position: fixed; width:30px;height:700px;" />
          <dv-border-box-10 style="position: fixed; width:30px;height:700px;"></dv-border-box-10>
        </div>
  
        <div>  
          <div style="position: absolute;width: 50%;height: 10%;margin-left: 0%;margin-top: 2%">
            <span style="font-size: 250%;color: #b3bac7;font-family: zhanku ">温度</span><br> 
            <div style="margin-top: 1%; text-align:center">
              <a-input-number class="input" v-model="EnvirTemperature" :min="-100" :max="100" placeholder="输入值" />
            </div> 
          </div>

          <div style="position: absolute;width: 50%;height: 10%;margin-left: 50%;margin-top: 2%">
            <span style="font-size: 250%;color: #b3bac7;font-family: zhanku ">CO</span>
            <span style="font-size: 150%;color: #b3bac7;font-family: zhanku ">2</span>
            <span style="font-size: 250%;color: #b3bac7;font-family: zhanku ">分压</span><br>
            <div style="margin-top: 1%; text-align:center">
              <a-input-number class="input" v-model='EnvirCO2' :min="-100" :max="100" placeholder="输入值" />
            </div>
          </div>

          <div style="position: absolute;width: 50%;height: 10%;margin-left: 0%;margin-top: 12%">
            <span style="font-size: 250%;color: #b3bac7;font-family: zhanku ">静水压力</span><br>
            <div style="margin-top: 1%; text-align:center">
              <a-input-number class="input" v-model='EnvirHydPressure' :min="-100" :max="100" placeholder="输入值" />
            </div>
          </div>

          <div style="position: absolute;width: 50%;height: 10%;margin-left: 50%;margin-top: 12%">
            <span style="font-size: 250%;color: #b3bac7;font-family: zhanku ">H</span>
            <span style="font-size: 150%;color: #b3bac7;font-family: zhanku ">2</span>
            <span style="font-size: 250%;color: #b3bac7;font-family: zhanku ">S分压</span><br>
            <div style="margin-top: 1%; text-align:center">
              <a-input-number class="input" v-model='EnvirH2S' :min="-100" :max="100" placeholder="输入值" />
            </div>
          </div>

          <div style="position: absolute;width: 50%;height: 10%;margin-left: 00%;margin-top: 22%">
            <span style="font-size: 250%;color: #b3bac7;font-family: zhanku ">应力</span><br>
            <div style="margin-top: 1%; text-align:center">
              <a-input-number class="input" v-model='EnvirStress' :min="-100" :max="100" placeholder="输入值" />
            </div>
          </div>

          <div style="position: absolute;width: 50%;height: 10%;margin-left: 50%;margin-top: 22%">
            <span style="font-size: 250%;color: #b3bac7;font-family: zhanku ">O</span>
            <span style="font-size: 150%;color: #b3bac7;font-family: zhanku ">2</span>
            <span style="font-size: 250%;color: #b3bac7;font-family: zhanku ">分压</span><br>
            <div style="margin-top: 1%; text-align:center">
              <a-input-number class="input" v-model='EnvirO2' :min="-100" :max="100" placeholder="输入值" />
            </div>
          </div>
          
          <div style="position: absolute;width: 50%;height: 10%;margin-left: 0%;margin-top: 32%">
            <span style="font-size: 250%;color: #b3bac7;font-family: zhanku ">应力幅</span><br>
            <div style="margin-top: 1%; text-align:center">
              <a-input-number class="input" v-model='EnvirStressAmplitude' :min="-100" :max="100" placeholder="输入值" />
            </div>
          </div>

          <div style="position: absolute;width: 50%;height: 10%;margin-left: 50%;margin-top: 32%">
            <span style="font-size: 250%;color: #b3bac7;font-family: zhanku ">盐浓度</span><br>
            <div style="margin-top: 1%; text-align:center">
              <a-input-number class="input" v-model='EnvirSaltCon' :min="-100" :max="100" placeholder="输入值" />
            </div>
          </div>

          <div style="position: absolute;width: 50%;height: 10%;margin-left: 0%;margin-top: 42%">
            <span style="font-size: 250%;color: #b3bac7;font-family: zhanku ">频率</span><br>
            <div style="margin-top: 1%; text-align:center">
              <a-input-number class="input" v-model='EnvirFrequency' :min="-100" :max="100" placeholder="输入值" />
            </div>
          </div>

          <div style="position: absolute;width: 50%;height: 10%;margin-left: 50%;margin-top: 42%">
            <span style="font-size: 250%;color: #b3bac7;font-family: zhanku ">流速</span><br>
            <div style="margin-top: 1%; text-align:center">
              <a-input-number class="input" v-model='EnvirFlowRate' :min="-100" :max="100" placeholder="输入值" />
            </div>
          </div>
          
        </div>

      </dv-border-box-1>
      <a id="coatingok" class="coatingsys" @click="backforward">
        确定
      </a>
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
    data(){
      return{
        Inorgsysbox1: [],
        Inorgsysbox2: [],
        Orgsysbox1: [],
        Orgsysbox2: [],
        Orgsysbox3: [],
        Orgsysbox4: [],
         //测试
         EnvirTemperature: null,
         EnvirCO2: null,
         EnvirHydPressure: null,
         EnvirH2S: null,
         EnvirStress: null,
         EnvirO2: null,
         EnvirStressAmplitude: null,
         EnvirSaltCon: null,
         EnvirFrequency: null,
         EnvirFlowRate: null,
      }
    },
    created() {
      this.getOptions()
    },
    methods:{

      handleChange(value) {
        console.log(value);
      },
      backforward(){
        this.$router.push('/map')
      },
      getOptions(){
        let _this = this
        // this.$http.post('http://172.22.9.125:8082/Box/GetBox',{"box":"box1"},{headers:{"token":'1111-1111-1111'}})
        this.$service.post('/Box_Operat/Select_inf',{"name":"Inorgsysbox1,Inorgsysbox2,Orgsysbox1,Orgsysbox2,Orgsysbox3,Orgsysbox4"})
          .then(function (response)
          {
            _this.Inorgsysbox1 = response.data.data.Inorgsysbox1
            _this.Inorgsysbox2 = response.data.data.Inorgsysbox2
            _this.Orgsysbox1 = response.data.data.Orgsysbox1
            _this.Orgsysbox2 = response.data.data.Orgsysbox2
            _this.Orgsysbox3 = response.data.data.Orgsysbox3
            _this.Orgsysbox4 = response.data.data.Orgsysbox4
            console.log(response.data.data)
            // console.log(_this.Longbox1)
          }).catch((error) =>{
          console.log(error);
        });
      },
    },
  }
</script>

<style lang="scss" >
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
    font-size: 200%;
    color: #c6cbd2;
    line-height: 150%;
    background-color: transparent;
    width: 60%;
    height: 5%
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
  #coatingok{
    position:fixed;
    bottom: 10%;
    left:58% ;
  }
  .coatingsys{
    /*position: fixed;*/
    /*bottom: 10%;*/
    /*left: 58%;*/
    width: 10%;
    font-family: zhankuyuyang;
    font-size: 300%;
    text-align: center;
    background: linear-gradient(90deg, #16ea6a, #184ce5, #b11b7f,#03a9f4);
    background-size: 400%;
    border-radius: 20%;
    z-index: 1;
  }
  .coatingsys:active{
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0,0,0,0.24);
  }
  .coatingsys::before{
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
  .coatingsys:hover::before{
    animation: sun 8s infinite;
  }
  .coatingsys:hover{
    animation: sun 10s infinite;
  }
  @keyframes sun {
    100%{
      background-position: -400% 0;
    }
  }



</style>
