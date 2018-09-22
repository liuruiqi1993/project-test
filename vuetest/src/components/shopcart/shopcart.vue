<template>
<div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight':totalCount>0}">
            <div class="icon-shopping_cart"></div>
          </div>
          <div class="num" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'highlight':totalPrice>0}">￥{{totalPrice}}</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="{'highlight':totalPrice>=minPrice}">{{payDesc}}</div>
      </div>
    </div>
</div>
</template>
<script type="text/ecmascript-6">
/* eslint-disable */
import selectFoods from "../cartcontrol/cartcontrol.vue"
  export default {
    props:{
      selectFoods: {
        type: Array,
        default(){
          return [];
        }
      },
      deliveryPrice:{
        type: Number
      },
      minPrice:{
        type: Number
      }
    },
    computed:{
      totalPrice(){
        let total=0
        this.selectFoods.forEach((food)=>{
          total+=food.price * food.count
        })
        return total;
      },
      totalCount(){
        let count=0
        this.selectFoods.forEach((food)=>{
          count += food.count
        })
        return count;
      },
      payDesc(){
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}元起送`
        }else if (this.totalPrice<this.minPrice){
          let diff = this.minPrice-this.totalPrice
          return `还差￥${diff}元起送`
        }else{
          return "去结算"
        }
      }
    }
  }
</script>
<style rel="stylesheet/stylus" lang="stylus">
.shopcart
  position: fixed
  width: 100%
  height: 46px
  z-index: 50
  bottom: 0
  left: 0
  .content
    display: flex
    background-color: #141d27
    .content-left
      font-size: 0
      flex: 1
      vertical-align: top
      line-height: 48px
      .logo-wrapper
        height: 56px
        width: 56px
        display: inline-block
        box-sizing: border-box
        padding: 6px;
        position: relative
        top: -12px
        margin: 0 12px
        border-radius: 50%
        background-color: #141d27;
        .logo
          width: 100%
          height: 100%
          border-radius: 50%
          background-color: rgba(255,255,255,0.2)
          text-align: center
          .icon-shopping_cart
            line-height: 44px
            font-size: 24px
            color: rgba(255,255,255,0.4)
          &.highlight
            background: rgb(0,160,220)
            .icon-shopping_cart
              color: #fff
        .num
          position: absolute
          top: 0
          right: 0
          width: 24px
          height: 16px
          line-height: 16px
          text-align: center
          border-radius: 16px
          font-size: 9px
          font-weight: 700
          color: #fff
          background : rgb(240,20,20)
          box-shadow: 0 4px 8px rgba(0,0,0,.4)
      .price
        vertical-align: top
        display: inline-block
        font-size: 16px
        color: rgba(255,255,255,0.4)
        padding-right: 12px
        margin: 10px 0
        line-height: 28px
        box-sizing: border-box
        font-weight: 700px
        border-right: 1px solid rgba(255,255,255,0.1)
        &.highlight
          color: #FFF
      .desc
        vertical-align: top
        display: inline-block
        font-size: 12px
        color: rgba(255,255,255,0.4)
        padding-left: 12px
        box-sizing: border-box
    .content-right
      flex: 0 0 105px
      width: 105px
      .pay
        font-size: 12px
        text-align: center
        line-height: 48px
        background-color: rgba(255,255,255,0.2)
        font-weight: 700
        color: rgba(255,255,255,0.4)
        &.highlight
          background-color: green;
          color: #FFF;
</style>
