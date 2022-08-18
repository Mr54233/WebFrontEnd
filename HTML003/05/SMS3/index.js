const express = require("express");
const stuRoute = require('./routers/stu')

const app = express();

// 挂载静态资源文件
app.use(express.static('public'))
// 挂载中间件
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// 设置模板引擎
app.engine("art", require("express-art-template"));

// 设置模板文件所在的文件夹
// app.set('views','pagers')
// 默认为views
// app.set("views", path.join(__dirname, "views"));

// 设置模板文件的默认扩展名为 art ,使用模板文件时 可以省略扩展名
// 默认为art
// app.set("view engine", "art");

// 挂载路由
app.use('/stu',stuRoute)

app.use(function (err, req, res, next) {
	// 错误级别的中间件
	console.log("发生了错误:" + err.message); // 在服务器打印错误消息
	res.send("Error!" + err.message); // 向客户端响应错误相关的内容
	next()
});

app.listen(3000, () => {
	console.log(`Example app listening on port http://127.0.0.1:3000`);
});