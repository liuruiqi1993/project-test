/*Created by Administrator on 2018/8/21.*/
function Scroll(a){
	this._config(a);
}
Scroll.prototype = {
	_config: function(a) {
		this.maxHeight = a.scrollHeight;
		this.minHeight = a.clientHeight;
		if(this.maxHeight>this.minHeight){
			if(a.querySelector(".scrollbar")){
			}else{
				//插入滚动条
				var scrollbar = document.createElement("DIV");
				scrollbar.className="scrollbar";
				scrollbar.innerHTML='<span class="bar"></span>';
				a.appendChild(scrollbar);
				a.style.overflow="hidden";
				a.style.position="relative";
			}
			//获取对象
			this.scrollbar = a.querySelector(".scrollbar");
			this.scrollitem = a.querySelector(".scrollitem");
			this.bar = this.scrollbar.getElementsByTagName("span")[0];
			//滚动条总高
			this.scrollbar.style.height = this.minHeight + "px";
			//滚动键高
			this.barHight = this.minHeight / this.maxHeight * 100;
			this.bar.style.height = this.barHight + "px";
			this.drag();
		}else{
			//去掉滚动条
			if(a.querySelector(".scrollbar")){
				a.removeChild(a.querySelector(".scrollbar"));
			}
		}
	},
	//设置拖动滚动条效果
	drag: function(){
		var that = this;
		this.start = 0;
		this.distance = 0;
		this.point = 0;
		//内容和距顶端距离 和 滚动键距顶端距离
		this.maxTop = this.scrollitem.style.transform;
		if (!this.maxTop) {
			this.maxTop = 0;
		}
		this.minTop = this.bar.style.transform;
		if (!this.minTop) {
			this.minTop = 0;
		}


		var move = function (event) {
				//拖拽长度
				this.distance=event.screenY-this.start;
				//滚动键位置
				that.minTop = that.point+this.distance;
				if (that.minTop < 0) {
					that.minTop = 0;

				} else if (that.minTop + that.barHight > that.minHeight) {
					that.minTop = that.minHeight - that.barHight;
				}
				this.style.transform = "translateY("+ (that.minTop)+"px)";

				//滚动距离=滚动键离顶部位置位置*a.scrollHeight/a.clientHeight
				that.maxTop = -that.minTop * (that.maxHeight - that.minHeight) / (that.minHeight - that.barHight);
				that.scrollitem.style.transform = "translateY("+ that.maxTop + "px)";
		};

		this.bar.addEventListener("mousedown",function(event){
				this.start = event.screenY;
				this.addEventListener("mousemove",move);
				this.addEventListener("mouseup", function(event){
					this.removeEventListener("mousemove", move);
					that.point=that.minTop;
			});
		});
	}
};

var appItems = document.querySelector(".app-items");
var menuGroup = document.querySelector(".menu-group");
var newsGroup = document.querySelector(".news-group");
var dialog = document.querySelector(".dialog");
scrollAppItems = new Scroll(appItems);
scrollMenuGroup = new Scroll(menuGroup);
scrollNewsGroup = new Scroll(newsGroup);
scrollDialog = new Scroll(dialog);

window.onresize=function(){
	scrollAppItems._config(appItems);
	scrollMenuGroup._config(menuGroup);
	scrollNewsGroup._config(newsGroup);
	scrollDialog._config(dialog);
};
