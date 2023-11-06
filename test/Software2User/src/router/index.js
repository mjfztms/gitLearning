import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../views/Login'
import NaviMap from "../views/Map"

import BaseMaterial from "../views/BaseMaterial";
import EnvirFactor from "../views/EnvirFactor";
import PassiMaterialOne from "../views/PassiMaterialOne"
import PassiMaterialTwo from "../views/PassiMaterialTwo"
import NonPMaterial from "../views/NonPMaterial";
import TheLast from "../views/TheLast";
import LifeEval from "../views/LifeEval"

// import Tem from "../views/Tem";
// 解决路由重复报错问题
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/',
      name: 'Login',
      component: Login
    },
    {
      path:'/map',
      name:'Map',
      component:NaviMap,
    },
    {
      path: '/TheLast',
      name: 'TheLast',
      component: TheLast
    },
    {
      path: '/BaseMaterial',
      name:'BaseMaterial',
      component: BaseMaterial
    },
    {
      path: '/EnvirFactor',
      name:'EnvirFactor',
      component: EnvirFactor
    },
    {
      path: '/NonPMaterial',
      name:'NonPMaterial',
      component: NonPMaterial
    },
    {
      path:'/PassiMaterialOne',
      name:'PassiMaterialOne',
      component:PassiMaterialOne
    },
    {
      path:'/PassiMaterialTwo',
      name:'PassiMaterialTwo',
      component:PassiMaterialTwo
    },
    {
      path:'/lifeeval',
      name:'LifeEval',
      component:LifeEval
    },
  ],
});
router.beforeEach((to, from, next) =>{
  if (to.path === '/') {
  return  next();
}
  let token = localStorage.getItem('Authorization');
  if (token === null || token === '') {
    if(to.path!=='/'){
      return next('/');
    }
  }
  next();

})

export default router;
