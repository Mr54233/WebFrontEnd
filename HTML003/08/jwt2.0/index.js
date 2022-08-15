const express = require("express");
const multiparty = require('connect-multiparty');
const path = require("path");

const app = express();

const port = 3000;

// 挂载中间件
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// 处理上传文件的中间件
const multiMiddle = multiparty({uploadDir:'./files'});

// 挂载处理上传文件的路由
app.post('/reg',multiMiddle,(req,res)=>{
	console.log(req.body , req.fils)
	// if(req.files.photo){
	// 	let fileName = path.join(__dirname,'files',req.files.photo.name);
	// 	req.files.photo.save(fileName)
	// }
})


app.listen(port, () =>
	console.log(`Example app listening on port http://127.0.0.1:${port}`)
);
