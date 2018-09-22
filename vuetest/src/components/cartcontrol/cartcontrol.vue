<template>
<div class="cartcontrol">
  <transition name="fade" mode="out-in">
    <div class="cart-decrease icon-remove_circle_outline" @click="decreseCart" v-show="food.count>0"></div>
  </transition>
    <div class="cart-count fade" v-show="food.count>0" :key="2">{{food.count}}</div>
  <div class="cart-add icon-add_circle" @click="addCart"></div>
</div>
</template>
<script type="text/ecmascript-6">
/* eslint-disable */
import Vue from 'vue'
	export default {
    props:{
      food:{
        type:Object
      }
    },
    data(){
      return{
        "count":this.food.count,
      }
    },
    created(){
    },
    methods:{
      addCart(event){
        if(!event._constructed){
          return;
        }
        if(!this.food.count){
          Vue.set(this.food,'count',1)
        }else{
          this.food.count++;
        }
      },
      decreseCart(event){
        if(!event._constructed){
          return;
        }
        this.food.count--;
      }
    }
  }
</script>
<style rel="stylesheet/stylus" lang="stylus">
.cartcontrol
  font-size: 0
  box-sizing border-box
  .cart-decrease, .cart-add
    display: inline-block
    width: 24px
    height: 24px
    font-size: 24px
    line-height: 24px
    padding: 6px
    color: rgb(0,160,220)
    &.fade-enter
      transform: translateX(30px) rotate(720deg)
      opacity: 0
    &.fade-enter-to
      transform: translateX(0px) rotate(0deg)
      transition: all .5s
      opacity: 1
    &.fade-leave-active
      transform: translateX(30px) rotate(720deg)
      transition: all .5s
      opacity: 0
  .cart-count
    vertical-align top
    width: 12px
    text-align: center
    display: inline-block
    color: rgb(147,153,159);
    font-size: 10px
    line-height: 36px
</style>
