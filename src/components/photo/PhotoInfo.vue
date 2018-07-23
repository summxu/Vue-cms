<template>
  <div>
    <div class="top">
      <h1>{{imginfo.title}}</h1>
      <span class="fl">发表时间:{{gdate | dateDispose}}</span>
      <span class="fr">点击{{n()}}次</span>
    </div>
    <div class="content">
      <img :src="imginfo.img_url" alt="">
      {{imginfo.zhaiyao}}
      </div>
    <comment-box class="comment"></comment-box>
  </div>
</template>
<script>
import comment from '../subcomponent/Comment.vue'
export default{
  data(){
    return {
      id:'',
      imginfo:{}
    }
  },
  components:{
    "comment-box":comment
  },
  props:["gdate"],
  methods:{
    n() {
      return parseInt(Math.random() * 10 + 1);
    },
    getImginfo(id) {
      this.$http.get('../../data/getimginfo.json').then(result=>{
        if(result.body.status === 0){
          
          // console.log(result.body.message[0].id);
          // console.log(id);
          for (let index = 0; index < result.body.message.length; index++) {
            if (result.body.message[index].id == id) {
              console.log('ok');
              this.imginfo = result.body.message[index]
              console.log(this.imginfo);
            }
            
          }
          
          
            
            
          
          
          
          // for (let index = 1; index <= result.body.message.length; index++) {
          //   if (result.body.message[index].id === this.id)
          //     this.imginfo = result.body.message[index]
          //     console.log(this.imginfo);
          // }
        }else{
          Toast('获取失败了')
        }
      })
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getImginfo(this.id)
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
.content
  img 
    width 100% 
</style>
