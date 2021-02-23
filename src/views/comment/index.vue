<template>
 <div class="commentBox" ref="commentBox" >
    <div>
  <score :delivery="commentList.delivery"
   :score="commentList.score"
    :packing="commentList.packing"
    :flavor="commentList.flavor"></score>
    <div class="tag-container">
      <tag :tag="commentList.label" :currentType="type" @change="change"></tag>
    </div>
  <list :list="commentList.rate"></list>
  </div>
 </div>
</template>

<script>
import Tag from './tag'
import List from './list'
import score from './score.vue'
import { getComment } from '@/api/comment'
import BScroll from "better-scroll";

export default {
components: { score, Tag, List },
 name:'commentIndex',
 data() {
   return{
     type: 1,
     commentList: {},
     commentScroll: null
   }
 },
 created() {
   this.getCommentData().then(()=>{
    this.$nextTick(() => {
      this.commentScroll = new BScroll(this.$refs.commentBox, {
          click:true,
          bounce:false
      })
    })
   })
  
 },

 methods: {
   async getCommentData(){
     const { data } = await getComment({ 
       id: this.$route.query.id,
       type: this.type
     })
     console.log(data)
     this.commentList = data
   },
   change(id) {
     this.type = id;
     this.getCommentData()
   }
 }
}
</script>

<style lang="scss" scoped>
.commentBox {
  height: calc(100vh - 44px);
}
.tag-container {
  border-top: 0.2rem solid #f4f4f4;
}
</style>