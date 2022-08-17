// 商品相关的API 路由模块
const { json } = require("express");
const express = require("express");
// 导入数据操作的自定义模块
const { getPage } = require("../database/goods");

const route = express.Router();

// 挂载路由
route.get("/page/:num/:size", (req, res) => {
	// 1. 接收客户端提交的数据
	var pageIndex = req.params.num ? parseInt(req.params.num) : 1;
	var pageSize = req.params.size ? parseInt(req.params.size) : 5;
	// 2. 处理数据 , 按照业务逻辑
	getPage(pageIndex, pageSize, (goods) => {
		// 3. 将动态数据发送给客户端
		res.setHeader("Content-Type", "application/json");
		res.send({
			status: 200,
			message: "",
			goods,
		});
	});
});

module.exports = route;
