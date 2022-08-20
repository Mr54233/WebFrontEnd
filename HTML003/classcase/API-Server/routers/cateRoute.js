
const express = require('express')
const { getAllCate,add, deleteCate, update } = require('../database/categories')

const route = express.Router()

route.get('/',(req,res)=>{
    getAllCate((result)=>{
        res.send(result)
    })
})

route.post('/add',(req,res)=>{
    var cname = req.body.cname;
    add(cname,(result)=>{
        res.send(result)
    })
})

route.post('/delete',(req,res)=>{
    var cid = req.body.cid;
    deleteCate(cid,(result)=>{
        res.send(result)
    })
})

route.post('/update',(req,res)=>{
    var cate = req.body;
    update(cate,(result)=>{
        res.send(result)
    })
})

module.exports = route

