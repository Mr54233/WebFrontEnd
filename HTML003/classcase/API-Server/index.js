const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// 挂载中间件
// 跨域
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// 挂载路由

app.use("/api/login", require("./routers/userRoute"));

// 错误处理
app.use((err, req, res, next) => {
	if (err) {
		console.log("err.message", err.message);
		res.send(err.message);
	}
});

// 开启服务器
app.listen(port, () => console.log(`http://127.0.0.1:${port}`));
