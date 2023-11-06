<template>
  <div class="login-container">
    <star-background  />
    <!--    <dv-border-box8 style="position: fixed;margin-left: 30%;width: 65%;margin-bottom: 20%;height: 80%;margin-top: 3%;">-->

    <!--    </dv-border-box8>-->
    <dv-decoration-8 style="position: fixed;width:25%;height:10%;margin-top: 40%" />
    <dv-decoration-8 :reverse="true" style="position: fixed;width:25%;height:10%;margin-top: 3%;margin-left: 5%" />
    <dv-decoration-9 style="position:fixed; width:25%;height:25%;margin-left:3%;margin-top: 20%"><<span style="font-size: 300%;color: #b3bac7"></span></dv-decoration-9>
    <dv-decoration-11 style="position: fixed;width: 25%;height: 10%;margin-left: 3%;margin-top: 10%"><span style="font-size: 300%;color: #b3bac7">寿命评估</span></dv-decoration-11>
    <dv-border-box-11 style="position: fixed;margin-left: 30%;width: 70%;margin-bottom: 20%;height: 100%;margin-top: 0%;"   title="" >
<!--      <dv-border-box-6 style="position: fixed;margin-left: 3%;margin-top: 5%;width: 45%;height: 78%">-->
        <!--        <div style="position:fixed;margin-top: 3%;margin-left: 3%">-->
        <!--          <span style="font-size: 330%;color: #b3bac7;font-family: zhanku ">自定义名称</span>-->
        <!--        <a-textarea class="input" style="left: 5%" v-model='EvalName' placeholder="自定义名称" auto-size/>-->
        <!--        </div>-->
      <div  ref="pdf" style="position: relative; margin-top:5%;margin-left:2%;height:80%;width:95%; overflow-y: auto">
