/**
 * Created by Administrator on 2018/7/21.
 */
$(function(){
    headerScroll();
    banner();
    cutDownTime();
});


function headerScroll(){
    var max = $(".jd_nav").offset().top+$(".jd_nav").outerHeight();
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var percentage = scroll/max;
        $(".jd_header").css("backgroundColor","rgba(201,21,35,"+percentage+")");
    })
}



function banner(){
    /*自动播放*/
    var width = $(window).width();
    var slide = document.querySelector(".banner_images");
    var indexArr = $(".banner_index li");
    var index=0;
    var slideTimer = setInterval(slideAnimation,2000); //slideAnimation后面不要括号
    function slideAnimation(){
        index++;
        $(slide).css({"transform": "translateX(-"+(index+1)*width+"px)",  //index+1
            "transition": "all 0.3s"});
    }

    /*左右滑动*/
    var start = 0;
    var move = 0;
    document.body.addEventListener("touchstart",function(){
        clearInterval(slideTimer);
        $(slide).css("transition", "");
        start = event.touches[0].clientX;

    });
    document.body.addEventListener("touchmove",function(){
        move = event.touches[0].clientX-start;
        $(slide).css("transform", "translateX("+(move+(index+1)*-1*width)+"px)");
    });
    document.body.addEventListener("touchend",function(){
        var max=width/2;
        $(slide).css("transition", "all 0.1s");
        if(Math.abs(move)>max){
            if(move>0){
                index--;
            }else{
                index++;
            }
            $(slide).css("transform", "translateX("+(index+1)*-1*width+"px)");
        }else{
            $(slide).css("transform", "translateX("+(index+1)*-1*width+"px)");
        }
        slideTimer = setInterval(slideAnimation,2000);
    });

    /*Transition结束后再跳转*/
    document.querySelector(".banner_images").addEventListener("webkitTransitionEnd", function(){
        if(index==-1){
            index=indexArr.length-1;
        }
        if(index==indexArr.length){
            index=0;
        }
        if(index==0||index==indexArr.length-1){
            $(slide).css({"transition": "","transform": "translateX(-"+(index+1)*width+"px)"}); // ""里面什么都不能写
        }
        $(indexArr).removeClass("current");
        $(indexArr[index]).addClass("current");
    });
}



function cutDownTime(){
    var liArr = $(".main_content:nth-child(1) .content_top li");
    var timer = setInterval(function(){
        var date = new Date();
        var clock = date.getHours();
        if(clock>2 && clock<6){
            var setHour = 6;
        }
        else{
            var setHour = Math.ceil((clock+1)/2)*2;
        }
        var hour = setHour-clock-1;
        var min = 60-date.getMinutes()-1;
        var sec = 60-date.getSeconds()-1;
        function sigle(num) {
            return num<10 ? "0"+num : ""+num;
        }
        liArr[0].innerHTML=sigle(hour).substr(0,1);
        liArr[1].innerHTML=sigle(hour).substr(1,1);
        liArr[3].innerHTML=sigle(min).substr(0,1);
        liArr[4].innerHTML=sigle(min).substr(1,1);
        liArr[6].innerHTML=sigle(sec).substr(0,1);
        liArr[7].innerHTML=sigle(sec).substr(1,1);
    },1000)
}
