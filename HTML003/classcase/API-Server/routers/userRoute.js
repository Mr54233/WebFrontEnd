// user 路由模块

const express = require("express");
const { login } = require("../database/users");
const jwt = require("jsonwebtoken");

const secretKey = "123456";

const route = express.Router();

route.post("/", (req, res) => {
	var user = req.body;

	login(user, (result) => {
		result = result[0];

		if (result && user.password === result.password) { 
			res.send({
				status: 200,
				message: "登录成功",

				// 调用 jwt.sign() 生成 jwt 字符串 , 三个参数分别是 : 用户信息对象 , 加密密钥 , 配置对象
				token: jwt.sign({ username: user.uname }, secretKey, {
					expiresIn: "120s",
				}),
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
