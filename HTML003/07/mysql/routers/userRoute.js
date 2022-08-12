// 用户管理的路由模块

const { application } = require("express");
const express = require("express");
const { getList, add, deleteUser, updateUser,getPage } = require("../database/user");
const Pager = require("../database/page");

const route = express.Router();

route.get("/list", (req, res) => {
	/* // 1. 获取用户表中的所有用户
	// 2. 用户数据的格式化
	getList((users) => {
		// 3. 渲染模板文件,生成html代码返回给浏览器
		res.render("list.art", { users: users });
	}); */

	// /user/list?page=1   /user/list
	// 1. 获取到浏览器提交的页码
	var pageIndex = 1; // 默认第一页
	if (req.query) {
		pageIndex = req.query.page;
	}
	// 2. 设置每一页的条数和需要显示的页码的个数
    var pageSize = 3;
    var count = 5;
	// 3. 到数据库中获取当前页的数据
    getPage(pageIndex , pageSize , count , (users , pager)=>{
        // users : 本页上需要显示的用户数组
        // pager : 分页控件
        // 4. 渲染模板文件 , 生成html代码 , 返回给浏览器
        res.render('list.art',{
            users,
            pager
        })
    })
});

route.get("/reg", (req, res) => {
	// 返回注册表单页面
	res.render("reg.art", {});
});

route.post("/reg", (req, res) => {
	// 检查用户账号是否已经被注册
	// 是 , 返回到注册页面 , 提示填写的账号已经被注册
	// 否 , 将新用户数据保存到数据库中

	add(req.body, () => {
		res.redirect("/user/list");
	});
});

route.get("/delete", (req, res) => {
	deleteUser(req.query.uid, () => {
		res.redirect("/user/list");
	});
});

route.get("/edit", (req, res) => {
	updateUser(req.query.uid, (users) => {
		res.render("edit.art", { users: users });
	});
});

// route.get('/test',(req,res)=>{
//     getPage(()=>{

//     });
// })

module.exports = route;
