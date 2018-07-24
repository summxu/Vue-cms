<template>
  <div class="goodi">
    <!-- 轮播导航 -->
    <div class="goodi-h">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <!-- 轮播图 -->
            <mt-swipe class="mt-swipe" :auto="4000">
              <mt-swipe-item>
                <a href="http://www.dogxu.cn">
                  <img src="../../images/xm.jpg" alt="">
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="http://www.dogxu.cn">
                  <img src="../../images/mp.jpg" alt="">
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="http://www.dogxu.cn">
                  <img src="../../images/s9.jpg" alt="">
                </a>
              </mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 购买选项 -->
    <div class="goodi-b">
      <div class="mui-card">
        <div class="mui-card-header">小米（Mi）小米NOTE 16G双网通</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="by-h">
              <span>市场价：</span>
              <span>￥2699</span>
              <span>销售价：</span>
              <span>￥2199</span>
            </div>
            <div class="by-b">
              <span>购买数量：</span>
              <div  class="mui-numbox">
                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <input class="mui-input-numbox" type="number" />
                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
              </div>
            </div>
            <div class="by-f">
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button @click="status = !status" type="danger" size="small">加入购物车</mt-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 商品参数 -->
    <div class="goodi-f">
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>商品货号：SD289132123</p>
            <p>库存情况：60件</p>
            <p>上架时间：{{gdate}}</p>
          </div>
        </div>
        <div class="mui-card-footer">
          <mt-button type="primary" @click="goGoodDesc()" size="large" plain>图文介绍</mt-button>
          <mt-button type="danger" @click="goGoodComment()" size="large" plain>商品评论</mt-button>
        </div>
      </div>
    </div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      
    >
    <div v-show="status" class="ball"></div>
    </transition>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      status:true
    }
  },
  props:["gdate"],
  methods:{
    goGoodDesc(){
      this.$router.push({path:'/home/gooddesc/'+this.$route.params.id})
      console.log(this);
    },
    goGoodComment(){
      this.$router.push({path:'/home/goodcomment/'+this.$route.params.id})
    },
    beforeEnter(el){
      el.style.transform ="translate(0,0)"
    },
    enter(el,done){
      el.offsetWidth
      el.style.transform ="translate(620px,240px)"
      el.style.transition = 'all 1s ' 
      done()      
    },
    afterEnter(el){
      status = !status
    }
  }
}
</script>
<style lang="stylus" scoped>
.ball 
  width 20px
  height 20px
  border-radius 50%
  background-color red
  position fixed
  z-index 99999
  // 300 150 620 240
  top 300px
  left 150px
  // transform translate(300px,150px)

.goodi
  // padding 10px
  .goodi-h .mui-card-content 
    .mui-card-content-inner
      height 240px
      text-align center
      img 
        height 100%
  .goodi-b
    .by-h:nth-child(2)
      font-size 16px
      text-decoration line-through
    .by-h:nth-child(4)
      color red
      font-size 18px
    .mui-numbox
      width 120px
      height 25px
  .goodi-f
    .mui-card-footer
      display block
      button 
        margin 15px 0 

</style>