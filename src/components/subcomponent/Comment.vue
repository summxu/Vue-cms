<template>
  <div class="comment">
    <h1>发表评论</h1>
    <hr>
    <textarea placeholder="请输入要评论的内容" cols="30" rows="5" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <ul v-for="(item, index) in say" :key="index" class="comment-content">
      <li class="c-title">
        第{{index+1}}楼&nbsp;&nbsp;用户:{{item.user === '' ? '匿名用户':item.user}}&nbsp;&nbsp;发表时间:{{date | dateDispose}}
      </li>
      <li class="c-say">
        {{item.say === '' ? '此用户很懒,什么都不说!':item.say}}
      </li>
    </ul>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>
<script>
import Says from "../../data/CommentData.js";
export default {
  data() {
    return {
      say:Says.says,
      date: new Date()
    };
  },
  methods: {
    
  }
};
</script>
<style lang="stylus" scoped>
.comment 
  h1
    display block
    // border-bottom 1px solid #ccc
    font-size 20
  .c-title
    font-size 14px
    background-color #eee
    height 20px
    padding 0 10px
  .c-say
    background-color #fff
    padding 0 20px
    line-height 30px
  ul
    // margin-top 5px 
</style>
