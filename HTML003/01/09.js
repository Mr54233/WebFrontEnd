// 实用的 web 服务器
// 请求的url 地址就是服务器上实际存放地址

const http = require("http"),
	fs = require("fs"),
	path = require("path");

const app = http.createServer();

app.on("request", (req, res) => {
	let url = req.url;
	// 根据请求的的地址拼接出文件所在地址
	let fileName = path.join(__dirname, url);
	fs.readFile(fileName, "utf-8", (err, data) => {
		if (err) {
			console.log("err.message", err.message);
			res.end();
		} else {
			res.end(data);
		}
	});
});

app.listen(3000, () => {
	console.log("服务器运行在 http://127.0.0.1:3000");
});
