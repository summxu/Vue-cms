import Vue from 'vue'
import Resource from 'vue-resource'
//引入组件
import app from './App.vue'
//导入路由
import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)
Vue.use(Resource)
//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//初始化loclaStorage

var car = JSON.parse(localStorage.getItem('car') || '[]')

//定义vuex stort
var store = new Vuex.Store({
  state:{
    car:car
  },
  mutations:{
    addgood(state,good){
      flag = false
      state.car.some(item => {
        if (item.id === good.id) {
          item.count += parseInt(good.count)
          flag = true
          return true
        }
      })
      if(!flag){
        state.car.push(good)
      }
      // console.log(state.car);
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    delgood(state,goodid){
      for (let index = 0; index < state.car.length; index++) {
        if (state.car[index].id === goodid){
          state.car.splice(index,1)
          console.log('delOK');
          localStorage.setItem('car',JSON.stringify(state.car))
        }
      }
    },
    updateSelected(state,info){
      state.car.some(item => {
        if (item.id === info.id) {
          item.selected = info.selected
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters:{
    getSum(state){
      var sum = 0
      state.car.forEach(item => {
        if (item.selected) {
          sum += item.count
        }
      })
      return sum
    },
    getLenght(state){
      var sum = 0
      state.car.forEach(item => {
        if (item.selected) {
          sum ++
        }
      })
      return sum
    },
    //返回所有的数据对象
    getNum(state){
      obj = {}
      state.car.forEach(item => {
        // 键：定义对象的id = 值：对象的count
        obj[item.id] = item.count  
      })
      return obj
    },
    getSelected(state){
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      });
      // console.log(o);
      
      return o
    },
    getPriceSum(state){
      var sum = 0
      state.car.forEach(item => {
        if (item.selected) {   
          sum += item.sell_price
        }
      })
      return sum
    },
    getCarGoods(state){
      var cargoods = ''
      state.car.forEach(item =>{
        cargoods += item.id+','
      })
      return cargoods.substring(0,cargoods.length-1)
    }
  }
})
//配置 vueRespurce 的全局请求 地址
// Vue.http.options.root = 'http://www.liulongbin.top:3005';
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
  router: router,
  store:store
})