const express = require("express");

const db = require("../database/category");

const route = express.Router();

// 功能：新增类型或者修改类型数据
route.post("/save", async (req, res) => {
	// // 接收客户端提交的数据
	const category = req.body;

	var cs = await db.getCategories(category.cname);
	if (cs.length > 0) {
		return res.json({
			status: 1,
			message: "该类型名称已存在",
		});
	} else {
		var rows;
		if (category.cid) {
			rows = await db.update(category);
		} else {
			rows = await db.insert(category);

			if (rows > 0 && req.session.total) {
				req.session.total++
			}
		}
		if (rows > 0) {
			// 成功
			return res.json({
				status: 0,
				message: "成功更新数据",
			});
		} else {
			// 失败
			return res.json({
				status: 1,
				message: "在更新数据的过程中发生了错误 , 请检查数据后重试",
			});
		}
	}
});

//功能：分页显示类型数据
route.get("/page", async (req, res) => {
	const page = req.query;
	var curr = page.curr ? parseInt(page.curr) : 1;
	var limit = page.limit ? parseInt(page.limit) : 5;

	// 调用数据操作函数完成数据库访问
	var cs = await db.getPage(curr, limit);

	// 如果需要提高执行效率 , 第一次获取到总记录数 , 将它保存到session中,
	if (!req.session.total) {
		req.session.total = await db.getTotal();
	}
	var total = req.session.total;

	// console.log("cs", cs);
	if (cs) {
		return res.send({
			status: 0,
			message: "",
			data: cs,
			total,
		});
	} else {
		return res.json({
			status: 1,
			message: "报错",
		});
	}
});

// 根据cid 查询一条类型数据
route.get("/getSingle", async (req, res) => {
	var cid = parseInt(req.query.cid);
	var category = await db.getSingle(cid);

	res.json({
		statu: 0,
		message: "",
		data: category[0],
	});
});

route.get("/remove", async (req, res) => {
	var cid = parseInt(req.query.cid);

	var rows = await db.remove(cid);
	if (rows > 0) {
		return res.json({
			status: 0,
			message: "删除成功",
		});
	} else {
		return res.json({
			status: 1,
			message: "删除失败",
		});
	}
});

module.exports = route;
