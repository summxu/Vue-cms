<template>
  <div class="good-list">
    <router-link to="/home/goodinfo/1" class="good-item">
      <img src="../../images/mp.jpg" alt="">
      <h1>Galaxy S 轻奢版</h1>
      <div class="info">
        <p class="nprice">¥2055</p>
        <p class="oprice">¥3088</p>
        <span class="fl">热卖中</span>
        <span class="fr">剩余60件</span>
      </div>
    </router-link>
    <router-link to="/home/goodinfo/1" class="good-item">
      <img src="../../images/s9.jpg" alt="">
      <h1>HUAWEI 麦芒6 4GB+64GB 全网通版（流光金）</h1>
      <div class="info">
        <p class="nprice">¥2055</p>
        <p class="oprice">¥3088</p>
        <span class="fl">热卖中</span>
        <span class="fr">剩余60件</span>
      </div>
    </router-link>
    <router-link to="/home/goodinfo/1" class="good-item">
      <img src="../../images/xm.jpg" alt="">
      <h1>小红米6A</h1>
      <div class="info">
        <p class="nprice">¥2055</p>
        <p class="oprice">¥3088</p>
        <span class="fl">热卖中</span>
        <span class="fr">剩余60件</span>
      </div>
    </router-link>
    <mt-button type="danger" size="large" >加载更多</mt-button>
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
    margin 6px 0
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
