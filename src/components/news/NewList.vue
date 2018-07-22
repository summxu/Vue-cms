<template>
  <div>
    <ul class="mui-table-view">
      <li v-for="(item, index) in news" :key="index" class="mui-table-view-cell mui-media">
        <router-link :to="'/home/newinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img">
          <div class="mui-media-body">
            {{item.title}}
            <p class='mui-ellipsis'>{{item.subtitle}}</p>
            <span class="fl">发表时间:{{gdate | dateDispose}}</span>
            <span class="fr">点击:{{n()}}次</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import Data from "../../data/HomeData.js";
export default {
  data() {
    return {
      news: Data.news,
    };
  },
  methods: {
    n() {
      console.log(123);
      return parseInt(Math.random() * 10 + 1);
    }
  },
  props:["gdate"]
};
</script>
<style lang="stylus" scoped>
.mui-table-view {
  .mui-pull-left {
    max-width: 65px;
    height: 65px;
  }

  .mui-media-body {
    span {
      color: #9A0AB9;
      font-size: 12px;
    }
  }
}
</style>
