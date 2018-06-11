/**
 * Created by Administrator on 2018/5/15.
 */

window.onload=function () {

    var slider = document.getElementById("slider");

    var sliderImg = document.getElementById("sliderImg");
    var imgArr = sliderImg.getElementsByTagName("li");
    var width = slider.offsetWidth;

    var sliderBullet = document.getElementById("sliderBullet");
    var bulletArr = sliderBullet.children;

    var sliderArrow = document.getElementById("sliderArrow");
    var sliderArrowL = document.getElementById("sliderArrowL");
    var sliderArrowR = document.getElementById("sliderArrowR");

    var order = 0;



//      自动播放
    var play = setInterval(autoPlay,3000);
    function autoPlay() {
        order++;
        if (order >= imgArr.length) {
            sliderImg.style.left = 0;
            order = 1
        }
        orderMoveWithImg(sliderImg,order,width,bulletArr,"sliderBulletCurrent");
    }

    
//      arrow显示隐藏
    slider.onmouseover = function () {
        sliderArrow.style.display = "inline-block";
        clearInterval(play);
    };
    slider.onmouseout = function () {
        sliderArrow.style.display = "none";
        play = setInterval(autoPlay,3000);
    };


//      arrow点击效果
    sliderArrowL.onclick = function () {
        order--;
        if(order < 0){
            sliderImg.style.left = -(imgArr.length-1) * width + "px";
            order = imgArr.length-2;
        }
        orderMoveWithImg(sliderImg,order,width,bulletArr,"sliderBulletCurrent");
    };

    sliderArrowR.onclick = function () {
        order++;
        if(order === imgArr.length){
            sliderImg.style.left = 0;
            order = 1
        }
        orderMoveWithImg(sliderImg,order,width,bulletArr,"sliderBulletCurrent");
    };


//      bullet焦点效果
    for (var i = 0; i<bulletArr.length;i++) {
        bulletArr[i].index = i;
        bulletArr[i].onmouseover = function () {
            killThemAll(bulletArr);
            this.className = "sliderBulletCurrent";
            animate(sliderImg, -this.index * width);
            order = this.index;
        };
    }


//      排它思想
    function killThemAll(arr) {
        for (var j = 0; j < arr.length; j++) {
            arr[j].className = "";
        }
    }


//    orderMoveWithImg
    function orderMoveWithImg(ele,order,imgWidth,arr,classCode) {
        animate(ele,-order * imgWidth);
        killThemAll(arr);
        if(order==arr.length){
            order = 0;
        }
        arr[order].className = classCode;
    }


//      滑动效果
    function animate(ele,target) {
        // 每一个盒子都有定时器，使用定时器之前先清除定时器。
        clearInterval(ele.timer);
        // 盒子大于10px，正10盒子向右移，负10盒子向左移
        var speed = target>ele.offsetLeft ? 10 : -10;
        ele.timer = setInterval(function () {
            // 重复判断target和盒子的距离
            var distance = target - ele.offsetLeft;
            ele.style.left = ele.offsetLeft + speed + "px";
            // 如果target和盒子的距离小于speed,则直接跳到target的位置，清除定时器，结束运动。
            if(Math.abs(distance)<=Math.abs(speed)){
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        },1); // 1代表毫秒
    }
};