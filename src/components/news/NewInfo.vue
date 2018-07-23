<template>
  <div>
    <div class="top">
      <h1>{{title.title}}</h1>
      <span class="fl">发表时间:{{gdate | dateDispose}}</span>
      <span class="fr">点击{{n()}}次</span>
    </div>
    <div class="content">{{info.info}}</div>
    <comment-box class="comment"></comment-box>
  </div>
</template>
<script>
import Title from '../../data/HomeData.js'
import Info from '../../data/NewInfoData.js'
import comment from '../subcomponent/Comment.vue'
  export default{
    components:{
      "comment-box":comment
    },
    methods:{
      n() {
        console.log(123);
        return parseInt(Math.random() * 10 + 1);
      }
    },
    props:["gdate"],
    data() {
      return {
        title: {},
        info: {},
      };
    },
    created() {
      for (let index = 0; index < Title.news.length; index++) {
        if (Title.news[index].id == this.$route.params.id) {
          this.title = Title.news[index];
        } 
      }
      for (let index = 0; index < Info.news.length; index++) {
        if (Info.news[index].id == this.$route.params.id) {
          this.info = Info.news[index];
        } 
      }
    },
  }
</script>
<style lang="stylus" scoped>
.top
  height 100px
  border-bottom 1px solid #cccccc
  padding 20px 5px
  h1
    text-align center
    font-size 18px
    color red
    line-height 42px
    font-weight 700
  span 
    font-size 14px
    color skyblue 
</style>
