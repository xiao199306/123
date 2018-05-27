<template>
    <div>
       <div class="header">
       <div class="header_left">

       </div>
       <div class="header_right">
         <div class="header_right_login">
            <span>业务系统</span>
            <select name="" id="">
              <option value="">老版</option>
              <option value="">新版</option>
              <option value="">超新版</option>
            </select>
            用户名 <span> <Input v-model="value" placeholder="请输入用户名" style="width: 100px" size="small"></Input></span>
            密  码 <span > <Input v-model="value" placeholder="请输入密码" style="width: 100px" size="small"></Input></span>
          </div>
          <div class="drugstore__key_search" style="margin-top:5px;">
            <i-input type="text" name="" placeholder="药店关键字搜索..." style="width: 100px" size="small"></i-input>
            <span style="float:right;margin:6px 0 0 5px;"><a href="#"><img src="../img/search.png" alt="" width="15px" height="15px"></a></span>
          </div>
       </div>
       <div style="clear:both"></div>
      <div class="navigat">
        <ul>
          <li>
            <a href="/">首页</a>
          </li>
          <li>
            <a href="/">关于黎明
              <ul class="second_navigat" style="left:3%;">
                <li><a href="#/about">董事长致辞</a></li>
                <li><a href="#/chairman">总经理致辞</a></li>
                <li><a href="">店长致辞</a></li>
                <li><a href="">药师致辞</a></li>
                <li><a href="">我的致辞</a></li>
                <li><a href="">大家致辞</a></li>
              </ul>
            </a>
            
          </li>
          
          <li>
            <a href="">
              新闻中心
              <ul class="second_navigat" style="left:5%">
                <li><a href="">中央一台</a></li>
                <li><a href="">中央二台</a></li>
                <li><a href="">中央三台</a></li>
                <li><a href="">中央四台</a></li>
              </ul>
            </a>
          </li>
          <li>
            <a href="">
              人力资源
              <ul class="second_navigat" style="left:10%">
                  <li><a href="">中央一台</a></li>
                  <li><a href="">中央二台</a></li>
                  <li><a href="">中央三台</a></li>
                  <li><a href="">中央四台</a></li>
              </ul>
            </a>
          </li>
          <li>
            <a href="">
              连锁分布
              <ul class="second_navigat" style="left:20%">
                  <li><a href="">中央一台</a></li>
                  <li><a href="">中央二台</a></li>
                  <li><a href="">中央三台</a></li>
                  <li><a href="">中央四台</a></li>
              </ul>
            </a>
          </li>
          <li>
            <a href="">会员专区
              <ul class="second_navigat" style="left:28%">
                  <li><a href="">中央一台</a></li>
                  <li><a href="">中央二台</a></li>
                  <li><a href="">中央三台</a></li>
                  <li><a href="">中央四台</a></li>
              </ul>
            </a>
          </li>
          <li>
            <a href="">健康你我
              <ul class="second_navigat" style="left:37%">
                  <li><a href="">中央一台</a></li>
                  <li><a href="">中央二台</a></li>
                  <li><a href="">中央三台</a></li>
                  <li><a href="">中央四台</a></li>
              </ul>
            </a>
          </li>
          <li>
            <a href="">门店服务
              <ul class="second_navigat" style="left:45%">
                  <li><a href="">中央一台</a></li>
                  <li><a href="">中央二台</a></li>
                  <li><a href="">中央三台</a></li>
                  <li><a href="">中央四台</a></li>
              </ul>
            </a>
          </li>
          <li>
            <a href="">网上商城
              <ul class="second_navigat" style="left:56%">
                  <li><a href="">中央一台</a></li>
                  <li><a href="">中央二台</a></li>
                  <li><a href="">中央三台</a></li>
                  <li><a href="">中央四台</a></li>
              </ul>
            </a>
          </li>
          <li>
            <a href="">投资者关系
              <ul class="second_navigat" style="left:56%">
                  <li><a href="">中央一台</a></li>
                  <li><a href="">中央二台</a></li>
                  <li><a href="">中央三台</a></li>
                  <li><a href="">中央四台</a></li>
              </ul>
            </a>
          </li>
          <li>
            <a href="">联系我们
              <ul class="second_navigat" style="left:60%">
                  <li><a href="">中央一台</a></li>
                  <li><a href="">中央二台</a></li>
                  <li><a href="">中央三台</a></li>
                  <li><a href="">中央四台</a></li>
              </ul>
            </a>
          </li>
        </ul>
      </div>
     </div>
    </div>
</template>
<script>
    export default {
    name: 'about',
    data () {
        return {
        
        }
    }
}
</script>

<style>
 .header{
    width: 1014px;
    height: 90px;
    line-height: 90px;
    position:relative;
    margin: 0 auto;
  }

  .header_left{
    float: left;
    position: absolute;
    top: 10%; 
    background: url('http://www.yfdyf.cn/images/logo.png');
    width: 33%;
    height: 80%;
  }

  .header_right{
    font-size: 12px;
    width: 600px;
    height: 74px;
    float: right;
  }

  .header_right_login{
    height: 25px;
    text-align: right;
    margin-top:-10px;
  }
  
  .drugstore__key_search{
    height: 30px;
    text-align: right;
    
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
</style>

