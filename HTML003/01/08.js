// 1. 获取请求的url地址
// 2. 设置默认的相应内容是 404 Not Found
// 3. 判断用户的请求是否为 / 或 /index.html
// 4. 判断用户请求的是否为 /about.html
// 5. 设置Content-Type 响应头 , 防止中文乱码

const http = require("http");

const app = http.createServer();

app.on("request", (req, res) => {
	// 根据请求的地址不同 , 返回给浏览器不同的内容
	const url = req.url;
	let content = "404 Not Found";
	if (url === "/" || url === "/index.html") {
		content = "<h1>首页</h1>";
	} else if (url === "/about.html") {
		content = "<h1>关于我页面</h1>";
	}
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end(content);
});

app.listen(3000, () => {
	console.log("server run at 127.0.0.1:3000");
});
