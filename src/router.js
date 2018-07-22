import Router from 'vue-router'
//导入组件
import HomeContent from './components/tabbar/HomeContent.vue'
import MemberContent from './components/tabbar/MemberContent.vue'
import SearchContent from './components/tabbar/SearchContent.vue'
import ShopcarContent from './components/tabbar/ShopcarContent.vue'
import NewList from './components/news/NewList.vue'
import NewInfo from './components/news/NewInfo.vue'
var router = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContent },
    { path: '/member', component: MemberContent },
    { path: '/shopcar', component: ShopcarContent },
    { path: '/search', component: SearchContent },
    { path: '/home/newlist', component: NewList },
    { path: '/home/newinfo/:id', component: NewInfo }
  ],
  linkActiveClass: 'mui-active'
})

export default router