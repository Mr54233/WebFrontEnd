// api 路由 是专门处理Ajax请求的路由模块
// 请求地址格式 : /api/xxx

const express = require("express");
const { isExist } = require("../database/user");

const route = express.Router();

route.get("/chkExist", (req, res) => {
	// 获取填写的用户名
	let uname = req.query.uname;

	// 到数据库中的users 表中查询是否已经有同名的用户
	isExist(uname, (len) => {
		var message = " ",
			result = "ok";
		if (len > 0) {
			var result = "failure";
			var message = "用户名已被注册 , 请重新设置";
		}

        res.setHeader('Content-Type','application/json')
		res.send({
			result,
			message,
		});
	});
});

module.exports = route