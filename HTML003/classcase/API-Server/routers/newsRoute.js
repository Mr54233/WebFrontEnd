// 新闻路由模块

const express = require('express')
const { getAllNews } = require('../database/newses')

const route = express.Router()

route.get('/',(req,res)=>{
    getAllNews('',(result)=>{
        res.send(result)
    })
})

route.get('/:count',(req,res)=>{
    var count = req.params.count
    // res.send(req.params)
    getAllNews(count,(result)=>{
        res.send(result)
    })
})

module.exports = route