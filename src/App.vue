<template>
  <div class="app-content">
    <!-- 顶部 header -->
    <mt-header style="z-index: 999 " fixed title="2018年7月21日"></mt-header>
    <!-- 中间 router-view -->
    <transition appear mode="out-in">
      <router-view :gdate="date"></router-view>    
    </transition>
    <!-- 底部 Tabbar -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-cx" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-cx" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-cx" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-cx" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: new Date()
    };
  }
};
</script>
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
  padding-bottom 50px
  overflow hidden

// 改类名解决rabbar类名冲突
.mui-bar-tab .mui-tab-item-cx {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-active-cx {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-cx .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-cx .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>
