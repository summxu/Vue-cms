import Router from 'vue-router'
//导入组件
import HomeContent from '../tabbar/HomeContent.vue'
import MemberContent from '../tabbar/MemberContent.vue'
import SearchContent from '../tabbar/SearchContent.vue'
import ShopcarContent from '../tabbar/ShopcarContent.vue'
var router = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContent },
    { path: '/member', component: MemberContent },
    { path: '/shopcar', component: ShopcarContent },
    { path: '/search', component: SearchContent }
  ],
  linkActiveClass: 'mui-active'
})

export default router