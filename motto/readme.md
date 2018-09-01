```
	function getQuote(){
//	    创建对象
		var xmlhttp=new XMLHttpRequest();

//		规定请求的类型、URL 以及是否异步处理请求。
		xmlhttp.open("GET","https://andruxnet-random-famous-quotes.p.mashape.com/cat=",true);

//		添加请求头 X-Mashape-Key为密钥，不加报错401未授权拒绝访问
		xmlhttp.setRequestHeader("X-Mashape-Key", "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V");
//		告诉服务器请求的主题内容是json格式的字符串，服务器端会对json字符串进行解析
		xmlhttp.setRequestHeader("Accept", "application/json");

//		发送请求
		xmlhttp.send();

//      存储函数，每当 readyState 属性改变时，就会调用该函数
		xmlhttp.onreadystatechange=function(){
//			4：请求已完成，且响应已就绪 && 200: "OK"
			if (xmlhttp.readyState==4 && xmlhttp.status==200){
//				请求成功，执行自定义函数 JSON.parse()将一个 JSON 字符串转换为对象
				var result = JSON.parse(xmlhttp.responseText);
			}
		}
	}
```