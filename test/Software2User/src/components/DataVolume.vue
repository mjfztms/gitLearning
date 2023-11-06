<template>
  <div ref="refChart" style="width: 100%;height:100%;"></div>
</template>

<script>
  export default {
    name:'DataVolume',
    data(){
      return{
        // 获取浏览器可视区域高度（包含滚动条）、 window.innerHeight
        // 获取浏览器可视区域高度（不包含工具栏高度）、document.documentElement.clientHeight
        // 获取body的实际高度  (三个都是相同，兼容性不同的浏览器而设置的) document.body.clientHeight
        screenHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        chartInstance: null,
        allData: [],
        // 动态调整大小
        autopx:null,
        // 自适应浏览器获取宽高大小定时器
        autoTime:null,
        // 局部刷新数据定时器
        autoTimer:null
      }
    },
    created(){

    },
    beforeMount() {
      this.autopx = Math.round(this.screenHeight *0.52)
    },
    mounted(){
      // 页面大小改变时触发
      window.addEventListener('resize',this.getScreenHeight, false);
      // 页面大小改变时触发
      window.addEventListener('resize',this.getScreenWidth, false);
      // 自适应浏览器获取宽高大小定时器
      this.resizeScreen();

      // 初始化图表
      this.initChart()
      // 调用Echarts图表自适应方法
      this.screenAdapter();
      // Echarts图表自适应
      window.addEventListener("resize", this.screenAdapter);
    },
    beforeDestroy() {
      // 销毁图表
      this.chartInstance.dispose();
      this.chartInstance = null;
    },
    destroyed() {
      // 清除自适应屏幕定时器
      clearInterval(this.autoTime);
      this.autoTime = null;
      // 清除局部刷新定时器
      clearInterval(this.autoTimer);
      this.autoTimer = null;
      // 页面大小改变时触发销毁
      window.removeEventListener('resize',this.getScreenHeight, false);
      // 页面大小改变时触发销毁
      window.removeEventListener('resize',this.getScreenWidth, false);
      // Echarts图表自适应销毁
      window.removeEventListener("resize", this.screenAdapter);
    },
    methods:{
      // 自适应浏览器获取宽高大小定时器
      resizeScreen(){
        this.autoTime = setInterval(() => {
          this.getScreenHeight();
          this.getScreenWidth();
        }, 200)
      },
      // 获取浏览器高度进行自适应
      getScreenHeight() {
        this.screenHeight = window.innerHeight || document.documentElement.innerHeight || document.body.clientHeight;
        // 四舍五入取整数
        this.autopx = Math.round(this.screenHeight * 0.52);
        //console.log("高度->"+this.screenHeight +"-"+ this.kHOne);
      },
      // 字体大小根据宽度自适应
      getScreenWidth(){
        this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        //console.log("宽度->"+this.screenWidth);
      },
      initChart(){
        this.chartInstance = this.$echarts.init(this.$refs.refChart,'DataVolume');
        const initOption = {
          title:{
            text:'数据使用量',
            textStyle:{
              color:'white'
            }
          },
          grid: {
            left: '1%',
            right: '1%',
            bottom: '20%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['析氢数据量', '声发射', '无机涂层腐蚀数据', '有机涂层腐蚀数据']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80],
              type: 'bar'
            }
          ]
        };
        this.chartInstance.setOption(initOption);
      },
      screenAdapter() {
        this.titleFontSize = Math.round(this.$refs.refChart.offsetWidth / 50);
        //console.log("screenAdapter->"+this.titleFontSize);
        const adapterOption = {
          title: {
            textStyle: {
              fontSize: Math.round(this.titleFontSize)*1.5,
            },
          },
          // 圆点分类标题
          // legend: {
          //   textStyle: {
          //     fontSize: Math.round(this.titleFontSize)*1.5,
          //     color: 0x0000,
          //   },
          // },
          xAxis: {
            //  改变x轴字体颜色和大小
            axisLabel: {
              textStyle: {
                fontSize: Math.round(this.titleFontSize)*1.5,
                color:0x0000
              },
            },
          },
          yAxis: {
            //  改变y轴字体颜色和大小
            axisLabel: {
              textStyle: {
                fontSize: Math.round(this.titleFontSize)*1.5,
                color: 0x0000,
              },
            },
          },
          series: [
            {

            },
          ]

        };
        // 图表自适应变化配置
        this.chartInstance.setOption(adapterOption);
        this.chartInstance.resize();
      },
    }
  }
</script>

<style>

</style>
