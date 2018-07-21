<template>
  <div class="app-content">
    <!-- 顶部 header -->
    <mt-header fixed title="2018年7月21日"></mt-header>
    <!-- 中间 router-view -->
    <transition appear mode="out-in">
      <router-view></router-view>    
    </transition>
    <!-- 底部 Tabbar -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>
<style lang="stylus" scoped>
.v-enter
  opacity 0
  transform translateX(100%)
.v-leave-to
  opacity 0
  transform translateX(-100%)
.v-enter-active,
.v-leave-active
  transition all .5s
.app-content
  padding-top 40px
  overflow hidden
</style>
