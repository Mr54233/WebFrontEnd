const express = require("express");
const cors = require("cors");

const server = express();
const port = 3000;

// 挂载中间件

// 允许跨域访问
server.use(cors());
// 托管静态资源
server.use(express.static("public"));
// 接收json和post数据
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// 挂载路由
server.use('/api/book',require('./routes/books'))

server.listen(port, () => console.log(`http://127.0.0.1:${port}`));
