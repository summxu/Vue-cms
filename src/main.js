import Vue from 'vue'
//引入组件
import app from './App.vue'
//导入路由
import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)
//按需导入MintUi
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//按需导入MintUi js
import { Toast } from 'mint-ui'

//导入MUI
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  render: c => c(app),
  router: router
})