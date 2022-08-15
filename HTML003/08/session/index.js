const express = require("express");
const session = require("express-session");

const app = express();
const port = 3000;

// 挂载中间件
app.use(express.urlencoded({ extended: false }));

// 配置session中间件
app.use(
	session({
		secret: "i love beijing", // secret 属性的值可以为任意字符串
		resave: false, // 固定写法
		saveUninitialized: true, // 固定写法
	})
);

// 挂载模板引擎中间件
app.engine("art", require("express-art-template"));

// 挂载路由模块
app.use("/", require("./routers/homeRoute"));
app.use("/user", require("./routers/userRoute"));

// 错误路由
app.use((err, req, res, next) => {
	console.log("err.message", err.message);
    res.send(err.message)
});

app.listen(port, () =>
	console.log(`Example app listening on port http://127.0.0.1:${port}`)
);
