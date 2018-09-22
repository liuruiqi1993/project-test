var http = require("http");//引入一个模块
var fs = require("fs");//引入文件系统模块
var ws = require("socket.io");//socket.io

var server = http.createServer(function(req,res){
	var html = fs.readFileSync("./client.html");
	//链接服务器期之后执行语句
	res.end(html);
}).listen("3000");//创建服务端实例

var io = ws(server);//把socket服务挂载到http服务器中，得到socket实例，io是所有的客户端

//监听连接事件
io.on("connection",function(socket){//这里的socket实例就代表一个用户
	socket.on("message",function(mes){//监听每一个socket客户端实力发来的消息，message在socket.io里已经注册好了
		io.emit("message",mes);//广播消息
	});

});