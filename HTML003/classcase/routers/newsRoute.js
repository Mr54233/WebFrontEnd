// 新闻路由模块

const express = require("express");

const route = express.Router();

const { getAllNews } = require("../database/newses");

route.get("/", (req, res) => {
	// res.render("index.html",'')
	// console.log(req);
    // console.log(req.session.user)
    getAllNews((result) => {
        // console.log(result);
        res.render('index.html', {user:req.session.user,news:result,islogin:req.session.islogin})
    })
});

module.exports = route;
