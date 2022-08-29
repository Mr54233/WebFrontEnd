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
server.get("/list", (req, res) => {
	var time = Math.ceil(Math.random() * 99) + 100;
	setTimeout(() => {
		res.send("hello world");
	}, time);
	// throw new Error('服务器发生了不可预知的错误')
	// var num = Math.ceil(Math.random() * 99) + 100;
	// if(num<50){
	//     res.send({status:0,data:'hello world'})
	// } else {
	//     res.send({status:1,data:'服务器发生了错误'})
	// }
});
server.get("/adata", (req, res) => {
	var time = Math.ceil(Math.random() * 99) + 100;
	setTimeout(() => {
		res.send("hello Tom");
	}, time);
});
server.get("/bdata", (req, res) => {
	var time = Math.ceil(Math.random() * 99) + 100;
	setTimeout(() => {
		res.send("hello Jerry");
	}, time);
});

server.listen(port, () => console.log(`http://127.0.0.1:${port}`));
