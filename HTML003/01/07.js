// 编写一个最简单的 web 服务器

// 1, 导入http 模块
const { count } = require("console");
const http = require("http");

// 2. 创建 web 服务器对象
const server = http.createServer();

// 3. 为服务器实例对象绑定 request 事件 的 事件处理函数
server.on("request", (req, res) => {
    console.log('req.url',req.url)
	console.log("customer visit our site");
    res.end(`<h1>Welcome you ! count :${count} </h1>`)
});

// 4. 启动服务器
server.listen(3000,()=>{
    console.log('server run at http://127.0.0.1:3000');
})