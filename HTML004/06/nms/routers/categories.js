const express = require("express");

const db = require("../database/category");

const route = express.Router();

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

module.exports = route;
