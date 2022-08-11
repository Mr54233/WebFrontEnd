// 用户管理的路由模块

const express = require('express')

const route = express.Router();

route.get('/list',(req,res)=>{
    // 1. 获取用户表中的所有用户
    // 2. 用户数据的格式化
    // 3. 渲染模板文件,生成html代码返回给浏览器
})

module.exports = route