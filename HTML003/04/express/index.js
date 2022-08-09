const express = require("express");
const app = express();
const port = 8888;

// 定义一个最简单的中间件
const mw = function (req, res, next) {
	console.log("执行了最简单的中间件处理逻辑");
	// 放行 : 放行到下一个中间件或者路由处理函数
	next();
};
// 将中间件挂载到web服务器对象上
app.use(mw);
// 简化写法
// app.use((req, res, next)=>{
// 	console.log("执行了最简单的中间件处理逻辑");
// 	// 放行 : 放行到下一个中间件或者路由处理函数
// 	next();
// });

// 挂载多个路由函数
app.get('/' , (req,res)=>{
    console.log('执行了 / 这个路由函数')
    res.send('<h1>Home page </h1>')
})

app.get('/about' , (req,res)=>{
    console.log('执行了 /about 这个路由函数')
    res.send('<h1>About page </h1>')
})

app.listen(port, () => {
	console.log(`http://127.0.0.1:${port}`);
});
