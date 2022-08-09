// 又一个路由模块

const express = require("express");
const route = express.Router();

// 在路由对象上挂载中间件
// route.use((req, res, next) => {
// 	console.log("执行了second路由级别的中间件逻辑");
// 	next();
// });
route.get("/order", (req, res) => {
	console.log("执行 /order 路由处理函数");
	res.send("<h1>order page</h1>");
});

module.exports = route;
