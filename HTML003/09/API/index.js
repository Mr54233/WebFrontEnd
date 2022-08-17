const express = require("express");

const app = express();

const port = 8080;

// 挂载中间件
app.use(express.urlencoded({ extended: false }));

// 挂载路由


app.listen(port, () => console.log(`http://127.0.0.1:${port}`));
