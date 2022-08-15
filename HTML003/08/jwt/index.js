const express = require("express");
const cors = require("cors");
const JWT = require("jsonwebtoken");
const {expressjwt} = require("express-jwt");

const app = express();

const port = 9999;

// 挂载中间件
app.use(express.urlencoded({extended:false}))

// 跨域访问
app.use(cors());

// 挂载和配置JWT 中间件

// 1. 设置密钥
const secretKey = "i love you";

// 2. 配置express-jwt
// unless() ; 配置那些地址的请求不需要解密来验证身份
app.use(
	expressjwt({ secret: secretKey , algorithms: ["HS256"]}).unless({
		path: ["/user/login", "/user/reg"],
	})
);

// 挂载路由
app.post("/user/login", (req, res) => {
	if (req.body.uname != "admin" || req.body.password != "123456") {
		res.send({
			status: 400,
			message: "账号不存在或者密码错误",
		});
	} else {
		res.send({
			status: 200,
			message: "登陆成功",
			// 3. 向客户端发送jwt 令牌字符串
			token: JWT.sign({ uname: req.body.uname }, secretKey, {
				expiresIn: "30s",
			}),
		});
	}
});

// 需要身份验证的路由
app.get('/admin/getinfo',(req,res)=>{
    console.log('req.user',req.user)
})

app.listen(port, () =>
	console.log(`Example app listening on port http://127.0.0.1:${port}`)
);
