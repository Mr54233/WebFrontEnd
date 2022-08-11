// 用户管理的路由模块

const { application } = require("express");
const express = require("express");
const { getList,add } = require("../database/user");

const route = express.Router();

route.get("/list", (req, res) => {
	// 1. 获取用户表中的所有用户
	// 2. 用户数据的格式化
	getList((users) => {
		// 3. 渲染模板文件,生成html代码返回给浏览器
		res.render("list.art", { users: users });
	});
});

route.get('/reg',(req,res)=>{
    // 返回注册表单页面
    res.render('reg.art',{})
})

route.post('/reg',(req,res)=>{
    // 验证数据是否合法
    // 格式化数据
    // 将新用户数据保存到数据库中

    add(req.body,()=>{
        res.redirect('/user/list')
    })
})

module.exports = route;

