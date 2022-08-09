const express = require("express");
const app = express();
const port = 8888;

// 定义一个最简单的中间件
const mw = function (req, res, next) {
	// if (res.url == "/err.html") {

	// 如果不放行 , 一般逻辑上有问题了 , 比如说用户没有权限
	// 所以此时一般要跳转到错误提示页面 ,
	// res.redirect('url'); // 响应对象的redirect方法可以将流程重定向到另一个地址
	// res.redirect("/err.html");
	// } else {
	// next();
	// }

	console.log("执行了第一个中间件逻辑");
	console.log("req.x", req.x);
	// 放行 : 放行到下一个中间件或者路由处理函数
	next();
};

const mw2 = (req, res, next) => {
	console.log("执行了第二个中间件逻辑");
	// 中间件中通过给req请求对象自定义属性 , 就可以向下游的中间件或路由传递参数
	req.x = 100;
	// 放行 : 放行到下一个中间件或者路由处理函数
	next();
};

// 将中间件挂载到web服务器对象上
// 根据挂载的先后顺序来执行中间件函数中的代码
// 局部生效的中间件
//  1. 使用get 或者 post 函数来挂载
//  2. 添加路径前缀 ,
// app.get('/',mw)
app.use(mw2);
app.use(mw);
// 简化写法
// app.use((req, res, next)=>{
// 	console.log("执行了最简单的中间件处理逻辑");
// 	// 放行 : 放行到下一个中间件或者路由处理函数
// 	next();
// });

// 挂载多个路由函数
// 注册路由模块

// 从理论上来说 , 路由级别的中间件 , 和应用程序级别的中间件没有区别
// 但是如果在注册有中间件的路由模块之前 , 挂载了路由 , 请求这些路由的地址
// 那么就不会执行路由级别的中间件

app.use(require("./routers/second"));
app.use(require("./routers/test"));


app.get("/", (req, res) => {
	console.log("执行了 / 这个路由函数");
	console.log(req.x);
	res.send("<h1>Home page </h1>");
});

app.get("/about", (req, res) => {
	console.log("执行了 /about 这个路由函数");
	res.send("<h1>About page </h1>");
});

app.get("/err.html", (req, res) => {
	res.send("<h1>500 服务器端代码出现问题 , 请重试</h1>");
});

app.listen(port, () => {
	console.log(`http://127.0.0.1:${port}`);
});
