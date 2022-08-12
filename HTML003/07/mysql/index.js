const express = require("express");
const app = express();
const port = 3000;

// 中间件
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// 模板引擎
app.engine('art',require('express-art-template'))
// 路由
app.use("/user", require("./routers/userRoute"));
app.use('/api',require('./routers/apiRoute'))

// 错误处理
app.use(function (err, req, res, next) {
	res.render("err.art", { err });
});

// 启动
app.listen(port, () =>
	console.log(`Example app listening on port http://127.0.0.1:${port}`)
);
