<template>
  <div>
    <ul class="cate-box">
      <li class="cate-list" v-for=" item in categoryList" :key="item.id">
        <img class="cate-img" :src="item.img" />
       <p class="cate-title">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCategroy } from '../../api/home'
// import axios from 'axios'
export default {
  name: 'category',
  data() {
   return {
     categoryList: []
   }
  },
  created() {
    this.leadCategroys()
  },
  methods: {
    async leadCategroys() {
      const { data } = await getCategroy()
       this.categoryList = data
      //  console.log(data)
    }
  }

}
</script>

<style lang="scss" scoped>
 .cate-box{
   display: flex;
   flex-wrap: wrap;
   .cate-list{
     width: 20%;
     text-align: center;
     padding-top: 0.3rem;
     font-size: 11px;
     .cate-img{
       width: 0.88rem;
       height: 0.88rem;
       margin-bottom: 0.1rem;
     }
   }
 }
</style>