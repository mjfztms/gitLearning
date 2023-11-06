<template>
  <div class="login-container">
    <star-background  />
    <!--    <dv-border-box8 style="position: fixed;margin-left: 30%;width: 65%;margin-bottom: 20%;height: 80%;margin-top: 3%;">-->

    <!--    </dv-border-box8>-->
    <dv-decoration-8 style="position: fixed;width:25%;height:10%;margin-top: 40%" />
    <dv-decoration-8 :reverse="true" style="position: fixed;width:25%;height:10%;margin-top: 3%;margin-left: 5%" />
    <dv-decoration-9 style="position:fixed; width:25%;height:25%;margin-left:3%;margin-top: 20%"><span style="font-size: 300%;color: #b3bac7"></span></dv-decoration-9>
    <dv-decoration-11 style="position: fixed;width: 25%;height: 10%;margin-left: 3%;margin-top: 10%"><span style="font-size: 300%;color: #b3bac7">钝化材料界面1</span></dv-decoration-11>
    <dv-border-box-11 style="position: fixed;margin-left: 30%;width: 70%;margin-bottom: 20%;height: 100%;margin-top: 0%;"   title="" >

      <dv-border-box-5 :style=" {position: 'fixed', marginLeft: '03%', marginTop: '03%', width: box_5_width, height: box_5_hight }">
        <div style="text-align:center; font-size: 300%;color: #b3bac7;font-family:youshe;margin-top: 3%">
          开路电位(OCP)
        </div>
        <div id="chartLineBox1" :style="{width: '85%', height: Line_chart_hight, background: '#181616', marginTop: '1%', marginLeft: '5%' }"> </div>
      </dv-border-box-5>

      <dv-border-box-5 :reverse="true" :style=" {position: 'fixed', marginLeft: '40%', marginTop: '03%', width: box_5_width, height: box_5_hight }">
        <div style="text-align:center; font-size: 300%;color: #b3bac7;font-family:youshe;margin-top: 5%">
          保护电位(E<span style="font-size: 60%;">rp</span>)
        </div>
        <div id="chartLineBox2" :style=" {width: '85%', height: Line_chart_hight, background: '#181616', margin: '1% auto' }"></div>
      </dv-border-box-5>

      <dv-border-box-5 :style=" {position: 'fixed', marginLeft: '03%', marginTop: '16%', width: box_5_width, height: box_5_hight }">
        <div style="text-align:center; font-size: 300%;color: #b3bac7;font-family:youshe;margin-top: 3%">
          开路电位-保护电位
        </div>
        <div id="chartLineBox3" :style=" {width: '85%', height: Line_chart_hight, background: '#181616', marginTop: '1%', marginLeft: '5%' }"> </div>
      </dv-border-box-5>

      <dv-border-box-5 :reverse="true" :style=" {position: 'fixed', marginLeft: '40%', marginTop: '16%', width: box_5_width, height: box_5_hight }">
        <div style="text-align:center; font-size: 300%;color: #b3bac7;font-family:youshe;margin-top: 5%">
          钝化膜破裂时间
        </div>
        <div id="chartLineBox4" :style=" {width: '85%', height: Line_chart_hight, background: '#181616', margin: '1% auto' }"></div>
      </dv-border-box-5>

      <dv-border-box-5 :style=" {position: 'fixed', marginLeft: '03%', marginTop: '29%', width: box_5_width, height: box_5_hight }">
        <div style="text-align:center; font-size: 300%;color: #b3bac7;font-family:youshe;margin-top: 3%">
          点蚀诱导时间
        </div>
        <div id="chartLineBox5" :style="{width: '85%', height: Line_chart_hight, background: '#181616', marginTop: '1%', marginLeft: '5%' }"> </div>
      </dv-border-box-5>


      <dv-border-box-4 :reverse="true" style="position: fixed;margin-left: 38%;margin-top:30%;width: 30%;height: 28%">
        <div style="margin-top: 8%">
          <span style="font-size: 300%;color: #b3bac7;font-family: youshe">多因素耦合作用</span><br><br>
          <div class="gradient-border" id="box" style="font-size: 200%; margin-top: 4%; margin-left:16%;width: 70%;height: 20%">计算公式</div>

        </div>
      </dv-border-box-4>

      <!-- <a id="orgok" class="orgmodule" @click="backforward" style="position: absolute;left: 50%; top: 60%;;width: 36%;height: 18%">
        确定
      </a> -->

      <div style="position: fixed; text-align:center; font-size: 400%;color: #b3bac7;font-family:youshe;margin-top: 44.2%; margin-left: 4.3%">
          结果
      </div>
      <div class="gradient-border" id="box" style="position: fixed; font-size: 200%; margin-left:10%; margin-top:45%; width: 25%;height: 4%">结果</div>

      <a id="orgok" class="orgmodule" @click="backforward">
        确定
      </a>
    </dv-border-box-11>
  </div>

