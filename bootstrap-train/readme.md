html手机上滚不动，.main滚不动, body滚的动
$("body").stop().animate({
    "scrollTop": Math.floor($(thisId).offset().top)
} , 1500);

[滚动监听](https://v3.bootcss.com/javascript/#scrollspy)
$('body').scrollspy({ target: '.navbar-default' });

[collapse.js: toggle behavior.](https://v3.bootcss.com/javascript/#collapse)
$(".navbar-collapse").collapse('hide');