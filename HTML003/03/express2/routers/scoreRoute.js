// 分数管理功能的路由模块
// 1. 导入express
const express = require("express");
// 2. 创建路由对象
const route = express.Router();
// 3. 在路由对象上挂在路由对象
route.get("/score/list", (req, res) => {
	res.send("<h1>分数列表</h1>");
});

// 4. 暴露出路由对象

module.exports = route;
