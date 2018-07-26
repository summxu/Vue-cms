<template>
  <div>
    <div v-for="(item, index) in cargoods" :key="index" class="shop-item">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="switch">
              <mt-switch 
              @change="selectedChange(item.id,$store.getters.getSelected[item.id])"
              v-model="$store.getters.getSelected[item.id]"
              ></mt-switch>
            </div>
            
            <img :src="item.thumb_path" alt="">
            <div class="info">
              <h2>{{item.title}}</h2>
              <span style="color:red">￥{{item.sell_price}}</span>
              <div class="mui-numbox" data-numbox-min="1" data-numbox-max="60">
                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <input class="mui-input-numbox" type="number" ref="num" :value="$store.getters.getNum[item.id]" />
                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
              </div>
            <a @click.prevent="remove(item.id,index)" href="">删除</a>
            </div>
          </div>
        </div>
      </div>      
    </div>
    <div class="pay">
      <p>总计（不含运费）</p>
      <p>已勾选商品<span style="color:red; fontSize:18px">{{$store.getters.getLenght}}</span>件,总价：￥<span style="color:red; fontSize:18px">{{this.$store.getters.getPriceSum}}</span></p>
      <mt-button class="btn-pay" type="danger">去结算</mt-button>
    </div>
    <p>{{$store.getters.getSelected}}</p>
  </div>  
</template>
<script>
import mui from '../../lib/mui/js/mui.js'
export default {
  data(){
    return {
      status:true,
      cargoods:[]
    }
  },
  mounted() {
    mui(".mui-numbox").numbox()
    mui('.mui-switch')['switch']()

    // var isActive = document.getElementById("mySwitch").classList.contains("mui-active");
    // if(isActive){
    //   status = true
    //   console.log("打开状态");
    // }else{
    //   status = false
    //   console.log("关闭状态");  
    // }
  },
  created() {
    this.$http.get('http://www.liulongbin.top:3005/api/goods/getshopcarlist/'+this.$store.getters.getCarGoods).then(result =>{
      if (result.body.status === 0) {
        this.cargoods = result.body.message
      }
      // console.log(this.cargoods);
      
    })
  },
  methods:{
    remove(id,index){
      this.cargoods.splice(index,1)
      this.$store.commit('delgood',id)
    },
    selectedChange(id,status){
      this.$store.commit('updateSelected',{'id':id,'selected':status})
    }
  }
}
</script>
<style lang="stylus" scoped>
.shop-item
  .mui-card-content-inner
    display flex
    height 88px
    padding 5px
    .mui-switch
      display inline-block
    .switch
      margin-top 21px
    img 
      // float left
      height 100%
      margin 0 10px
      display inline-block
      vertical-align top
    .info
      display flex
      flex-direction column
      justify-content space-between
      display inline-block
      // height 88px

      h2
        font-size 12px
      .mui-numbox
        height 28px
        width 119px
.pay
  margin 9px
  // border 1px solid #ccc
  box-shadow 1px 1px 1px rgba(0,0,0,.3)
  position relative
  p 
    color #cccccc
  .btn-pay
    position absolute
    bottom 11px
    right 20px

</style>
