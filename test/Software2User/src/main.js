// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入ant-design库
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/font/font.css";
import service from "../src/common/request"
// 引入组件库
// import VueEasytable from "vue-easytable";
//暗黑样式
import "vue-easytable/libs/theme-dark/index.css";
// 引入Datav并注册为全局组件
import dataV from '@jiaminghi/data-view';

Vue.use(dataV)
Vue.use(Antd)
Vue.use(ElementUI);
// Vue.use(VueAxios, axios)
// Vue.use(VueEasytable)
Vue.prototype.$service = service
// 引入echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 引入antv/g6
import G6 from '@antv/g6';

// 随机获取整数数字
import { randomNum } from "./utils/randomNum";
// 引入全局css
import './assets/less/style.less';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
