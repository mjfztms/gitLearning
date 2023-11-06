import axios from 'axios'
import router from '../router'

// create an axios instance
const service = axios.create({
  // index.js设置了代理(解决跨域)
  baseURL: 'http://172.22.73.214:8082', // url = base url + request url
  timeout: 15000, // request timeout
})

//添加请求拦截器，若token存在则在请求头中加token，不存在也继续请求
service.interceptors.request.use(
  config => {
    // 每次发送请求之前都检测vuex是否存有token,放在请求头发送给服务器
    // Authorization是根据后端自定义字段
    // config.headers.token = localStorage.getItem('Authorization');
    // config.headers.token = "1111-1111-1111";
    config.headers = {
      "token" : "1111-1111-1111"
    }
    return config;
  },
  error => {
    console.log("在request拦截器显示错误：", error.response)
    return Promise.reject(error);
  }
);

//respone拦截器
service.interceptors.response.use(
  response => {
    // 在status正确的情况下，code不正确则返回对应的错误信息（后台自定义为200是正确，并且将错误信息写在message），正确则返回响应
    return response.data.code === 200 ? response : Promise.reject(response.data);
  },
  error => {
    // 在status不正确的情况下，判别status状态码给出对应响应
    if (error.response) {
      console.log("在respone拦截器显示错误：", error.response)
      switch (error.response.status) {
        case 401:
          //可能是token过期，清除它
          // store.commit("delToken");
         localStorage.removeItem('Authorization')
          // router.replace({ //跳转到登录页面
          //   path: '/',
          //   // 将跳转的路由path作为参数，登录成功后跳转到该路由
          //   query: { redirect: router.currentRoute.fullPath }
          // });
          this.$router.push('/')
      }
    }
    return Promise.reject(error.response.data);
  }
);


export default service
