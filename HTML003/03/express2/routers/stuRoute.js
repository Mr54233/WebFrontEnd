// 学生管理功能的路由模块
// 1. 导入express
const express = require("express");
// 2. 创建路由对象
const route = express.Router();
// 3. 在路由对象上挂在路由对象
// route.get("/stu/list", (req, res) => {
// 	res.send("<h1>学生列表</h1>");
// });
// route.get("/stu/add", (req, res) => {
// 	res.send(`<h1>新增学生的表单</h1>
//     <form action='/stu/add' method='post'>
//     <input type='submit' value='提交'/>
//     </form>
//     `);
// });
// route.post("/stu/add", (req, res) => {
// 	res.send("<h1>已经将学生数据处理完毕 , 新增成功</h1>");
// });
route.get("/list", (req, res) => {
	res.send("<h1>学生列表</h1>");
});
route.get("/add", (req, res) => {
	res.send(`<h1>新增学生的表单</h1>
    <form action='/stu/add' method='post'>
    <input type='submit' value='提交'/>
    </form>
    `);
});
route.post("/add", (req, res) => {
	res.send("<h1>已经将学生数据处理完毕 , 新增成功</h1>");
});

// 4. 暴露出路由对象

module.exports = route;
