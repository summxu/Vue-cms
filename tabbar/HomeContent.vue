<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe class="mt-swipe" :auto="4000">
      <mt-swipe-item v-for="(item, index) in lunbo" :key="index">
        <a :href="item.url">
          <img :src="item.img" alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <!-- menu nav  -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../src/images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../src/images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../src/images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../src/images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../src/images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../src/images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
    </ul> 
  </div>
</template>
<script>
import Data from "../src/data/HomeData.js";
export default {
  data() {
    return {
      lunbo: Data.lunbotu
    };
  }
};
</script>
<style lang="stylus" scoped>
.mt-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: skyblue;
    }
    &:nth-child(2) {
      background-color: red;
    }
    &:nth-child(3) {
      background-color: yellow;
    }
    img {
      width 100%
      height 100%
    }
  }
}
.mui-grid-9
  background-color #fff
  img 
    width 60px
    height 60px
</style>
