<template>
  <div class="goods">
    <div class="menu-wapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" :key="item.id" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
          <span class="text border-1px"><span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span> {{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wapper" ref="foodWrapper">
      <ul>
        <li v-for="item in goods" :key="item.id" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" :key="food.id" class="food-item border-1px">
              <div class="icon">
                <img width="57px" :src="food.icon">
              </div>
              <div class="content">
                <div class="name">{{food.name}}</div>
                <div class="desc">{{food.description}}</div>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥<b>{{food.price}}</b></span>
                  <span class="old" v-show="food.oldPrice">￥<b>{{food.oldPrice}}</b></span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
  </div>
</template>

<script type="text/ecmascript-6">
/* eslint-disable */
import BScroll from 'better-scroll'
import cartcontrol from '../cartcontrol/cartcontrol.vue'
import shopcart from '../shopcart/shopcart.vue'

const ERR_OK = 0
  export default{
    props:{
      seller:{
        type: Object
      }
    },
    data(){
      return{
        goods: [],
        listHeight:[],
        scrollY: 0
      }
    },
    computed: {
      currentIndex(){
        for(let i = 0; i < this.listHeight.length; i++){
          let height1 = this.listHeight[i]
          let height2 = this.listHeight[i+1]
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
            return i
          }
        }
        return 0;
      },
      selectFoods(){
        let foods = [];
        this.goods.forEach((good)=>{
          good.foods.forEach((food)=>{
            if(food.count){
              foods.push(food);
            }
          })
        })
        return foods
      }
    },
    created(){
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      this.$http.get('/goods').then((response)=>{
        response = response.body
        if(response.errno===ERR_OK){
          this.goods=response.data
          this.$nextTick(() => {
            this._initScroll()
            this._calculateHeight()
          })
        }
      })
    },
    /*updated(){
      this._calculateHeight()
    },*/
    methods: {
      selectMenu(index, event){
        let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook')
        this.foodScroll.scrollToElement(foodList[index],500)
      },
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {click:true})
        this.foodScroll = new BScroll(this.$refs.foodWrapper, {probeType: 3,click:true})
        this.foodScroll.on('scroll',(pos) =>{
          this.scrollY = Math.abs(Math.round(pos.y))
        })
      },
      _calculateHeight() {
        let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook')
        if(this.listHeight.length<foodList.length){
          let height = 0;
          this.listHeight.push(height);
          for(let i = 0; i < foodList.length; i++){
            let item = foodList[i];
            height += item.clientHeight
            this.listHeight.push(height);
          }
        }
      }
    },
    components: {
      shopcart,
      cartcontrol
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus">
  @import '../stylus/mixin.styl'
  .goods
    display: flex
    position: absolute
    width: 100%
    top: 174px
    bottom: 46px
    overflow: hidden
    .menu-wapper
      flex: 0 0 80px //加了这一行手机显示才正确
      width: 80px
      background-color: #f3f5f7
      .menu-item
        display: table
        padding: 0 12px
        height: 54px
        line-height: 14px
        &.current
          background-color: #fff;
          position relative
          margin-top -1px
          font-weight: 700
          .text
            border-none()
        .text
          width: 56px
          font-size: 12px
          display: table-cell
          vertical-align: middle
          border-1px(rgba(7,17,27,0.1))
          .icon
            display: inline-block
            width: 12px
            height: 12px
            vertical-align: top
            background-size: 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_3')
            &.discount
              bg-image('discount_3')
            &.guarantee
              bg-image('guarantee_3')
            &.invoice
              bg-image('invoice_3')
            &.special
              bg-image('special_3')
    .foods-wapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147,153,159)
        background-color: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7,17,27,0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        /*.icon*/
        .content
          margin-left: 10px
          width: 100%
          position: relative
          .name
            font-size: 14px
            color: rgb(7,17,27)
            line-height: 14px
            margin-top: 2px
          .desc
            margin: 8px 0
            font-size: 10px
            color: rgb(147,153,159)
            line-height: 14px
          .extra
            margin-bottom: 8px
            font-size: 10px
            color: rgb(147,153,159)
            line-height: 10px
            .count
              margin-right: 12px
          .price
            line-height: 14px
            font-size: 10px
            font-weight: 700
            color: rgb(147,153,159)
            .now
              display: inline-block
              vertical-align: top
              color: rgb(240,20,20)
              b
                font-size: 14px
                font-weight: 700
            .old
              vertical-align: top
              display: inline-block
              text-decoration: line-through
              b
                font-weight: 700
          .cartcontrol-wrapper
            position: absolute
            right: -6px
            bottom: -10px
</style>
