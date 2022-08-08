// 学生管理功能的路由模块
// 1. 导入模块
const express = require("express");
const fs = require("fs");
const path = require("path");
// 2. 创建路由对象
const route = express.Router();
// 3. 在路由对象上挂在路由对象
route.get("/list", (req, res) => {
	var listPath = path.join(__dirname, "../stu/list.html");
	var list = fs.readFile(listPath, "utf-8", (err, result) => {
		if (err) {
			console.log("err.message", err.message);
		} else {
			res.send(result);
		}
	});
});
route.get("/add", (req, res) => {
	var listPath = path.join(__dirname, "../stu/add.html");
	var list = fs.readFile(listPath, "utf-8", (err, result) => {
		if (err) {
			console.log("err.message", err.message);
		} else {
			res.send(result);
		}
	});
});
route.post("/add", (req, res) => {
	res.send("<h1>已经将学生数据处理完毕 , 新增成功</h1>");
});

// 4. 暴露出路由对象

module.exports = route;
