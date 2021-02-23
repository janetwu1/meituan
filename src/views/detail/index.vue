<!-- 详情页 -->
<template>
<div class="scrollBox">
  <div>
    <sheller-header :sheller="sheller"></sheller-header>
    <van-tabs v-model="active" sticky animated color="#f8d147">
    <van-tab title="菜单"><order></order></van-tab>
    <van-tab title="评价"><comment></comment></van-tab>
    <van-tab title="商家"><seller :seller="sheller"></seller></van-tab>
  </van-tabs>
  </div>
  <cart :sheller="sheller"></cart>
</div>
</template>

<script>
import { getStoreById } from '@/api/detail.js'
import shellerHeader from './sheller-header.vue'
import order from './order'
import BScroll from 'better-scroll'
import Cart from './cart.vue'
import comment from '../comment/index'
import seller from '../seller/index'

export default {
  name: 'detailIndex',
  components: {
    shellerHeader,
    order, 
    Cart,
    comment,
    seller },
  data() {
  return {
     sheller: [],
     active: 0,
     scrollBox: null
  }
},
//生命周期 - 创建完成（访问当前this实例）
created() {
 this.getStoreMsg()
},
// 生命周期 - 挂载完成
mounted(){
  this.scrollBox = new BScroll('.scrollBox', {
   bounce: false,
      click: true
  })
},
methods: {
  async getStoreMsg() {
    // 请求id = this.
    const { data } = await getStoreById({id: this.$route.query.id})
    // console.log(data)
    this.sheller = data
  }
}

}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
.scrollBox{
  height: 100vh;
  // overflow: hidden;
}

</style>