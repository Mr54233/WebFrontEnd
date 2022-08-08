// 导入express
const express = require('express');
// 导入自定义的路由模块
const stu = require('./routers/stu');
// 创建服务器
const app = express();
// 注册路由模块
app.use('/stu',stuRouter)

app.use('/stu',express.static('./stu'))

// 绑定端口
app.listen(3000, function () {
    console.log('server is running at http://127.0.0.1:3000')
});