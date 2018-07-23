import Vue from 'vue'
import Resource from 'vue-resource'
//引入组件
import app from './App.vue'
//导入路由
import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)
Vue.use(Resource)
//按需导入MintUi
// import { Header, Swipe, SwipeItem,Button } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// //按需导入MintUi js
// import { Toast,Lazyload } from 'mint-ui'
// Vue.use(Toast);
// Vue.use(Lazyload);
//全部导入MUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
//导入样式
import './css/base.styl'
//导入MUI
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


//定义全局过滤器
Vue.filter('dateDispose', (el)=>{
  var month = el.getMonth()+1
  toString(month).padStart(2,'0')
  el = el.getFullYear() + '年' + month + '月' + el.getDate() + '日'  
  +' ' + el.getHours()+':'+el.getMinutes() 
  return el
})

var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  render: c => c(app),
  router: router
})