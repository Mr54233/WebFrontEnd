// 导入express 包
const express = require("express");
// 导入自定义的路由模块
const stuRoute = require("./routers/stuRoute");
const scoreRoute = require('./routers/scoreRoute')

// 创建服务器实例对象
const app = express();
// 注册路由
app.use(stuRoute);
app.use(scoreRoute)

// 启动服务器
app.listen(3000, () => {
	console.log("服务器运行在http://127.0.0.1:3000");
});