</template>

<script>
  import StarBackground from '../components/StarBackground'

  // let myChart = echarts.init(this.$refs.myChart)
  export default {
    name: "Tem",
    components: { StarBackground },
    beforeCreate: function() {
      document.getElementsByTagName('body')[0].className = 'body-bg'
    },
    data(){
      return {
        //样式控制
        Line_chart_hight:'50%' ,
        box_5_hight:'25%',
        box_5_width:'28%',
        life:0,
        //数据
        OcpX: ['0', '10', '20', '30', '40'],
        OcpY: [220, 232, 201, 234, 290, 230, 220]
        }
    },
    mounted(){
      this.chartLine1 = this.$echarts.init(document.getElementById('chartLineBox1'));
      // 指定图表的配置项和数据

      this.chartLine1 = this.$echarts.init(document.getElementById('chartLineBox1'));
      var option1 = this.createOption('时间', this.OcpX, ' ', this.OcpY);
      this.chartLine1.setOption(option1);

      this.chartLine2 = this.$echarts.init(document.getElementById('chartLineBox2'));
      var option2 = this.createOption('时间', [0, 10, 20, 30, 40], ' ', [150, 270, 165, 234, 190]);
      this.chartLine2.setOption(option2);

      this.chartLine3 = this.$echarts.init(document.getElementById('chartLineBox3'));
      var option3 = this.createOption('时间', [0, 10, 20, 30, 40], '湿度', [70, 40, 100, 95, 20, 68]);
      this.chartLine3.setOption(option3);

      this.chartLine4 = this.$echarts.init(document.getElementById('chartLineBox4'));
      var option4 = this.createOption('时间', [0, 10, 20, 30, 40], '湿度', [20, 70, 50, 95, 30, 10]);
      this.chartLine4.setOption(option4);

      this.chartLine5 = this.$echarts.init(document.getElementById('chartLineBox5'));
      var option5 = this.createOption('时间', [0, 10, 20, 30, 40], '湿度', [5, 10, 20, 45, 90]);
      this.chartLine5.setOption(option5);

      window.onresize = () => {
        this.chartLine1.resize();
        this.chartLine2.resize();
        this.chartLine3.resize();
        this.chartLine4.resize();
        this.chartLine5.resize();
      }
      
    },
    methods: {
      backforward(){
        this.$router.push('/map')
      },
      //配置项函数
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
     #orgok{
       position: fixed;
       bottom: 4%;
       left: 80%;
     }
     #orgcal{
       position: fixed;
       bottom: 15%;
       left: 60%;
     }
  .orgmodule{
    /*position: fixed;*/
    /*bottom: 6%;*/
    /*left: 57.5%;*/
    width: 10%;
    font-family: zhankuyuyang;
    font-size: 300%;
    text-align: center;
    background: linear-gradient(90deg, #16ea6a, #184ce5, #b11b7f,#03a9f4);
    background-size: 400%;
    border-radius: 20%;
    z-index: 1;
  }
  .orgmodule:active{
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0,0,0,0.24);
  }
  .orgmodule::before{
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
  .orgmodule:hover::before{
    animation: sun 8s infinite;
  }
  .orgmodule:hover{
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
    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, rgb(16, 152, 173), #07b39b, #6fba82);
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
