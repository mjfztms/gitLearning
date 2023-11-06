<template>
  <div class="login-container">
    <star-background  />
    <!--    <dv-border-box8 style="position: fixed;margin-left: 30%;width: 65%;margin-bottom: 20%;height: 80%;margin-top: 3%;">-->

    <!--    </dv-border-box8>-->
    <dv-decoration-8 style="position: fixed;width:25%;height:10%;margin-top: 40%" />
    <dv-decoration-8 :reverse="true" style="position: fixed;width:25%;height:10%;margin-top: 3%;margin-left: 5%" />
    <dv-decoration-9 style="position:fixed; width:25%;height:25%;margin-left:3%;margin-top: 20%"> <span style="font-size: 300%;color: #b3bac7"></span></dv-decoration-9>
    <dv-decoration-11 style="position: fixed;width: 25%;height: 10%;margin-left: 3%;margin-top: 10%"><span style="font-size: 300%;color: #b3bac7">最后一步</span></dv-decoration-11>
    <dv-border-box-11 style="position: fixed;margin-left: 30%;width: 65%;margin-bottom: 20%;height: 90%;margin-top: 3%;"   title="" >

      <div>
        <dv-border-box-5 :style=" {position: 'fixed', marginLeft: '03%', marginTop: '03%', width: box_5_width, height: box_5_hight }">
          <div style="text-align:center; font-size: 300%;color: #b3bac7;font-family:youshe;margin-top: 3%">
            临界强度因子
          </div>
          <div id="chartLineBox1" :style="{width: '85%', height: Line_chart_hight, background: '#181616', marginTop: '1%', marginLeft: '5%' }"> </div>
        </dv-border-box-5>

        <dv-border-box-5 :style=" {position: 'fixed', marginLeft: '03%', marginTop: '16%', width: box_5_width, height: box_5_hight }">
          <div style="text-align:center; font-size: 300%;color: #b3bac7;font-family:youshe;margin-top: 3%">
            缺陷处临界强度因子
          </div>
          <div id="chartLineBox2" :style=" {width: '85%', height: Line_chart_hight, background: '#181616', marginTop: '1%', marginLeft: '5%' }"> </div>
        </dv-border-box-5>

        <dv-border-box-5 :style=" {position: 'fixed', marginLeft: '03%', marginTop: '29%', width: box_5_width, height: box_5_hight }">
          <div style="text-align:center; font-size: 300%;color: #b3bac7;font-family:youshe;margin-top: 3%">
            计算值与测量值对比
          </div>
          <div id="chartLineBox3" :style="{width: '85%', height: Line_chart_hight, background: '#181616', marginTop: '1%', marginLeft: '5%' }"> </div>
        </dv-border-box-5>
      </div>

      <dv-border-box-1 style="position: fixed; width:25%;height:50%;margin: 4% 34%" >
        <div  style="text-align:center; font-size: 280%;color: #b3bac7;font-family:youshe;margin-top: 5%">
          应力应变曲线
        </div>
        <div style="margin-top: 1%">
          <a-input class="input" :value="ChangeCurve" disabled=true />
        </div>

        <div  style="text-align:center; font-size: 300%;color: #b3bac7;font-family:youshe;margin-top: 4%">
          t<span style="font-size: 60%;">点蚀→裂纹</span>
        </div>
        <div style="margin-top: 1%">
          <a-input class="input" :value="TPitting" disabled=true />
        </div>

        <div  style="text-align:center; font-size: 300%;color: #b3bac7;font-family:youshe;margin-top: 4%">
          t<span style="font-size: 60%;">裂纹拓展</span>
        </div>
        <div style="margin-top: 1%">
          <a-input class="input" :value="TCrack" disabled=true />
        </div>

        <div  style="text-align:center; font-size: 280%;color: #b3bac7;font-family:youshe; margin-top: 5%">
          多因素耦合作用 </div>
        <div class="gradient-border" id="box" style="margin-top:1%;margin-left:15%;width: 70%;height: 10%">{{life}}</div>

      </dv-border-box-1>

      <dv-border-box-4 style="position: fixed;margin-left: 32%;margin-top:30%;width: 28%;height: 24%">
        <div style="margin-top: 5%;margin-left: 5%">
          <div  style="text-align:center; font-size: 400%;color: #b3bac7;font-family:youshe;margin-top: 1%">结果</div>
        <div class="gradient-border" id="box" style="position: fixed; font-size: 200%; margin-left:1%; margin-top:1%; width: 25%;height: 4%">结果</div>
        </div>

        <a id="longok" class="longstorage" @click="backforward" style="position: fixed;margin-left: 2%;top:88% ;width: 10%;height:5%">
          确定
        </a>
      </dv-border-box-4>

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
          CorMed:'',
          CorCon:0,
          Longbox1:[],
          TableData:[],
          selectedRow: null,
          //样式
          Line_chart_hight:'50%' ,
          box_5_hight:'25%',
          box_5_width:'25%',
          //数据
          TCrack: 1,
          TPitting: 2,
          ChangeCurve: 3,
        }
    },
    created() {
      this.getOptions()
    },
    mounted(){

      this.chartLine1 = this.$echarts.init(document.getElementById('chartLineBox1'));
      var option1 = this.createOption('时间', [0, 10, 20, 30, 40], '湿度', [20, 70, 50, 95, 30, 10]);
      this.chartLine1.setOption(option1);


      this.chartLine2 = this.$echarts.init(document.getElementById('chartLineBox2'));
      var option2 = this.createOption('时间', [0, 10, 20, 30, 40], ' ', [150, 270, 165, 234, 190]);
      this.chartLine2.setOption(option2);

      this.chartLine3 = this.$echarts.init(document.getElementById('chartLineBox3'));
      var option3 = this.createOption('时间', [0, 10, 20, 30, 40], '湿度', [70, 40, 100, 95, 20, 68]);
      this.chartLine3.setOption(option3);

      window.onresize = () => {
        this.chartLine1.resize();
        this.chartLine2.resize();
        this.chartLine3.resize();
      }
      
    },
    methods: {

      handleChange(value) {
        console.log(value);
      },
      handleRowClick(row) {
        this.selectedRow = row;
      },
      deleteRow(index) {
        if (this.TableData) {
          this.TableData.splice(index, 1);
          this.selectedRow = null;
        }
      },
      save(){

        let obj = {};
        obj.CorMed = this.CorMed;
        obj.CorCon =this.CorCon;

        this.TableData.push(obj);

      },
      backforward(){
        this.$router.push('/Map')
      },
      //获取下拉框中内容
      getOptions(){
        let _this = this
        // this.$http.post('http://172.22.9.125:8082/Box/GetBox',{"box":"box1"},{headers:{"token":'1111-1111-1111'}})
        this.$service.post('/Box_Operat/Select_inf',{"name":"Longbox1"})
          .then(function (response)
          {
              _this.Longbox1 = response.data.data.Longbox1
             console.log(response.data.data.Longbox1)
             console.log(_this.Longbox1)
          }).catch((error) =>{
          console.log(error);
        });
      },

      createOption(xAxisName,xAxisData, yAxisName, seriesData) {
        var option = {
          tooltip: {              //设置tip提示
            trigger: 'axis'
          },
          backgroundColor:'',
          grid: {
            x: '10%',
            y: '20%',
            width: '80%',
            height: '60%'
          },
          legend: {               //设置区分（哪条线属于什么）
            data:['']
          },
          color: ['#8AE09F'],       //设置区分（每条线是什么颜色，和 legend 一一对应）
          xAxis: {                //设置x轴
            type: 'category',
            boundaryGap: false,     //坐标轴两边不留白
            data: xAxisData,
            name: xAxisName,           //X轴 name
            nameTextStyle: {        //坐标轴名称的文字样式
              color: '#FA6F53',
              fontSize: 16,
              padding: [0, 0, 10, 0],
              // grid: {
              //   left: '10%',
              //   right: '2%',
              //   bottom: '2%',
              //   containLabel: true
              // },
            },
            axisLine: {             //坐标轴轴线相关设置。
              lineStyle: {
                color: '#FA6F53',
              }
            }
          },
          yAxis: {
            name: yAxisName,
            nameTextStyle: {
              color: '#FA6F53',
              fontSize: 16,
              padding: [0, 0, 0, 0]
            },
            axisLine: {
              lineStyle: {
                color: '#FA6F53',
              }
            },
            type: 'value'
          },
          series: [
            {
              name: '温度',
              data:  seriesData,
              type: 'line',               // 类型为折线图
              lineStyle: {                // 线条样式 => 必须使用normal属性
                normal: {
                  color: '#8AE09F',
                }
              },
            },
          ]
        };
        return option;
      },
    },
    computed:{

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
  #longdeter{
    position: fixed;
    bottom: 30%;
    margin-left: 6%;
    width: 5%;
    font-size: 200%;
  }
  #longok{
    position: fixed;
    bottom: 5%;
    left: 80%;
  }
  .longstorage{
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
  .longstorage:active{
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0,0,0,0.24);
  }
  .longstorage::before{
    content:"";
    position: absolute;
    left: -5px;
    top:-5px;
    right: -5px;
    bottom: 20px;
    background: linear-gradient(90deg, #0323f4, #41b5f4, #b6b07e,#03a9f4);
    background-size: 400%;
    border-radius: 50%;
    filter: blur(20px);
    z-index: -1;
  }
  .longstorage:hover::before{
    animation: sun 8s infinite;
  }
  .longstorage:hover{
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


</style>
