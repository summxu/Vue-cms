<template>
  <div>
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a v-for="(item, index) in category" :key="index" @click="getImages(item.id)" :class="['mui-control-item' , item.id === 1 ?'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html">
            {{item.sort}}
          </a>
        </div>
      </div>
    </div>
    <ul class="images">
      <router-link tag="li" v-for="(item, index) in images" :key="index" :to="'/home/photoinfo/'+item.id">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1>{{item.title}}</h1>
          <p>{{item.zhaiyao}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
  import mui from '../../lib/mui/js/mui.js'
  //初始话MUI滚动动画
export default {
  data() {
    return {
      category:[],
      images:[]
    }
  },
  methods:{
    getPhotoCategory(){
      this.$http.get('../../data/getimgcategory.json').then(result=>{
        if (result.body.status === 0) {
          result.body.message.unshift({id:1,sort:'全部'})
          this.category = result.body.message
        }else{
          Toast('获取失败了')
        }
      })
    },
    getImages(id) {
      console.log(id);
      this.images = []
      this.$http.get('../../data/getimages'+id+'.json').then(result=>{
        if(result.body.status === 0){
          this.images = result.body.message
          console.log(this.images);
        }else{
          Toast('获取失败了')
        }
      })
    },
  },
  created() {
    this.getPhotoCategory()
    this.getImages(1)
  },
  mounted() {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
}
</script>
<style lang="stylus" scoped>
// *
//   touch-action pan-x
//懒加载的样式
.images
  li
    position relative
    box-shadow: 0px 2px 10px #888888;
    background-color #ccc
    margin 10px 10px
    text-align center
    img[lazy=loading]
      width: 40px;
      height: 300px;
      margin: auto;
    img 
      width 100%
      vertical-align middle
    .info
      text-align left 
      position absolute
      overflow hidden
      bottom 0
      padding 10px
      height 150px
      width 100%
      background-color rgba(0,0,0,0.3)
      border-radius 5px 5px 0
      text-overflow ellipsis

      h1
        font-size 16px
        color #fff
      p
        font-size 14px
        color #fff
        text-overflow ellipsis



</style>
