// 商品相关的API 路由模块
const { json } = require("express");
const express = require("express");
// 导入数据操作的自定义模块
const {
	getPage,
	add,
	findByName,
	findById,
	update,
} = require("../database/category");

const route = express.Router();

// 挂载路由
route.get("/page/:num/:size", (req, res) => {
	// 1. 接收客户端提交的数据
	var pageIndex = req.params.num ? parseInt(req.params.num) : 1;
	var pageSize = req.params.size ? parseInt(req.params.size) : 5;
	// 2. 处理数据 , 按照业务逻辑
	getPage(pageIndex, pageSize, (categories) => {
		// 3. 将动态数据发送给客户端
		res.setHeader("Content-Type", "application/json");
		res.send({
			status: 200,
			message: "",
			categories:categories[0],
		});
	});
});

route.post("/add", (req, res) => {
	const category = req.body;
	res.setHeader("Content-Type", "application/json");
	if (!category.cname) {
		res.send({
			status: "555",
			message: "类型名称不能为空",
		});
	}
	findByName(category.cname, (categories) => {
		if (categories.length > 0) {
			res.send({
				status: "555",
				message: "类型名称不能重复",
			});
		} else {
			add(category, (result) => {
				if (result.affectedRows === 1) {
					res.send({
						status: "200",
						message: "",
					});
				} else {
					res.send({
						status: "555",
						message: "出现问题 , 请重试",
					});
				}
			});
		}
	});
});

route.get("/edit:cid", (req, res) => {
	var cid = req.params.cid;
	findById(cid, (category) => {
		res.setHeader("Content-Type", "application/json");
		res.send({
			status: 200,
			message: "",
			category:categories[0],
		});
	});
});

route.post("/edit", (req, res) => {
	const category = req.body;
	update(category, (result) => {
		if (result.affectedRows === 1) {
			res.setHeader("Content-Type", "application/json");
			res.send({
				status: 200,
				message: "",
			});
		} else {
			res.send({
				status: 500,
				message: "发生问题 请重试",
			});
		}
	});
});

module.exports = route;
