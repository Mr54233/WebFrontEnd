const express = require("express");
const cors = require("cors");
const JWT = require("jsonwebtoken");
const expressJWT = require("express-jwt");

const app = express();

const port = 9999;

// 挂在中间件

// 跨域访问
app.use(cors());

// 挂载和配置JWT 中间件

// 1. 设置密钥
const secretKey = "i love you";

// 2. 配置express-jwt
// unless() ; 配置那些地址的请求不需要解密来验证身份
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }));

app.listen(port, () =>
	console.log(`Example app listening on port http://127.0.0.1:${port}`)
);
