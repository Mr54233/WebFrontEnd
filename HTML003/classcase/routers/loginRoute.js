// 登录路由模块

const express = require("express");
const { findByNameAndPwd } = require("../database/login");
const { getAllNews } = require("../database/newses");

const route = express.Router();

route.get("/", (req, res) => {
	res.render("login.html");
});

// 处理登录表单中提交的数据
route.post("/", (req, res) => {
	findByNameAndPwd(req.body, (users) => {
		// 用户数的长度 === 0  , 没有该账号的用户 , 或者密码错误 , 登陆失败
		// 重定向到登陆页面 , 要求用户重新登录
		// console.log("users", users);
		if (users.length === 0) {
			res.render("login.html", {
				user: req.body,
				err: { message: "账号或密码错误" },
			});
		} else {
			// 用户数组的长度 > 0 , 登录成功 , 在session中记录用户数据
			// 重定向到首页 ,
			// console.log('req.session',req.session)
			req.session.user = users[0]; // 将用户保存到session中去
			req.session.islogin = true; // 标记已经登录

			// console.log(req.session)
			getAllNews((result) => {
				// console.log(result);
				res.render("index.html", { user: users[0],news: result,islogin:req.session.islogin });
			});
		}
	});
});
module.exports = route;
