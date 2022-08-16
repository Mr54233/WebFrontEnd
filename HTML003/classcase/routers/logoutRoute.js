// 登出模块

const express = require("express");
const { getAllNews } = require("../database/newses");

const route = express.Router();

// 推出登录的接口
route.get("/", (req, res) => {
	// 清空当前客户端对应的 session 信息
	req.session.destroy();
	res.send({
		status: 0,
		msg: "退出登录成功",
	});
});

module.exports = route;
