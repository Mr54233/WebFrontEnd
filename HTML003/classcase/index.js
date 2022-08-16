const express = require("express");
const cors = require("cors");
const session = require("express-session");

const app = express();
const port = 3000;

// 配置session中间件
app.use(
	session({
		secret: "i love beijing", // secret 属性的值可以为任意字符串
		resave: false, // 固定写法
		saveUninitialized: true, // 固定写法
	})
);

// 挂载静态资源
app.use("/public/", express.static("public"));

// 挂载中间件
// 跨域
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// 挂载路由
app.use("/", require("./routers/newsRoute"));
app.use("/login", require("./routers/loginRoute"));
app.use("/logout", require("./routers/logoutRoute"));

// 模板引擎
app.engine("html", require("express-art-template"));

// 错误处理
app.use((err, req, res, next) => {
	if (err) {
		console.log("err.message", err.message);
		res.send(err.message);
	}
});

app.listen(port, () => console.log(`http://127.0.0.1:${port}`));
