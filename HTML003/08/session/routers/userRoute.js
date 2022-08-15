// 路由模块 和用户管理有关的路由

const express = require("express");
const { findByNameAndPwd } = require("../database/users");

const route = express.Router();

route.get("/login", (req, res) => {
	res.render("login.art", null);
});

// 处理登录表单中提交的数据
route.post("/login", (req, res) => {
	findByNameAndPwd(req.body, (users) => {
		// 用户数的长度 == 0  , 没有该账号的用户 , 或者密码错误 , 登陆失败
		// 重定向到登陆页面 , 要求用户重新登录
		if (users.length === 0) {
			res.render("login.art", {
				user: req.body,
				err: { message: "没有该账号的用户 , 或者密码错误" },
			});
		} else {
			// 用户数组的长度 > 0 , 登录成功 , 在session中记录用户数据
			// 重定向到首页 ,
			req.session.user = users[0]; // 将用户保存到session中去
			req.session.islogin = true; // 标记已经登录
			res.render("index.art", {
				user: users[0],
			});
		}
	});
});


module.exports = route