<template>
<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
  <ul class="list-container">
    <li class="shop-list" v-for="item in shopList" :key="item.id" @click="goDetail(item.id)">
      <div class="img-box">
        <img :src="item.img" />
      </div>
      <div class="info-box">
         <div class="title">{{ item .name }}</div>
          <div class="rate-box">
            <div>
            <span class="rate"><star :score="item.score"></star>{{ item.score }}分</span>
            <span>月销{{ item.number }}</span>
            </div>
            <div>
                  <span>{{ item.minute}}分钟</span>
            <span class="left-line">{{ item.distance }}KM</span>
            </div>
          </div>
          <div class="distributton-box">
            <span>起送 {{ item.per_capita }}</span>
            <span class="left-line">配送 {{ item.fee }}</span>
            <span class="left-line">人均 {{ item.price }}</span>
          </div>
      </div>
    </li>
  </ul>
</van-list>
</template>

<script>
import star from '../../components/star/index'
import { getStore } from '@/api/home'
export default {
  name: 'list',
  components:{
    star
  },
  data() {
    return {
      current: 0, // 当前页码
      size: 10, // 分页大小
      shopList: [],
      loading: true,
      finished:false,
      total:0
    }
  },

  created() {
    this.current=1
    this.getDada()
  },
  methods: {
     onLoad(){
       this.loading=true
    this.getDada().then(res=>{
      console.log(res)
      this.shopList=this.shopList.concat(res.shopList)
      if(this.shopList.length>=res.total){
        this.finished=true
      } else{
        this.finished=false
        this.current++
      }
      this.loading=false
    })
  },
   async getDada () {
     const { data } = await getStore({
       current: this.current,
       size: this.size
     })
     console.log(data)
    //  this.shopList2 = data.list
    this.shopList= data.list
    // this.loading = false
    var result={
      total: data.total,
      current: this.current,
      shopList: this.shopList
    }
   return result
   },
   goDetail(id){
     this.$router.push({path:"/detail", query: {id}})
   }
  }
  
}
</script>

<style lang="scss" scoped>
 .list-container{
   padding: 0 0.2rem;
   .shop-list{
     margin: 0.2rem 0 0.5rem 0;
     display: flex;
   }
   .img-box{
     width: 1.52rem;
     height: 1.14rem;
     margin-right: 0.16rem;
     img{
       width: 100%;
       height: 100%;
     }
   }
   .info-box{
     flex: 1;
     .title{
    font-size:0.32rem;
     color: #333;
     font-weight: 500;
     line-height: 1.4;
     text-align: left;
     }
   }
   .rate-box, 
   .distributton-box{
     display: flex;
     color: #333;
     line-height: 1.4;
     font-size: 11px;
     .rate{
       margin-right: 0.2rem;
     }
     .left-line::before{
       content: "";
       display:inline-block ;
       width:1px;
       height: 6px;
       background: #ccc;
          margin: 0 3px;
     }
   }
   .rate-box {
        justify-content: space-between;
      }
 }
</style>