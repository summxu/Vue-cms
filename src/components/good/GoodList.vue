<template>
  <div class="good-list">
    <div class="good-item">
      <img src="../../images/news/shuijiao.jpg" alt="">
      <h1>小i米</h1>
      <div class="info">
        <p class="nprice">¥2055</p>
        <p class="oprice">¥3088</p>
        <span class="fl">热卖中</span>
        <span class="fr">剩余60件</span>
      </div>
    </div>
    <div class="good-item">
      <img src="../../images/news/shuijiao.jpg" alt="">
      <h1>小i米7小米mete8高配跳楼岁啊不买</h1>
      <div class="info">
        <p class="nprice">¥2055</p>
        <p class="oprice">¥3088</p>
        <span class="fl">热卖中</span>
        <span class="fr">剩余60件</span>
      </div>
    </div>
    <div class="good-item">
      <img src="../../images/news/shuijiao.jpg" alt="">
      <h1>小i米7小米mete8高配跳楼岁啊不买</h1>
      <div class="info">
        <p class="nprice">¥2055</p>
        <p class="oprice">¥3088</p>
        <span class="fl">热卖中</span>
        <span class="fr">剩余60件</span>
      </div>
    </div>
    
  </div>
</template>
<script>
  
</script>
<style lang="stylus" scoped>
.good-list
  display flex
  flex-wrap wrap
  justify-content space-between
  padding 8px

  .good-item
    width 49%
    box-shadow: 0px 2px 10px #888888;
    margin-top 6px
    display flex
    flex-direction column
    justify-content space-between
    .info:after
      content: "";
      display:block;
      height:0;
      clear:both;
      visibility:hidden;
    .info
      background-color #eee
      padding 10px
      margin 2px
      .nprice
        float left
        padding-right 10px
        color red
        font-weight 700
      .oprice
        text-decoration line-through
        font-size 12px
    img 
      width 100%
    h1
      font-size 14px
    span
      font-size 12px
      color #ccc
</style>
