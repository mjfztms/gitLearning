<template>
  <div class="login" :style="{ 'background': 'url(' + require('../assets/background.png') + ') no-repeat center center','background-size': '100% 100%'}">
      <a-row>
        <a-col :span="24">
          <h2 class="login-title">寿命评估系统</h2>
        </a-col>
      </a-row>

    <a-row type="flex">
      <a-col :flex="2"></a-col>
      <a-col :flex="7">
        <a-form ref="form" :model="form" class="login-form">
                <h2 class="title" style="font-size: 200%">用户登录</h2>
          <a-form-item>
            <a-input ref="inputBox" v-model="form.username" size="large" style="font-size: 150%" placeholder="用户名">
              <a-icon slot="prefix" type="user" />
              <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
              <!--          <img :src="user" slot="prefix" alt="">-->
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input-password ref="inputBox" v-model="form.password" size="large" style="font-size: 150%" placeholder="密码">
              <a-icon slot="prefix" type="lock" />
              <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
              <!--          <img :src="lock" slot="prefix" alt="">-->
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <a-button class="submit" type="primary" @click="login">
              <router-link class="PredictionSystem" active-class="active" to="/Map" style="font-size: 150%">登录</router-link>
            </a-button>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :flex="6"></a-col>
      <a-col :flex="7">
        <a-form ref="form" :model="managerform" class="login-form">
          <h2 class="title" style="font-size: 200%">管理员登录</h2>
          <a-form-item>
            <a-input ref="inputBox" v-model="managerform.managername" size="large" style="font-size: 150%" placeholder="用户名">
              <a-icon slot="prefix" type="user" />
              <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
              <!--          <img :src="user" slot="prefix" alt="">-->
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input-password ref="inputBox" v-model="managerform.managerpassword" size="large" style="font-size: 150%" placeholder="密码">
              <a-icon slot="prefix" type="lock" />
              <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
              <!--          <img :src="lock" slot="prefix" alt="">-->
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <a-button class="submit" type="primary" @click="login">
              <router-link class="PredictionSystem" active-class="active" to="/Map" style="font-size: 150%">登录</router-link>
            </a-button>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :flex="2"></a-col>
    </a-row>
      <a-row>
        <a-col :span="6">

        </a-col>
        <a-col :span="6">

        </a-col>
        <a-col :span="6">

        </a-col>
        <a-col :span="6">
        </a-col>
      </a-row>
<!--    <iframe style="display:none" :src="currentUrl"></iframe>-->
  </div>
</template>

<script>
  import service from "../common/request";
  export default {
    // inject:['reload1'],
    // mounted() {
    //   if (!this.isPageLoaded) {
    //     this.reload1();
    //     this.isPageLoaded = true;
    //   }
    // },
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        userToken:'',
        managerform:{
          managername:'',
          managerpassword:''
        },
        isPageLoaded: false
      }

    },
    // computed: {
    //   currentUrl() {
    //     return window.location.href;
    //   }
    // },
    methods: {
      // submit(formName) {
      //   // let that = this
      //   this.$http.get("http://127.0.0.1:8081/login")
      //     .then((res)=>{
      //       console.log(res) ;
      //     }).catch((error)=>{
      //     console.log(error) ;
      //   }) ;
      //
      // },
      // methods: {
      //   forcePageRefresh() {
      //     this.$router.go(0);
      //   }
      // },
      login(){
        let _this = this;
        if(this.form.username===""||this.form.password===""){
          alert("帐号或密码不能为空");
        }else{
          // this.axios({
          //   method:"post",
          //   url:"http://127.0.0.1:8083/doLogin?username=LinJy&password=123",
          //   data:_this.form,
          // }).then((res)=>{
          //   console.log(res.data);
          //   _this.userToken = "Bearer" +res.data.data.body.token;
          //   _this.changeLogin({Authorization:_this.userToken});
          //   _this.$router.push('/screen');
          // }).catch((error)=>{
          //   alert("帐号或密码错误");
          //   console.log(error);
          // })
          this.$service.post('/doLogin',{"username":_this.form.username,"password":_this.form.password})
            .then(function (response)
            {
              console.log(response);
              localStorage.setItem('EvalUser',_this.form.username);
              _this.userToken =response.data.token;
              localStorage.setItem('Authorization',_this.userToken)

              // _this.changeLogin({Authorization:_this.userToken});
              // _this.$router.push('/Map');
          })
            .catch(function (error)
           {alert("帐号或密码错误");
             //  console.log(response);
             // // _this.userToken = "Bearer" +response.data.data.body.token;
             // _this.userToken =response.data;
             // console.log(_this.userToken)
             // localStorage.setItem('Authorization',_this.userToken);
             })
        }
      }

    },

    mounted(){
              window.localStorage.setItem('clicked_pass1','false')
              window.localStorage.setItem('clicked_pass2','false')
              window.localStorage.setItem('clicked_nonpass','false')
              window.localStorage.setItem('clicked_last','false')
              window.localStorage.setItem('clicked_life','false')
              window.localStorage.setItem('clicked_envir','false')
              window.localStorage.setItem('clicked_basicMate','false')
    }
  }
</script>
<style>
/*
隐藏滚动条
*/
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  ::-webkit-scrollbar {
    width: 0 !important;height: 0;
  }

  .login-form {
    width: 565px;
    height: 372px;
    margin: auto;
    background: url("../assets/login-form.png");
    padding: 40px 110px;
  }

   背景
  .login-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../assets/background.png");
  }

  /* Log */
  .login-title {
    color: #ffffff;
    text-align: center;
    margin: 150px 0;
    font-size: 48px;
    font-family: Microsoft Yahei;
  }
  /* 登陆按钮 */
  .submit{
    width: 100%;
    height: 45px;
    font-size: 16px;
  }
  /* 用户登陆标题 */
  .title{
    margin-bottom: 50px;
    color: #ffffff;
    font-weight: 700;
    font-size: 24px;
    font-family: Microsoft Yahei;
  }
  /* 输入框 */
  .inputBox{
    height: 45px;
  }
  /* 输入框内左边距50px */
  .ant-input-affix-wrapper .ant-input:not(:first-child) {
    padding-left: 50px;
  }
  .login{
    width:100%;
    height: 100%;
    position: absolute;
  }
.inputBox {
  font-size: 40px !important;
}


</style>

