<template>
  <div class="overflow:hidden">
    <a-row >
      <div id="MapHeader">
        <font size="50px">寿命评估系统导航</font>
      </div>
    </a-row><br><br><br>
    <dv-decoration-10 style="width:25%;height:5px;" />
    <dv-decoration-10 style="width:25%;height:5px; transform: rotateY(180deg);margin-left:75%" />
    <br>

    <a-row>
      <dv-decoration-5 :style="{'width':screenWidth+'px', 'height':'120px'}"  dur= 15 />
    </a-row>
    <a-row  id="Map" style="position: fixed;">
      <div id="mountNode" ></div>
    </a-row>
  </div>
</template>

<script>

  import G6 from '@antv/g6';
  export default {
    inject:['reload1'],
    name:'navimap',
    data(){
      return {
        screenHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,

        whole_x: 400,
        whole_y: 200
      }
    },
    mounted() {
      this.initG6();
    },
    components:{

    },
    methods: {
      toNext(){
        console.log('toNext')
        console.log(this)
        this.$router.push('/map')
      },
      initG6(){
        let self = this
        const button1 = new Image();
        const button2 = new Image();

        button1.src=require('../assets/111.png')
        button2.src=require('../assets/222.png')

        const vuecom =this
        const data={
          nodes: [
            {
              id:'node1',
              x: 100 + this.whole_x,
              y: 325 + this.whole_y,
              size: [120, 120],
              type: 'image',
              img: this.colorChange_node1(),
              label: '基体材料',
              labelCfg: {
                position: 'bottom',
                offset: 10,
                style:{
                  fontSize:25,
                  fill:'#bfd1e8'
                }
              },
              style: {

                stroke: '#000',
                lineWidth: 2,
                cursor:'pointer'
              }
            },
            {

              id:'node2',
              x: 400 + this.whole_x,
              y: 325 + this.whole_y,
              size: [120, 120],
              type: 'image',
              img: this.colorChange_node2(),
              label: '环境因素',
              labelCfg: {
                position: 'bottom',
                offset: 10,
                style:{
                  fontSize:25,
                  fill:'#bfd1e8'
                }
              },
              style: {

                stroke: '#000',
                lineWidth: 2,
                cursor:'pointer'
              }
            },
            {
              id:'node3',
              x: 600 + this.whole_x,
              y: 100 + this.whole_y,
              size: [120, 120],
              type: 'image',
              img:this.colorChange_node3(),
              label: '钝化材料界面1',
              labelCfg: {
                position: 'bottom',
                offset: 10,
                style:{
                  fontSize:25,

                  fill:'#bfd1e8'
                }
              },
              style: {

                fill: '#1A4F8B',
                stroke: '#000',
                lineWidth: 2,
                cursor:'pointer'
              }
            },
            {
              id:'node4',
              x: 900 + this.whole_x,
              y: 100 + this.whole_y,

              size: [120, 80],
              type: 'ellipse',
              image:'../../static/dyg.png',

              size: [120, 120],
              type: 'image',
              img:this.colorChange_node4(),

              label: '钝化材料界面2',
              labelCfg: {
                position: 'bottom',

                offset: 10,
                style:{
                  fontSize:23,
                  fill:'#bfd1e8'
                }
              },

              style: {
                stroke: '#000',
                lineWidth: 2,
                cursor:'pointer'
              }
            },
            {
              id:'node5',
              x: 750 + this.whole_x,
              y: 320 + this.whole_y,
              size: [120, 120],
              type: 'image',
              img:this.colorChange_node5(),
              label: '非钝化材料界面',
              labelCfg: {
                position: 'bottom',
                offset: 10,
                style:{
                  fontSize:25,
                  fill:'#bfd1e8'
                }
              },
              style: {

                stroke: '#000',
                lineWidth: 2,
                cursor:'pointer'
              }
            },
            {
              id:'node6',
              x: 1100 + this.whole_x,
              y: 320 + this.whole_y,
              size: [120, 120],
              type: 'image',
              img: this.colorChange_node6(),
              label: '最后一步',
              labelCfg: {
                position: 'bottom',
                offset: 10,
                style:{
                  fontSize:25,
                  fill:'#bfd1e8'
                }
              },
              style: {

                stroke: '#000',
                lineWidth: 2,
                cursor:'pointer'
              }
            },
            {
              id:'node7',
              x: 1450 + this.whole_x,
              y: 325 + this.whole_y,
              size: [300, 214],
              type: 'image',
              img:this.colorChange_node7(),
              label: '寿命评估',
              labelCfg: {
                position: 'bottom',
                offset: 10,
                style:{
                  fontSize:25,
                  fill:'#bfd1e8'
                }
              },
              style: {
                fill: this.colorChange_node7(),
                stroke: '#000',
                lineWidth: 2,
                cursor:'pointer'
              }
          }],
          edges: [{
              source: "node1",
              target: "node2"
          }, {
              source: "node2",
              target: "node3"
          }, {
              source: "node3",
              target: "node4"
          }, {
              source: "node2",
              target: "node5"
          },  {
              source: "node5",
              target: "node6"
          }, {
              source: "node4",
              target: "node6"
          }, {
              source:"node6",
              target:"node7"
          }]
          };
        const tooltip = new G6.Tooltip({
          offsetX: 70,
          offsetY: 20,
          getContent (e) {
            const outDiv = document.createElement('div')
            outDiv.style.width = '180px'
            outDiv.innerHTML = `
            <ul id="nodeDetails"style="font-size: 200%">
              <li>${e.item.getModel().label}</li>
            </ul>`
            return outDiv
          },
          itemTypes: ['node']
        })
          const graph = new G6.Graph({
	        container: 'mountNode',
	        width: window.innerWidth,
	        height: window.innerHeight,

          plugins: [tooltip],
	        defaultEdge: {
	          shape: 'polyline',
	          style: {
	            endArrow:{
                path: G6.Arrow.vee(10, 20, 25), d: 25
        },
	            lineWidth: 2,
	            stroke: '#666'
	          }
	        },
          modes:{
            default: ['drag-canvas', 'zoom-canvas','activate-relations'],

          }
	      });
        graph.data(data);
	      graph.render();
        graph.on('node:click',function(evt){

          const target = evt.target
          const node = evt.item
          const model = node.getModel()

          if(model.label == '基体材料'){
            const hasChangeBg = JSON.parse(window.localStorage.getItem('clicked_basicMate'))
            if(!hasChangeBg){
              target.attr('fill','#6cf')
              target.attr('img',button1)
              target.attr('imgSrc',button1.src)
              window.localStorage.setItem('clicked_basicMate','true')
              vuecom.$router.push('/BaseMaterial')
            }
            else{
              window.localStorage.setItem('clicked_basicMate','false')
              vuecom.reload1()
            }
          }
          if(model.label == '环境因素'){
            const hasChangeBg = JSON.parse(window.localStorage.getItem('clicked_envir'))
            if(!hasChangeBg){
              if(window.localStorage.getItem('clicked_basicMate') === 'true'){

                target.attr('fill','#6cf')
                target.attr('img',button1)
                target.attr('imgSrc',button1.src)
                window.localStorage.setItem('clicked_envir','true')
                vuecom.$router.push('/EnvirFactor')
              }
            }
            else{
              window.localStorage.setItem('clicked_envir','false')
              vuecom.reload1()
            }
          }
          if(model.label == '非钝化材料界面'){
            const hasChangeBg = JSON.parse(window.localStorage.getItem('clicked_nonpass'))
            if(!hasChangeBg){
              if(window.localStorage.getItem('clicked_envir') === 'true'){
                target.attr('fill','#6cf')
                target.attr('img',button1)
                target.attr('imgSrc',button1.src)
                window.localStorage.setItem('clicked_nonpass','true')
                vuecom.$router.push('/NonPMaterial')
              }
            }
            else{
              window.localStorage.setItem('clicked_nonpass','false')
              vuecom.reload1()
            }
          }
          if(model.label == '钝化材料界面1'){
            const hasChangeBg = JSON.parse(window.localStorage.getItem('clicked_pass1'))
            if(!hasChangeBg){
              if(window.localStorage.getItem('clicked_envir') === 'true'){
                target.attr('fill','#6cf')
                target.attr('img',button1)
                target.attr('imgSrc',button1.src)
                window.localStorage.setItem('clicked_pass1','true')
                vuecom.$router.push('/PassiMaterialOne')
              }
            }
            else{
              window.localStorage.setItem('clicked_pass1','false')
              vuecom.reload1()
            }
          }
          if(model.label == '钝化材料界面2'){
            const hasChangeBg = JSON.parse(window.localStorage.getItem('clicked_pass2'))
            if(!hasChangeBg){
              if(window.localStorage.getItem('clicked_pass1') === 'true'){
                target.attr('fill','#6cf')
                target.attr('img',button1)
                target.attr('imgSrc',button1.src)
                window.localStorage.setItem('clicked_pass2','true')
                vuecom.$router.push('/PassiMaterialTwo')
              }

            }
            else{
              window.localStorage.setItem('clicked_pass2','false')
              vuecom.reload1()
            }
          }
          if(model.label == '最后一步'){
            const hasChangeBg = JSON.parse(window.localStorage.getItem('clicked_last'))
            if(!hasChangeBg ){
              if(window.localStorage.getItem('clicked_pass2') === 'true' || window.localStorage.getItem('clicked_nonpass') === 'true'){
                target.attr('fill','#6cf')
                target.attr('img',button1)
                target.attr('imgSrc',button1.src)
                window.localStorage.setItem('clicked_last','true')
                vuecom.$router.push('/TheLast')
              }
            }
            else{
              window.localStorage.setItem('clicked_last','false')
              vuecom.reload1()
            }
          }
          if(model.label == '寿命评估'){
            const hasChangeBg = JSON.parse(window.localStorage.getItem('clicked_life'))
            if(!hasChangeBg){
              if(window.localStorage.getItem('clicked_last') === 'true'){
                target.attr('img',button1)
                target.attr('imgSrc',button1.src)
                window.localStorage.setItem('clicked_life','true')
                vuecom.$router.push('/lifeeval')
              }
            }
            else{
              target.attr('fill','#6cf')
              window.localStorage.setItem('clicked_life','false')
              vuecom.reload1()
            }
          }
        })
      },

      colorChange_node1(){
        if(JSON.parse(window.localStorage.getItem('clicked_basicMate'))){
          return require('../assets/111.png')
        }
        else return require('../assets/222.png')
      },
      colorChange_node2(){
        if(JSON.parse(window.localStorage.getItem('clicked_envir'))){
          return require('../assets/111.png')
        }
        else return require('../assets/222.png')
      },
      colorChange_node3(){
        if(JSON.parse(window.localStorage.getItem('clicked_pass1'))){
          return require('../assets/111.png')
        }
        else return require('../assets/222.png')
      },
      colorChange_node4(){
        if(JSON.parse(window.localStorage.getItem('clicked_pass2'))){
          return require('../assets/111.png')
        }
        else return require('../assets/222.png')
      },
      colorChange_node5(){
        if(JSON.parse(window.localStorage.getItem('clicked_nonpass'))){
          return require('../assets/111.png')
        }
        else return require('../assets/222.png')
      },
      colorChange_node6(){
        if(JSON.parse(window.localStorage.getItem('clicked_last'))){
          return require('../assets/111.png')
        }
        else return require('../assets/222.png')
      },
      colorChange_node7(){
        if(JSON.parse(window.localStorage.getItem('clicked_life'))){
          return require('../assets/10eval2.png')
        }
        else return require('../assets/10eval1.png')
      },

    }
  }
</script>

<style scoped>
  #MapHeader{
    height:200px;
    line-height:200px;
    /* background-color:orange; */
    background:url("../assets/background1.jpg") center center no-repeat;
    text-align:center;
    margin-top:auto;
    margin-left:auto;
    color:white;
    position:fixed;
    top: 0;
    left: 0;
    width:100%;

    min-width: 1000px;
    z-index:-10;
    zoom: 1;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
  };
</style>
