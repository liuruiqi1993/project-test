div.jumbotron可以增加h1标题的大小，并为登陆页面内容添加更多的外边距（margin），背景色默认#eee
* .container .jumbotron有margin，有圆角
* .jumbotron .container没有margin，没有圆角，铺满

div.thumbnail
* padding: 4px; border: 1px solid #ddd

.thumbnail .caption
padding: 9px;

在.jumbotron和.thumbnail插row是因为: xs时jumbotron左右padding 15,row左右padding -15刚好抵消。thumbnail的宽度看起来就和jumbotron相等了。

col-sm-offset-3用法

ul外面的div里如果不加col-xs-12，那h3和caption中间的间距会变,原因是加了之后有浮动元素会生成一个块级框BFC。不加撑不起来的原因是(margin-塌陷问题)[https://www.cnblogs.com/hugejinfan/p/5901320.html]
1. 先嵌套塌陷：h3的margin-top的效果并不是h3相对div的间距，而是（h3和div一起）相对于thumbnail的间距，
2. 再并列塌陷：thumbnail本身有一个margin-button,这个margin-button与margin-top再塌陷一次。

blockquote中footer加杠，变灰色cite变斜

.
