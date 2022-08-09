// 导入express
const express = require('express');

// 导入自定义的路由模块
const stu = require('./routers/stu');

// 创建服务器
const app = express();

// 挂载中间件
app.use(express.urlencoded({extended:false}))

// 业务处理代码
// 1. 托管静态资源
app.use(express.static('views'))

// 注册路由模块
app.use('/stu',stu)


// 挂载错误处理中间件
app.use((err,req,res,next)=>{
    console.log(`<h1>500 , ${err.massage}</h1>`)
    res.send(`<h1>500 , ${err.massage}</h1>`)
    next()
})

// 绑定端口
app.listen(3000, function () {
    console.log('server is running at http://127.0.0.1:3000')
});