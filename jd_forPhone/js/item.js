/**
 * Created by Administrator on 2018/7/25.
 */
$(function(){
    var side = document.querySelector(".side");
    var content = document.querySelector(".content");
    scroll(side,0);
    scroll(content,0);
    tap(side,function(e){
        $(".side li").removeClass("current");
        e.target.parentNode.className += " current";

        var currentIndex = e.target.parentNode.dataset["index"];
        distance = -(currentIndex-1)*$(".side li").height();
        if(distance>0){
            distance = 0;
        }else if(distance<document.querySelector(".main").offsetHeight-document.querySelector(".header").offsetHeight-document.querySelector(".side").offsetHeight){
            distance = document.querySelector(".main").offsetHeight-document.querySelector(".header").offsetHeight-document.querySelector(".side").offsetHeight;
        }
        setTransfrom(side,distance);
    });



});
function  scroll(element,distance){
    var start = 0;
    var move = 0;
    var mainHeight = document.querySelector(".main").offsetHeight-document.querySelector(".header").offsetHeight;
    var height = element.offsetHeight;
    var max = 0;
    var min = mainHeight - height;
    element.addEventListener("touchstart",function(){
        start=event.touches[0].clientY;
    });
    element.addEventListener("touchmove",function(){
        move=event.touches[0].clientY-start;
        setTransfrom(element,move+distance);/*加distance后左侧才不会跳，明明按的是19，显示10，向上滑到顶松开又变成30*/
        clearTransition(element);
    });
    element.addEventListener("touchend",function(){
        distance+=move;
        if(distance>max){
            distance = max;
        }else if(distance<min){
            distance = min;
        }
        setTransition(element);
        setTransfrom(element,distance);
        clearTransition(element);
    });
}
function setTransition(element){
    element.style.transition = "all .3s";
}
function clearTransition(element){
    element.style.transition = "";
}
function setTransfrom(element,distance){
    element.style.transform = "translateY("+distance+"px)";
}
function tap(element,callBack){
    var startTime = 0;
    var isMove = false;
    var maxTime = 250;
    element.addEventListener("touchstart",function(e){/*括号内必须加上参数*/
        startTime = Date.now();
        isMove = false;
    });
    element.addEventListener("touchmove",function(e){
        isMove = true;
    });
    element.addEventListener("touchend",function(e){
        if(isMove==true){
            return;
        }
        if(Date.now()-startTime>maxTime){
            return;
        }
        callBack(e);
    });
}