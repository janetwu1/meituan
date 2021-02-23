<template>
  <div class="container">
    <div class="header" @click="$router.push('/')">
      <span class="iconfont icon-fanhui"></span>
    </div>
    <div class="seller-box">
       <div class="img-box">
         <img :src="sheller.img" />
       </div>
       <div class="info-box">
          <div class="time">{{ sheller.minute }}分钟 {{sheller.distance}}</div>
          <div class="notice">{{sheller.notice}}</div>
          <div>{{sheller.full}}</div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sheller-header',
  props: ["sheller"]
};
</script>

<style lang="scss" scoped>
.container{
  background: #2e2f3b;
  .header{
   height: 1rem;
   line-height: 1rem;
   color:#fff ;
   padding-left: 0.2rem;
   text-align: left;
  }
  .seller-box{
    display: flex;
    padding: 0.2rem;
    .img-box{
      width: 1.7rem;
       flex: 0 0 1.7rem;
       margin-right: 0.2rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .info-box{
      color: #fff;
      flex: 1;
      width: 0;
      font-size: 12px;
      text-align: left;
      .time{
        height: 0.32rem;
        line-height: 0.32rem;
        margin-bottom: 0.1rem;
      }
      .notice{
          height: 0.32rem;
        line-height: 0.32rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 0.2rem;
      }
    }
  }
}
</style>
