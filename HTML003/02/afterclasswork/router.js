/**
 * router.js路由模块:
 * 处理路由,根据不同的请求方法或者请求路径设置具体的返回数据
 */
// 加载相关模块
var fs = require('fs');
var express = require('express');
var Student = require('./student');
// 创建一个路由容器
var router = express.Router();
/** 路由设计:
 * 请求方法 ==== 请求路径 ==== 参数  =====备注 
 * GET ==== /students ==== 参数无 ====渲染首页
 * GET ==== /students/add ===== 参数无 ======渲染添加学生页面
 * POST ==== /students/add ===== 参数no,name,birthday,address ======添加学生页面提交表单
 * GET ==== /students/edit ===== 参数no ======渲染编辑页面
 * POST ==== /students/edit ===== 参数no,name,birthday,address ======编辑学生页面表单提交
 * GET ==== /students/delete ===== 参数no ======处理删除请求
 */
// 处理路由:把路由都挂载到路由容器
router.get('/students', function (req, res) {
    Student.find(function (err, students) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.render('list.html', {
            students: students
        })
    });
});
router.get('/students/add', function (req, res) {
    res.render('add.html')
});
router.post('/students/add', function (req, res) {
    // 获取表单数据-->处理(保存到db.json)-->发送响应
    Student.save(req.body, function (err) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })
});
router.get('/students/edit', function (req, res) {
    Student.findByNo(parseInt(req.query.no), function (err, student) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.render('edit.html', {
            student: student
        });
    });
});
router.post('/students/edit', function (req, res) {
    Student.updateByNo(req.body, function (err) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })
});
router.get('/students/delete', function (req, res) {
    Student.deleteByNo(req.query.no, function (err) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    });
});
// 把路由导出
module.exports = router;