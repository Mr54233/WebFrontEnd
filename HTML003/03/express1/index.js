// 导入express 包
const express = require("express");

// 创建服务器实例对象
const app = express();

// 托管静态资源
app.use(express.static('public'))

// 绑定浏览器端请求的事件处理函数
app.get("/", (req, res) => {
	// res.setHeader("Content-Type", "text/html;charset=utf-8");
	console.log("req.url");

	// var index = req.url.indexOf("?");
	// var result = req.url.substring(index + 1);
	// var params = result.split(/[=|&]/g);
	// var ps = {};
	// // console.log("params name : ", params[0]);
	// // console.log("params value : ", params[1]);

	// for (var i = 0; i < params.length; i++) {
	// 	ps[params[i]] = params[i+1];
	// }
	// console.log(ps);

	console.log(req.query);

	res.send("<h1>首页</h1>");
});

app.get("/about.html", (req, res) => {
	res.send("<h1>关于我的页面</h1>");
});

app.get('/test.html/:x/:y/:name',(req,res)=>{
    console.log(req.params)
    res.send("<h1>test</h1>")
})


// 启动服务器
app.listen(3000, () => {
	console.log("服务器运行在http://127.0.0.1:3000");
});