<!--        position: relative; margin-top:5%;margin-left:2%;height:80%;width:95%; overflow-y: auto-->
        <el-table  id="pdfDom"
          :header-cell-style="{background:'#18191a',color:'#aebad4',borderColor:'black'}"
                  :cell-style="{background:'#283838',color:'#aebad4',borderColor:'black' }"
          :data="evalTableData"  border style="position:absolute;margin-top: 5%;  width: 100%; font-size: 120%;font-weight: bold" >
          <el-table-column
            prop="eval"
            label="评估对象信息"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="自定义名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="code"
            label="代码">
          </el-table-column>
          <el-table-column
            prop="user"
            label="使用人">
          </el-table-column>
          <el-table-column
            prop="remark"
            label="备注信息">
          </el-table-column>
          <div slot="append" style="text-align: center" >
            <!--在此处添加你想要插入在表格最后一行的内容-->
            <el-table
              :data="longTableData1" border :header-cell-style="{background:'#18191a',color:'#aebad4',borderColor:'black'}"
                      :cell-style="{background:'#283838',color:'#aebad4',borderColor:'black' }"
                      style="font-size: 120%;font-weight: bold">
              <el-table-column
                prop="LongStorage"
                label="长贮环境构建">
              </el-table-column>
              <el-table-column
                prop="StorageMedium"
                label="评估环境">
              </el-table-column>
              <el-table-column
                prop="StorageTemp"
                label="环境温度(℃)">
              </el-table-column>
            </el-table>
          </div>
          <div slot="append" style="text-align: center;">
            <!--在此处添加你想要插入在表格最后一行的内容-->
            <el-table :data="longTableData2" border :header-cell-style="{background:'#18191a',color:'#aebad4',borderColor:'black'}"
                      :cell-style="{background:'#283838',color:'#aebad4',borderColor:'black' }"
                      style="font-size: 120%;font-weight: bold">

              <el-table-column
                prop="CorMed"
                label="腐蚀介质种类"
                >
              </el-table-column>
              <el-table-column
                prop="CorCon"
                label="腐蚀介质浓度(ppm)"
                >
              </el-table-column>
            </el-table>
          </div>
          <div slot="append" style="text-align: center">
            <!--在此处添加你想要插入在表格最后一行的内容-->
            <el-table :data="MgTableData" border :header-cell-style="{background:'#18191a',color:'#aebad4',borderColor:'black'}"
                      :cell-style="{background:'#283838',color:'#aebad4',borderColor:'black' }"
                      style="font-size: 120%;font-weight: bold">
              <el-table-column
                prop="BaseMaterial"
                label="镁合金选择">
              </el-table-column>
              <el-table-column
                prop="MgAlloy"
                label="镁合金">
              </el-table-column>
            </el-table>
          </div>
          <div slot="append" style="text-align: center">
            <!--在此处添加你想要插入在表格最后一行的内容-->
            <el-table :data="EnvirFactorTableData" border :header-cell-style="{background:'#18191a',color:'#aebad4',borderColor:'black'}"
                      :cell-style="{background:'#283838',color:'#aebad4',borderColor:'black' }"
                      style="font-size: 120%;font-weight: bold">
              <el-table-column
                prop="EnvirFactor"
                label="涂层体系选择">
              </el-table-column>
              <el-table-column
                prop="InorgCoatCategory"
                label="无机涂层种类">
              </el-table-column>
              <el-table-column
                prop="InorgCoatThickness"
                label="无机涂层厚度">
              </el-table-column>
              <el-table-column
                prop="OrgSysPrimerSelect"
                label="底漆选择">
              </el-table-column>
              <el-table-column
                prop="OrgSysPrimerThickness"
                label="涂层厚度">
              </el-table-column>
              <el-table-column
                prop="OrgSysFinishSelect"
                label="面漆选择">
              </el-table-column>
              <el-table-column
                prop="OrgSysFinishThickness"
                label="涂层厚度">
              </el-table-column>
            </el-table>
          </div>
          <div slot="append" style="text-align: center">
            <!--在此处添加你想要插入在表格最后一行的内容-->
            <el-table :data="yearTableData" border :header-cell-style="{background:'#18191a',color:'#aebad4',borderColor:'black'}"
                      :cell-style="{background:'#283838',color:'#aebad4',borderColor:'black' }"
                      style="font-size: 120%;font-weight: bold">
              <el-table-column
                prop="year"
                label="年份">
              </el-table-column>
              <el-table-column
                prop="adhesion"
                label="附着力">
              </el-table-column>
              <el-table-column
                prop="water"
                label="吸水率">
              </el-table-column>
            </el-table>
          </div>
          <div slot="append" style="text-align: center">
            <!--在此处添加你想要插入在表格最后一行的内容-->
            <el-table :data="lifeTableData" border :header-cell-style="{background:'#18191a',color:'#aebad4',borderColor:'black'}"
                      :cell-style="{background:'#283838',color:'#aebad4',borderColor:'black' }"
                      style="font-size: 120%;font-weight: bold">
              <el-table-column
                prop="Module"
                label="模块">
              </el-table-column>
              <el-table-column
                prop="cacluLife"
                label="寿命计算">
              </el-table-column>
              <el-table-column
                prop="life"
                label="寿命值(年)">
              </el-table-column>
            </el-table>
          </div>
        </el-table>
      </div>
          <a id="lifedownload" class="lifeeval" @click="exportPDF">
            下载寿命评估报告
          </a>
        <a id="lifeok" class="lifeeval" @click="backforward" >
          确定
        </a>

    </dv-border-box-11>
  </div>
</template>

