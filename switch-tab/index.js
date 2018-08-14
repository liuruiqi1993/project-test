/**
 * Created by Administrator on 2018/8/14.
 */

function Tab(config) {
    this.tabMenus = null;
    this.tabMains = null;
    if(config){
        this._init(config);
    }
}
Tab.prototype = {
    _init: function(config){
        var tabMenu = document.getElementById(config.tabMenus);
        var tabMain = document.getElementById(config.tabMains);
        this.tabMenus= tabMenu.children;
        this.tabMains= tabMain.children;
        var that = this; //这里的this是构造函数的this
        for (var i = 0; i < this.tabMenus.length; i++) {
            var li = this.tabMenus[i];
            li.index=i;
            li.onclick = function(){
                that.change(this); //this指的这时的li
            };
        }
        this.auto();
    },
    change: function(tabMenu){
        for (var i = 0; i < this.tabMenus.length; i++) {
            this.tabMenus[i].className="tab-item";
            this.tabMains[i].className="main";
        }
        tabMenu.className+=" active";
        this.tabMains[tabMenu.index].className+=" selected";
    },
    auto: function(){
        var index = 0;
        var that = this; //这里的this是构造函数的this
        setInterval(function(){
            index++;
            if(index==that.tabMenus.length){
                index=0;
            }
            that.change(that.tabMenus[index]);
        },2000)
    }
};