<template>
  <div class="login-container">
    <star-background  />
    <!--    <dv-border-box8 style="position: fixed;margin-left: 30%;width: 65%;margin-bottom: 20%;height: 80%;margin-top: 3%;">-->

    <!--    </dv-border-box8>-->
    <dv-decoration-8 style="position: fixed;width:25%;height:10%;margin-top: 40%" />
    <dv-decoration-8 :reverse="true" style="position: fixed;width:25%;height:10%;margin-top: 3%;margin-left: 5%" />
    <dv-decoration-9 style="position:fixed; width:25%;height:25%;margin-left:3%;margin-top: 20%"><span style="font-size: 300%;color: #b3bac7"></span></dv-decoration-9>
    <dv-decoration-11 style="position: fixed;width: 25%;height: 10%;margin-left: 3%;margin-top: 10%"><span style="font-size: 300%;color: #b3bac7">基体材料选择</span></dv-decoration-11>
    <dv-border-box-11 style="position: fixed;margin-left: 30%;width: 65%;margin-bottom: 20%;height: 90%;margin-top: 3%;"   title="" >

      <!-- 
      <div style=" position:fixed;margin-top: 25%;margin-left: 30%" class="pic" v-if="MgAlloy==='AZ91D(zm5)'">
        <img src="../assets/mg1.png">
      </div>
      -->

      <!-- 材料选择 -->
      <!-- 边框 -->
      <dv-border-box-6 style="position: fixed;margin-top: 5%;margin-left: 5%;width: 40%;height: 20%">  
        <div style="position:fixed;margin-top: 2%;margin-left:10%;width: 20%">
            <span style="font-size: 300%;color: #b3bac7;font-family: zhanku ">基体材料选择</span><br>
            <a-select default-value="AZ91D(zm5)" v-model="basicMaterial" style="width: 100%;" @change="getBMInfo">
              <a-select-option  :value="item.data" v-for="item in Basicbox1" :key="item.data" >
                {{item.data}}
              </a-select-option>
            </a-select>
          </div>
      </dv-border-box-6>

      <dv-border-box-13 style="position: fixed;margin-top: 15%;margin-left: 5%;width: 40%;height: 50%">
        <div style="position:fixed;margin-top: 2%;margin-left:10%;width: 20%">
          <span style="font-size: 300%;color: #b3bac7;font-family: zhanku ">基体材料信息</span>

        </div>
      </dv-border-box-13>
      <a id="mgok" class="mgselect" @click="backforward">
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
      return {

        // Basicbox1:[],
        // basicMaterial:'',
        // BasicInfo:[],

        //测试数据
        Basicbox1:[{
          id:0,
          data:"选项一"
        },{
          id:1,
          data:"选项二"
        },{
          id:2,
          data:"选项三"
        }],
        basicMaterial:'',
        BasicInfo:[],
      }
    },
    created() {
      //测试
      //this.getOptions()
    },
    methods:{

      onChange(){
        console.log(this.value)
        // localStorage.setItem('imageValue',this.value)
        // location.reload()

      },
      backforward(){
        this.$router.push('/Map')
      },
      // handleChange(value) {
      //   console.log(value);
      // },

      //向后端请求数据
      getOptions(){
        let _this = this
        // this.$http.post('http://172.22.9.125:8082/Box/GetBox',{"box":"box1"},{headers:{"token":'1111-1111-1111'}})
        this.$service.post('/Box_Operat/Select_inf',{"name":"Basicbox1"})
          .then(function (response)
          {
            _this.Basicbox1 = response.data.data.Basicbox1
             console.log(response.data.data.Basicbox1)
            // console.log(_this.Basicbox1)
          }).catch((error) =>{
          console.log(error);
        });
      },
      getBMInfo(){
        let _this = this
        // this.$http.post('http://172.22.9.125:8082/Box/GetBox',{"box":"box1"},{headers:{"token":'1111-1111-1111'}})
        this.$service.post('/Box/GetMg',{"name":this.basicMaterial})
          .then(function (response)
          {
            _this.BasicInfo = response.data.data[0]
            console.log(response.data.data[0])
             // console.log(_this.BasicInfo)
          }).catch((error) =>{
          console.log(error);
        });
      }
    },
    computed:{

    },
    beforeDestroy() {
      sessionStorage.setItem('basicMaterial',this.basicMaterial)

    }
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

  }
  .input{
    font-size: 200%;
    color: #c6cbd2;
    line-height: 100%;
    background-color: transparent;
    width: 50%
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

  .ant-select-dropdown {
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
  #mgok{
    position: fixed;
    bottom: 8%;
    left: 80%;
  }
  .mgselect{
    /*position: fixed;*/
    /*bottom: 8%;*/
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
  .mgselect:active{
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0,0,0,0.24);
  }
  .mgselect::before{
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
  .mgselect:hover::before{
    animation: sun 8s infinite;
  }
  .mgselect:hover{
    animation: sun 10s infinite;
  }
  @keyframes sun {
    100%{
      background-position: -400% 0;
    }
  }
  input[type="radio"]{
    position: relative;
    width: 70px;
    height: 30px;
    outline: none;
    background: #111;
    -webkit-appearance: none;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: -5px -5px 20px rgba(255,255,255,0.1),
                5px 5px 10px rgba(0,0,0,1),
                 inset -2px -2px 5px rgba(255,255,255,0.1),
                 inset 2px 2px 5px rgba(0,0,0,0.5),
                 0 0 0 2px #1F1F1F;
    transition: 0.5s;

  }
  input[type="radio"]:checked
  {
    background: #20b7ff;
  }
  input[type="radio"]::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 30px;
    background: linear-gradient( to top,#000,#555);
    border-radius: 20px;
    box-shadow: 0 0 0 1px #232323;
    transform: scale(0.98,0.96);
    transition: 0.5s;
  }
  input[type="radio"]:checked::before{
    left: 30%;
  }
  input[type="radio"]::after{
    content: '';
    position: absolute;
    left: 50%;
    top:50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #555;
    transition: 0.5s;
  }
  input[type="radio"]:checked::after{
    left: 80%;
    background: #63cdff;
    box-shadow: 0 0 5px #63cdff,
                0 0 15px #63cdff,
                0 0 30px #63cdff;
  }
</style>
