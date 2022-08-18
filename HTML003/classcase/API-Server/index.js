const express = require("express");
const cors = require("cors");
const expressJWT = require("express-jwt");
const config = require("./config");

const app = express();
const port = 3000;

// 挂载中间件
// 跨域
app.use(cors());
app.use(express.urlencoded({ extended: false }));
// app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }));
app.use(
	expressJWT.expressjwt({ secret: config.secretKey, algorithms: ["HS256"] }).unless({
		path: [/^\/api\//],
	})
);

// 挂载路由

app.use("/api/login", require("./routers/userRoute"));
app.use("/api/getNews", require("./routers/newsRoute"));

// 错误处理
app.use((err, req, res, next) => {
	// token解析失败导致的错误
	if (err.name == "UnauthorizedError") {
		return res.send({ status: 401, message: "无效的token" });
	}
	// 其他原因导致的错误
	res.send(err.message);
});

// 开启服务器
app.listen(port, () => console.log(`http://127.0.0.1:${port}`));
