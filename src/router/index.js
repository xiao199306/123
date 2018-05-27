import Vue from 'vue'
import Router from 'vue-router'

import Test from '@/components/Test'
//导入公共头部和脚部
import my_header from '@/components/my_header'
import my_footer from '@/components/my_footer'

export const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const constantRouterMap = [
 {
   path: '',
   name: 'test',
   component: Test,
 },
 {      
   path: '/',
   name: 'test',
   component: Test
 },
 {
  path: '/about',
  component: _import('about/about'),
  hidden: true,
 },
 {
  path: '/chairman',
  component: _import('about/chairman'),
  hidden: true,
 }  
]

export default new Router({
  routes: constantRouterMap
})

//注册公共 头部和脚步组件
Vue.component('my-header', my_header)
Vue.component('my-footer',my_footer)
