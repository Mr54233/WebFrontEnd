const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// 设置模板引擎
app.engine("art", require("express-art-template"));

// 设置模板文件所在的文件夹
// app.set('views','pagers')
app.set("views", path.join(__dirname, "pagers"));

// 设置模板文件的默认扩展名为 art ,使用模板文件时 可以省略扩展名
app.set("view engine", "art");

// 挂在路由
app.get("/", (req, res) => {
	res.render("index", { name: "Lisi" });
});

app.get("/var", (req, res) => {
	res.render("var", {
		value: "welcome you ",
		a: true,
		b: 100,
		c: 3000,
		employee: {
			name: "小亮",
			salary: 8000,
		},
		span: '<a href="#"> 百度 </a>',
	});
});

app.get("/if", (req, res) => {
	res.render("if", {
		pager: {
			pageIndex: 3,
			pages: 3,
		},
	});
});

app.get("/list", (req, res) => {
	res.render("list", {
		stus: [
			{
				no: '001',
				name: "张三",
				address: "江西南昌",
			},
			{
				no: '002',
				name: "李四",
				address: "江西赣州",
			},
		],
	});
});

app.get('/about',(req,res)=>{
    res.render('about',{})
})

app.get('/mobile',(req,res)=>{
    res.render('mobile',{})
})
app.get('/computer',(req,res)=>{
    res.render('computer',{})
})

// 启动服务器
app.listen(port, () =>
	console.log(`Example app listening on port http://127.0.0.1:${port}`)
);
