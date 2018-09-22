<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/rating">评论</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
/* eslint-disable */
  import header from './components/header/header.vue'
  const ERR_OK = 0;
  export default{
    data(){
      return{
        goods:{},
        rating:{},
        seller:{}
      }
    },
    created(){
      this.$http.get('/seller').then((response) => {
        response = response.body;
        if(response.errno===ERR_OK){
          this.seller = response.data
        }
      })
    },
    components:{
      'v-header': header
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus">
  @import './components/stylus/mixin.styl'
  #app
    .tab
      width: 100%
      height: 40px
      line-height: 40px
      display: flex
      text-align: center
      border-1px(rgba(7,17,27,.1))
      .tab-item
        flex: 1
        a
          display: block
          font-size: 14px
          color: rgb(77,85,93)
          &.router-link-active
            color: rgb(240,20,20)
</style>
