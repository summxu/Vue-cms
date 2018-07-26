<template>
  <div class="good-list">
    <router-link v-for="(item, index) in good" :key="index" :to="'/home/goodinfo/'+item.id" class="good-item">
      <img :src="item.img_url" alt="">
      <h1>{{item.title}}</h1>
      <div class="info">
        <p class="nprice">¥{{item.market_price}}</p>
        <p class="oprice">¥{{item.sell_price}}</p>
        <span class="fl">热卖中</span>
        <span class="fr">剩余{{item.stock_quantity}}件</span>
      </div>
    </router-link>
    <mt-button type="danger" size="large" @click="more" >加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      good:[],
      page:1
    }
  },
  methods:{
    getGood(page){
      this.$http.get('http://www.liulongbin.top:3005/api/getgoods?pageindex='+page).then(result=>{
        if (result.body.status === 0) {
          this.good = this.good.concat(result.body.message)
        }
      })
    },
    more(){
      this.getGood(this.page++)
    }
  },
  created() {
   this.getGood(1)
  },
}
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
