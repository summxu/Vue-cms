import Router from 'vue-router'
//导入组件
import HomeContent from './components/tabbar/HomeContent.vue'
import MemberContent from './components/tabbar/MemberContent.vue'
import SearchContent from './components/tabbar/SearchContent.vue'
import ShopcarContent from './components/tabbar/ShopcarContent.vue'
import NewList from './components/news/NewList.vue'
import NewInfo from './components/news/NewInfo.vue'
import PhotoList from './components/photo/PhotoList.vue'
import PhotoInfo from './components/photo/PhotoInfo.vue'
import GoodList from './components/good/GoodList.vue'
import GoodInfo from './components/good/GoodInfo.vue'
import GoodDesc from './components/good/GoodDesc.vue'
import GoodComment from './components/good/GoodComment.vue'
var router = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContent },
    { path: '/member', component: MemberContent },
    { path: '/shopcar', component: ShopcarContent },
    { path: '/search', component: SearchContent },
    { path: '/home/newlist', component: NewList },
    { path: '/home/newinfo/:id', component: NewInfo },
    { path: '/home/pohotolist', component: PhotoList },
    { path: '/home/photoinfo/:id', component: PhotoInfo },
    { path: '/home/goodlist', component: GoodList },
    { path: '/home/goodinfo/:id', component: GoodInfo },
    { path: '/home/goodcomment/:id', component: GoodComment },
    { path: '/home/gooddesc/:id', component: GoodDesc }
  ],
  linkActiveClass: 'mui-active-cx'
})

export default router