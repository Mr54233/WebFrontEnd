/**
 * app.js入口模块:
 * 1.创建服务,
 * 2.服务相关配置:模板引擎,body-parser配置,静态服务资源,挂载路由
 * 3.监听端口启动服务
 */
//npm安装并加载express
const express = require('express');
const app = express();
// 加载路由模块
const router = require('./router');
// npm安装并加载body-parser
const bodyParser = require('body-parser');
//公开node_modules和public目录
app.use('/node_modules/', express.static('./node_modules/'));
// npm安装art-template和express-art-template并配置express-art-template(需要在挂载路由之前)
app.engine('html', require('express-art-template'));
// 配置body-parser(需要在挂载路由之前)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 挂载路由
app.use(router);
// 绑定端口
app.listen(3000, function () {
    console.log('server is running at http://127.0.0.1:3000/students')
});