<script>
  import StarBackground from '../components/StarBackground'
  import html2canvas from 'html2canvas'
  import jspdf from 'jspdf'

  export default {
    name: "Tem",
    components: { StarBackground },
    beforeCreate: function() {
      document.getElementsByTagName('body')[0].className = 'body-bg'
    },
    data(){
      return{
        // LifeEval:0
        pdf:null,

        evalTableData: [
          {
            eval: '',
            name: sessionStorage.getItem('EvalName'),
            code: sessionStorage.getItem('EvalCode'),
            user: localStorage.getItem('EvalUser'),
            remark:sessionStorage.getItem('EvalRemark')
          },
        ],

        longTableData1: [

          {
            LongStorage: '',
            StorageMedium:sessionStorage.getItem('StorageMedium'),
            StorageTemp:sessionStorage.getItem('StorageTemp'),
          },
        ],
        longTableData2:JSON.parse(sessionStorage.getItem('LongTableData')),

        MgTableData: [
          {
            BaseMaterial: '',
            MgAlloy:sessionStorage.getItem('MgAlloy'),
            // HeatTreatProcess:sessionStorage.getItem('HeatTreatProcess')
          },
        ],

        EnvirFactorTableData: [
          {
            EnvirFactor: '',
            // InorgSysMembrane:sessionStorage.getItem('InorgSysMembrane'),
            // InorgSysPlate:sessionStorage.getItem('InorgSysPlate'),
            // InorgSysAftertreat:sessionStorage.getItem('InorgSysAftertreat'),
            InorgCoatCategory:sessionStorage.getItem('InorgCoatCategory'),
            InorgCoatThickness:sessionStorage.getItem('InorgCoatThickness'),
            OrgSysPrimerSelect:sessionStorage.getItem('OrgSysPrimerSelect'),
            OrgSysPrimerThickness:sessionStorage.getItem('OrgSysPrimerThickness'),
            OrgSysFinishSelect:sessionStorage.getItem('OrgSysFinishSelect'),
            OrgSysFinishThickness:sessionStorage.getItem('OrgSysFinishThickness')
          },
        ],

        envConverTableData: [
          {
            NonPMaterial: '',
            AirMembraneTime:sessionStorage.getItem('AirMembraneTime'),
            SaltConcentration:sessionStorage.getItem('SaltConcentration')
          },
        ],
        yearTableData:[
          {
            year:'2019',
            adhesion:'100',
            water:'80%',
          },
          {
            year:'2020',
            adhesion:'90',
            water:'70%'
          },
          {
            year:'2021',
            adhesion:'75',
            water:'64%'
          },
          {
            year:'2022',
            adhesion:'55',
            water:'46%'
          },
        ],
        lifeTableData: [
          {
            Module: '无机涂层失效模型',
            cacluLife:'无机涂层寿命计算值',
            life:sessionStorage.getItem('InorgCoatLife')
          },
          {
            Module: '有机涂层失效模型',
            cacluLife:'有机涂层寿命计算值',
            life:sessionStorage.getItem('OrgCoatLife')
          },
          {
            Module: '腐蚀诱发涂层失效模型',
            cacluLife:'有机+无机涂层寿命计算值',
            life:sessionStorage.getItem('CoatCorLifeOutput')
          },
          {
            Module: 'Weibullf分布面积校正模块',
            cacluLife:'Weibull折算',
            life:sessionStorage.getItem('WeibullLife')
          },
        ],
      }
    },
    methods: {
      onChange(){

      },
      backforward(){
        this.$router.push('/map')
      },

      async exportPDF() {
        const element = document.getElementById('pdfDom')

        const canvas = await html2canvas(element,{ scale: 2 })
        const imgData = canvas.toDataURL('image/png')

        const pdf = new jspdf('landscape', 'px', 'a4')
        pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height,{ compression: 'MEDIUM', quality: 1 })
        // pdf.addPage('landscape', 'a4')
        pdf.save('寿命评估报告.pdf')
      },

      // begineval(){
      //   alert('是否确认评估信息?')
      //   this.$store.state.lifeOptions.LifeEval
      // }
      // downloadPdf () {
      //   let target = this.pdf
      //   html2canvas(target, {
      //     allowTaint: true,
      //     useCORS: true, // 当图片是链接地址时，需加该属性，否组无法显示图片
      //     dpi: window.devicePixelRatio*4 , //将分辨率提高到特定的DPI 提高四倍
      //     "imageTimeout": 0,
      //     'scale': 4,
      //     // "width": 1250,
      //     // "height": 841,
      //     height: document.getElementById('pdfDom').scrollHeight,
      //     // windowHeight: document.getElementById('pdfDom').scrollHeight
      //   })
      //     .then(canvas => {
      //       console.log(canvas)
      //       console.log(document.getElementById('pdfDom').scrollHeight)
      //       let contentWidth = canvas.width; // 592px
      //       let contentHeight = canvas.height; // 841px
      //       //一页pdf显示html页面生成的canvas高度;
      //       let pageHeight = contentWidth / 592 * 841;
      //       //未生成pdf的html页面高度
      //       let leftHeight = contentHeight;
      //       //页面偏移
      //       // let offsetX = 100;
      //       // let offsetY = 100;
      //       let offsetX = 0;
      //       let offsetY = 0;
      //       //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
      //       let imgWidth = 592;
      //       //let imgWidth = 592 - 2 * offsetX;//边框留白
      //       let imgHeight = imgWidth / contentWidth * contentHeight;
      //       let pageData = canvas.toDataURL('image/jpeg', 1.0);
      //
      //       // 第一个方向,第二个单位,第三个尺寸格式
      //       // landscape横向
      //       // let pdf = new jspdf('landscape', 'pt', 'a4');
      //       let pdf = new jspdf('', 'pt', 'a4');
      //
      //       //有两个高度需区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
      //       //当内容未超过pdf一页显示的范围，无需分页
      //       if(leftHeight < pageHeight) {
      //         pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
      //       } else {
      //         while(leftHeight > 0) {
      //           pdf.addImage(pageData, 'JPEG', offsetX, offsetY, imgWidth, imgHeight)
      //           leftHeight -= pageHeight;
      //           offsetX -= 592;
      //           offsetY -= 841;
      //           //避免添加空白页
      //           if(leftHeight > 0) {
      //             pdf.addPage();
      //           }
      //         }
      //       }
      //       let name = '寿命评估报告.pdf'; // 定义生成的pdf的文件名字
      //       pdf.save(name);
      //       background:'#000'
      //     });
      // },
      // getpdfyes() {
      //   this.getPdf();
      // },



    },
    mounted () {
      this.pdf = this.$refs.pdf
    },
    computed:{
      LifeEval:{
        get(){
          return this.$store.state.lifeOptions.LifeEval
        },
        set(value){
          this.$store.state.lifeOptions.LifeEval = value

        }
      }
    },
    beforeDestroy() {
      sessionStorage.setItem('LifeEval',this.$store.state.lifeOptions.LifeEval)
    }
  }
