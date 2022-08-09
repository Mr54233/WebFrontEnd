// 测试了路由级别的中间件
const express = require("express");
const route = express.Router();

// 在路由对象上挂载中间件
route.use((req, res, next) => {
	console.log("执行了路由级别的中间件逻辑");
	next();
});
route.get("/list", (req, res) => {
	console.log("执行 /list 路由处理函数");
	res.send("<h1>list page</h1>");
});

module.exports = route;
