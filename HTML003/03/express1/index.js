// 导入express 包
const express = require("express");

// 创建服务器实例对象
const app = express();

// 绑定浏览器端请求的事件处理函数
app.get("/", (req, res) => {
	res.setHeader("Content-Type", "text/html;charset=utf-8");
	res.end("<h1>首页</h1>");
});

app.get("/about.html", (req, res) => {
	res.setHeader("Content-Type", "text/html;charset=utf-8");
	res.end("<h1>关于我的页面</h1>");
});

// 启动服务器
app.listen(3000, () => {
	console.log("服务器运行在http://127.0.0.1:3000");
});
