// 学生管理路由模块
const express = require("express");
const { getAll, writeData } = require("../mymodules/data");
const df = require("../mymodules/dataFormat");

// 创建路由
const route = express.Router();

// 挂载路由
route.get("/list", (req, res) => {
	getAll((result) => {
		res.render("stu/list.art", { stus: result });
	});
});

route.get("/add", (req, res) => {
	res.render("stu/add.art", {});
});

route.post("/add", (req, res) => {
	writeData(df.format(req.body), () => {
		res.redirect("/stu/list");
	});
});

route.get('/delete',(req,res)=>{
    
})

// 导出路由
module.exports = route;
