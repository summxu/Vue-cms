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
        <div class="mui-card-header">{{goodinfo.title}}</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="by-h">
              <span>市场价：</span>
              <span style="text-decoration:line-through">￥{{goodinfo.market_price}}</span>
              <span>销售价：</span>
              <span style="color:red;font-size:20px">￥{{goodinfo.sell_price}}</span>
            </div>
            <div class="by-b">
              <span>购买数量：</span>
              <div class="mui-numbox" data-numbox-min="1" data-numbox-max="60">
                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <input class="mui-input-numbox" type="number" ref="count" value="1" />
                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
              </div>
            </div>
            <div class="by-f">
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button @click="addcar()" type="danger" size="small">加入购物车</mt-button>
            </div>
          </div>
        </div>
      </div>
      
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        >
          <div v-show="status" ref="ball" class="ball"></div>
        </transition>

    </div>
    
    <!-- 商品参数 -->
    <div class="goodi-f">
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>商品货号：{{goodinfo.goods_no}}</p>
            <p>库存情况：60件</p>
            <p>上架时间：{{goodinfo.add_time}}</p>
          </div>
        </div>
        <div class="mui-card-footer">
          <mt-button type="primary" @click="goGoodDesc()" size="large" plain>图文介绍</mt-button>
          <mt-button type="danger" @click="goGoodComment()" size="large" plain>商品评论</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.js'

export default {
  data() {
    return {
      status:false,
      count : 0,
      id:0,
      goodinfo:{}
    }
  },
  props:["gdate"],
  methods:{
    getGoodInfo(){
      this.$http.get('http://www.liulongbin.top:3005/api/goods/getinfo/'+this.id).then(result => {
        if (result.body.status === 0) {
          this.goodinfo = result.body.message[0]
          console.log(this.goodinfo);
        }
      })
    },
    goGoodDesc(){
      this.$router.push({path:'/home/gooddesc/'+this.$route.params.id})
      console.log(this);
    },
    goGoodComment(){
      this.$router.push({path:'/home/goodcomment/'+this.$route.params.id})
    },
    beforeEnter(el){
      
      el.style.transform ="translate(0px,0px)"

    },
    enter(el,done){
      
      const ballposition = this.$refs.ball.getBoundingClientRect();
      const badgeposition  = document.getElementById("badge").getBoundingClientRect();
      const xDist = badgeposition.left - ballposition.left;
      const yDist = badgeposition.top - ballposition.top;
      console.log(ballposition);
      console.log(badgeposition);
      console.log(this.$refs.ball.getBoundingClientRect());
      
      console.log(xDist);
      console.log(yDist);

      el.offsetWidth
      el.style.transform ='translate('+xDist+'px,'+yDist+'px)'
      el.style.transition = 'all .5s cubic-bezier(.66,-0.42,.99,.7)' 
      done()      
    },
    afterEnter(el){
      this.status = !this.status

    },
    addcar(){
      this.status = !this.status;
      // console.log(this.$refs);
      
      this.count = parseInt(this.$refs.count.value) 

      //添加到store仓库
      good = this.goodinfo
      good.count = this.count
      good.selected = true
      // console.log(good);
      
      this.$store.commit('addgood',good)
    }
  },
  mounted() {
    mui(".mui-numbox").numbox()
  },
  created() {
    this.id = this.$route.params.id
    console.log(this.id);
    this.getGoodInfo()
  },
}
</script>
<style lang="stylus" scoped>
.goodi
  // padding 10px
  .goodi-h .mui-card-content 
    .mui-card-content-inner
      height 240px
      text-align center
      img 
        height 100%
  .goodi-b
    position relative
    .ball 
      width 20px
      height 20px
      border-radius 50%
      background-color red
      position absolute
      z-index 99999
      // 300 150 620 240
      top 83px
      left 150px
      // transform translate(300px,150px)
    .mui-numbox
      width 120px
      height 25px
  .goodi-f
    .mui-card-footer
      display block
      button 
        margin 15px 0 

</style>