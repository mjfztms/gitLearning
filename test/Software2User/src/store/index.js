
import Vue from 'vue'
import Vuex from 'vuex'
import storage from '../module/storage'

Vue.use(Vuex);

//登录配置
const loginOptions={
  namespaced:true,
  state:{
    Authorization:localStorage.getItem('Authorization')? localStorage.getItem('Authorization'):'',
  },
  getters:{

  },
  mutations:{//存储token
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    }
  }
}
//评估对象信息
const EvalOptions={
  namespaced:true,
  actions:{

  },
  mutations:{

 },
  state:{
      EvalName:'',
      EvalCode:'',
      EvalUser:'',
      EvalRemark:'',
 },
  getters:{

  }
}
//长贮环境构建
const LangStorageOptions={
  namespaced:true,
  actions:{

  },
  mutations:{

  },
  state:{
    StorageMedium:'',
    StorageCorCon:0,
    StorageTemp:0,
    StorageCorMed:'Cl⁻',
  },
  getters:{

  },
}

//环境因素
const EnvirFactorOptions={
  namespaced:true,
  actions:{

  },
  mutations:{

  },
  state:{
    EnvirTemperature:0,
  },
  getters:{

  },
}


// //镁合金选择
// const MgSelectOptions={
//   namespaced:true,
//   actions:{

//   },
//   mutations:{

//   },
//   state:{
//     MgAlloy:'',
//     // HeatTreatProcess:''
//   },
//   getters:{

//   },
// }
//无机涂层体系
const InorgSysOptions={
  namespaced:true,
  actions:{

  },
  mutations:{

  },
  state:{

    //涂层种类
    InorgCoatCategory:'',
    //涂层厚度
    InorgCoatThickness:''
  },
  getters:{

  },
}
//有机涂层体系
const OrgSysOptions={
  namespaced:true,
  actions:{

  },
  mutations:{

  },
  state:{
    OrgSysPrimerSelect:'',
    // OrgSysPrimerPass:0,
    OrgSysPrimerThickness:'',
    OrgSysFinishSelect:'',
    // OrgSysFinishPass:0
    OrgSysFinishThickness:''
  },
  getters:{

  },
}
//水膜形成
const WaterOptions={
  namespaced:true,
  actions:{

  },
  mutations:{

  },
  state:{
    AirTemp:0,
    AirHumidty:0,
    AirComputeModule:'',
    AirMembraneTime:0
  },
  getters:{

  },
}
//盐分沉积
const SaltOptions={
  namespaced:true,
  actions:{

  },
  mutations:{

  },
  state:{
    SaltTemp:0,
    SaltHumidty:0,
    SaltComputeModule:'',
    SaltConcentration:0
  },
  getters:{

  },
}
// 无机模块配置
const inorgOptions={
  namespaced:true,
  actions:{

  },
  mutations:{

  },
  state:{
    InorgWaterTemp:0,
    InorgWaterThickness:0,
    InorgDiffOutput:0,
    InorgCreepDiffInput:'',
    InorgCreepStress:0,
    InorgCreepDiffOutput:0,
    // InorgCoatTemp:0,
    // InorgCoatadhesion:0,//涂层附着力
    InorgCoatLife:0
  },
  getters:{

  },
}
// 有机模块配置
const orgOptions={
  namespaced:true,
  actions:{

  },
  mutations:{

  },
  state:{

    OrgWaterThickness:0,
    OrgToughThickness:0,
    OrgGrayComputeModule:'',
    OrgCoatLife:0
  },
  getters:{

  },
}
// 腐蚀模块配置
const corOptions={
  namespaced:true,
  actions:{

  },
  mutations:{

  },
  state:{
    CoatCorHCouple:'无',
    CoatCorHPD:0,
    // CoatCorH:0,
    // CoatCorInvalidModule:'无',
    CoatCorLifeOutput:0
  },
  getters:{

  },
}
// Weibull模块配置
const weiOptions={
  namespaced:true,
  actions:{

  },
  mutations:{

  },
  state:{
    WeibullArea:0,
    WeibullLife:0

  },
  getters:{

  },
}
// 寿命预测模块配置
const lifeOptions={
  namespaced:true,
  actions:{

  },
  mutations:{

  },
  state:{
    LifeEval:0,

  },
  getters:{

  },
}

export default new Vuex.Store({
  modules:{
    loginOptions:loginOptions,
    EvalOptions:EvalOptions,
    LangStorageOptions:LangStorageOptions,
    EnvirFactorOptions:EnvirFactorOptions,
    // MgSelectOptions:MgSelectOptions,
    InorgSysOptions:InorgSysOptions,
    OrgSysOptions:OrgSysOptions,
    WaterOptions:WaterOptions,
    SaltOptions:SaltOptions,
    inorgOptions:inorgOptions,
    orgOptions:orgOptions,
    corOptions:corOptions,
    weiOptions:weiOptions,
    lifeOptions:lifeOptions,
  }
})