</script>

<style>
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
    line-height: 100%;
    width: 50%;
    background-color: transparent;

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
     #lifedownload{
       position:fixed;
       bottom: 2%;
       left: 35%;
       width: 20%;
     }
     #lifeok{
       position:fixed;
       bottom: 2%;
       left: 85%;
       width: 10%;
     }
  .lifeeval{
    font-family: zhankuyuyang;
    font-size: 300%;
    text-align: center;
    background: linear-gradient(90deg, #16ea6a, #184ce5, #b11b7f,#03a9f4);
    background-size: 400%;
    border-radius: 20%;
    z-index: 1;
  }
  .lifeeval:active{
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0,0,0,0.24);
  }
  .lifeeval::before{
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
  .lifeeval:hover::before{
    animation: sun 8s infinite;
  }
  .lifeeval:hover{
    animation: sun 10s infinite;
  }
  @keyframes sun {
    100%{
      background-position: -400% 0;
    }
  }
  .el-table::before {
    height: 0px;
    width: 0px;
  }
  .el-table--border::after {
    height: 0px;
    width: 0px;
  }
  .el-table--border {
    border: none;
  }

  .el-table__body-wrapper::-webkit-scrollbar {
    /*width: 0;宽度为0隐藏*/
    width: 0px;
  }
  .el-table__body-wrapper::-webkit-scrollbar-thumb {
    border-radius: 2px;
    height: 50px;
    background: #eee;
  }
  .el-table__body-wrapper::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    background: rgba(0, 0, 0, 0.4);
  }
  /* 表格不出现横向滚动条 */
  .el-table--scrollable-x .el-table__body-wrapper {
    overflow-x: hidden;
  }


</style>
