// 学生管理路由模块
const express = require("express");
const { getAll, writeData, deleteData } = require("../mymodules/data");
const df = require("../mymodules/dataFormat");
const Pager = require("../mymodules/pager");

// 创建路由
const route = express.Router();

// 挂载路由
route.get("/list", (req, res) => {
	getAll((result) => {
		res.render("stu/list.art", { stus: result });
	});
	console.log(req.query.page);
	var pager = new Pager(1, 5, 9);
	console.log(pager);

	res.render("/stu/list.art", { pager });
});

route.get("/add", (req, res) => {
	res.render("stu/add.art", {});
});

route.post("/add", (req, res) => {
	writeData(df.format(req.body), () => {
		res.redirect("/stu/list");
	});
});

route.get("/delete", (req, res) => {
	getAll((result) => {
		for (var i = 1; i < result.length; i++) {
			if (result[i].name == req.query.name) {
				result.splice(i, 1);
			}
		}
		deleteData(result);
		res.redirect("/stu/list");
		res.render("stu/list.art", { stus: result });
	});
});

// var i = 0;
// getAll((result) => {
// 	i = result.length;
// 	console.log("i", i);
// });
// var pager = new Pager(1, 5, i);
// console.log(pager);

// 导出路由
module.exports = route;
