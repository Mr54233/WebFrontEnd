// user 路由模块

const express = require("express");
const { login, register } = require("../database/users");
const jwt = require("jsonwebtoken");
const config = require("../config");

const route = express.Router();

route.post("/login", (req, res) => {
	var user = req.body;

	login(user, (result) => {
		result = result[0];

		if (result && user.password === result.password) {
			res.send({
				status: 200,
				message: "登录成功",

				// 调用 jwt.sign() 生成 jwt 字符串 , 三个参数分别是 : 用户信息对象 , 加密密钥 , 配置对象
				token:
					"Bearer " +
					jwt.sign({ username: user.uname }, config.secretKey, {
						expiresIn: config.expiresIn,
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

route.post("/getuname", (req, res) => {
	// var token = req.headers.authorization;

	var token = req.body.token;

	token = token.substring(7);

	var decoded = jwt.decode(token);

	res.send(decoded);
});

route.post("/reg",(req,res)=>{
	user = req.body
	register(user,(result)=>{
		res.send(result)
	})
})

module.exports = route;
