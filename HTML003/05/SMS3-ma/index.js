const express = require('express');
const stuRoute = require('./routes/stu');


const app = express();

// 挂载中间件
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// 设置模板引擎
app.engine('art',require('express-art-template'));

//挂载路由
app.use('/stu',stuRoute);

app.listen(3000,()=>{
    console.log('服务器已经运行在 http://localhost:3000 地址上');
})