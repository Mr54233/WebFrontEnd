// user 路由模块

const express = require("express");
const { login } = require("../database/users");

const route = express.Router();

route.post("/", (req, res) => {
	var user = req.body;

	login(user, (result) => {
		result = result[0];

		if (result && user.password === result.password) {
			res.send({
				status: 200,
				message: "登录成功",
			});
		} else {
			res.send({
				status: 555,
				message: "登陆失败 , 用户名或密码错误",
			});
		}
	});
});

module.exports = route;
