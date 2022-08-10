const express = require("express");
const path = require("path");
const app = express();

// 挂载静态资源文件
app.use(express.static('public'))

// 设置模板引擎
app.engine("art", require("express-art-template"));

// 设置模板文件所在的文件夹
// app.set('views','pagers')
app.set("views", path.join(__dirname, "views"));

// 设置模板文件的默认扩展名为 art ,使用模板文件时 可以省略扩展名
app.set("view engine", "art");

// 挂载路由

app.listen(3000, () => {
	console.log(`Example app listening on port http://127.0.0.1:3000`);
});
