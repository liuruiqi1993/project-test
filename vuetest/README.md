# elema

> 抄袭饿了吗

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

移动设备 一像素边框需要考虑缩放 1.5*0.7 约等于 1
```
@media (-webkit-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)
  .border-1px
    &::after
      -webkit-transform: scaleY(0.7)
      transform: scaleY(0.7)

@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2)
  .border-1px
    &::after
      -webkit-transform: scaleY(0.5)
      transform: scaleY(0.5)
```

text-overflow

-----------------------
值|作用
----|-----
clip |	修剪文本。
ellipsis |	显示省略符号来代表被修剪的文本。
string |	使用给定的字符串来代表被修剪的文本。
------------------------------------------------

[Sticky footers](https://www.cnblogs.com/shicongbuct/p/6487122.html)

页面内容不够长的时候，页脚块粘贴在视窗底部
内容过长时，页脚被挤到最下方

```
<body>
    <div class="wrapper clearfix">
        <div class="content"></div>
    </div>　
　　<div class="footer"></div>
</body>

.wrapper {
     min-height: 100%;
}
.content {
    padding-bottom: 150px; /* 必须使用和footer相同的高度 */
}
.footer {
    position: relative;
    margin-top: -150px; /* footer高度的负值 */
    height: 150px;
    clear:both; //去除左右浮动的元素
}
```
 ## Failed to mount component: template or render function not defined Found in
 原因 &lt;template&gt;写错了写成tamplate

## v-for index用法
```
v-for="(item,index) in seller.supports"
<span class="text">{{seller.supports[index].description}}</span>
```

## v-show transition
```
transition: all .5s
      background: rgba(7,17,28,0.8)
      &.fade-enter, &.fade-leave-active
        opacity:0
        background: rgba(7,17,28,0)


<transition name="fade">
      <div v-show="detailShow" class="detail">
</transition>
```
## updated(){} [生命周期](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)
goods中_calculateHeight这个函数，mounted之后$refs.foodWrapper才生效，foodList成为伪数组，但此时foodList长度为0，所以进不到for循环里。因此需要在updated之后才进入for循环
```
updated(){
      this._calculateHeight()
    },
    或者用
this.$nextTick(() => {
            this._initScroll()
            this._calculateHeight()
          })
```
## font-size: 0; 解决inline元素间的空白间隙

## goods向shopcart传送selectFood失败是因为selectFood这个函数里面，return foods写错了位置。应该写在遍历外面
