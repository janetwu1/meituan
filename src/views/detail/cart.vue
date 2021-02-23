<template>
  <div class="cart-container">
    <div class="cart-box">
      <div class="cart-icon"
      :class="{'active': total}">
       <span class="iconfont icon-gouwuche1"></span>
       <span class="num" v-show="total">{{ total }}</span>
      
      </div>
      <div class="cart-price"
      :class="{'active': total}">
        <div class="price">￥{{totalPrice}}</div>
        <div class="deliver">另需配送费{{ sheller.fee }}</div>
      </div>
      <div class="cart-buy"
      :class="{'active': totalPrice>sheller.price}"
      >{{buyDesc}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import addCart from "@/components/add-cart"

export default {
  name: 'cart',
  props: ['sheller'],
  computed: {
    ...mapGetters("product", ["totalPrice", "total","selectList"]),
    // ...mapState("ball", ["ballList"]),
    buyDesc() {
      if (this.totalPrice == 0) {
        return `￥${this.sheller.price}元起送`;
      } else if (this.totalPrice < this.sheller.price) {
        return `还差￥${this.sheller.price - this.totalPrice}元起送`;
      } else {
        return "去结算";
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.cart-container{
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  background: #3b3b3b;
  width: 100%;
  .cart-box{
    display: flex;
    .cart-icon{
      width: 50px;
      height: 50px;
      position: absolute;
      left: 10px;
      top: -10px;
      background: #565656;
      border-radius: 50%;
      line-height: 50px;
      .icon-gouwuche1{
        font-size: 30px;
         color: #fff;
      }
      &.active{
        background: #f8c74e;
        .icon-gouwuche1{
          color: #333;
        }
      }
      .num{
        position: absolute;
        top: 0;
        right: 0;
        width: 30px;
        height: 30px;
        text-align: center;
        background: #fb4e44;
        color: #fff;
        border-radius: 50%;
       transform: scale(0.5) translate(50%, -50%);
        line-height: 30px;
        font-size: 11px;
      }
    }
    .cart-price{
      padding-left: 70px;
      flex: 1;
      color: #999;
      text-align: left;
      .price{
        display: none;
      }
      .deliver{
        line-height: 50px;
        font-size: 14px;
      }
      &.active{
        .price{
          font-size: 24px;
          line-height: 33px;
          color: #fff;
          display: block;
        }
        .deliver{
          font-size: 11px;
          line-height: 16px;
        }
      }
    }
    .cart-buy{
      width: 108px;
      color: #999;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      line-height: 50px;
      &.active{
        background: #f8c74e;
        color: #333;
        font-size: 18px;
        font-weight: normal;
      }
    }
  }
}
</style>