<template>
   <div class="container">
     <router-view ></router-view>
      <!-- 头部 -->
     <my-header></my-header>
    
    <!-- 主体内容 -->
     <div>
       <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
        <div class="slideshow">
          <ul>
              <li v-for="(img,index) in imgArray" v-show="index === mark" :key="index">
                <a href="#">
                  <img :src="img" alt="没有图片">
                </a>
              </li>
          </ul>
        </div>
        <div class="bar">
          <a href="#"><span v-for="(item, index) in imgArray" :class="{'active' : index === mark}" @mouseover="change(index)"  :key="index" ></span></a>  
        </div>
       </div>
      <div>
          <p class="notice">{{ msg }}</p>
      </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: '',
      mark: 0,
      imgArray: [
        'http://www.yfdyf.cn/imagestext/20170405024554.jpg',
        'http://www.yfdyf.cn/imagestext/20180213103903.jpg',
        'http://www.yfdyf.cn/imagestext/20180503025623.jpg',
        'http://www.yfdyf.cn/imagestext/20180503025631.jpg',
      ],
    }
  },
  methods: {
    // text_show : function() {console.log(event.target)
    //   //event.target.nextElementSibling.style.show = 'false';
    // }
    autoPlay () {
      this.mark ++;
      if(this.mark === 4){
        this.mark = 0;
      }
    },
    play() {
      this.timer = setInterval(this.autoPlay, 2000); 
    },
    change (i){
      clearInterval(this.timer);
      this.mark = i;
    },
    stop(){
       clearInterval(this.timer);
    },
    move(){
      this.timer = setInterval(this.autoPlay, 2000)
    }
  },
  created () {
    this.play();
  }
}
</script>

<style lang="css">
input{
  line-height : '';
}
  .container{
    width: 95%;
    height: 700px;;
    min-width: 1014px;
    margin: -8px  auto;
    background: url('http://www.yfdyf.cn/images/wrapper_bg.jpg');
  }

  
  /* 导航栏 */

 .navigat{
   margin-top: 20px;
   width: 100%;
   height: 78px;
   line-height: 78px;
   background: #16AF5D;
 }

 .navigat ul{
   position:absolute;
   float: left;
   height: 78px;
   widows: 1014px;
   list-style: none;
 }
 .navigat ul li{
   width: 100px;
   margin-right: -16px; 
   float: left;
 }

 .navigat ul li a{
  font-size: 13px;
  height: 41px;
  line-height: 41px;
  display:block; /* 将链接设为块级元素 */
  padding:0px 10px; /* 设置内边距 */
  color:#fff; /* 设置文字颜色 */
  text-decoration:none; /* 去掉下划线 */
  text-align: center;
 }

 .navigat ul li a :hover{
    border: 1px solid red;
 }

 .second_navigat{
  top:27%;
  list-style: none;
  height: 30px;
  margin-top: 10px;
 }

.second_navigat li{
  width: 120px;
  margin-right: -20px; 
  float: left;
 }

 .second_navigat li a{
  font-size: 13px;
  height: 41px;
  line-height: 41px;
  display:block; /* 将链接设为块级元素 */
  
  color:#fff; /* 设置文字颜色 */
  text-decoration:none; /* 去掉下划线 */
  text-align: center
 }

 .navigat ul li a:hover ul{
   display: block;
 }

 .second_navigat{
   display: none;
 }


 .slideshow{
   width: 1014px;
   margin: 90px auto;
 }

 .slideshow ul li{
   list-style: none;
 }

 .bar {  
    position: absolute;  
    width: 100%;  
    bottom: 10px;  
    margin: 0 auto;  
    z-index: 10;  
    text-align: center; 
    top: 77%; 
  }

  .bar span {  
    width: 20px;  
    height: 5px;  
    border: 1px solid;  
    background: white;  
    display: inline-block;  
    margin-right: 10px;  
  }

  .active {  
    background: red !important;  
  }
 
</style>



