// 需求 , 将html文件中的样式代码拆分出来写入到index.css文件中去
// 需求 , 将html文件中的js代码拆分出来写入到index.js文件中去
//      , 将html代码拆分出来 , 写入到clock.html中去 

// 1.1 导入 fs 模块
const fs = require("fs");
// 1.2 导入 path 模块
const path = require("path");

// 1.3 定义正则表达式，分别匹配<style></style>和<script></script>标签
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

// 2.1 调用 fs.readFile()方法读取文件
fs.readFile(
	path.join(__dirname, "index.html"),
	"utf8",
	function (err, dataStr) {
		// 2.2 读取 HTML 文件失败
		if (err) return console.log("读取HTML文件失败" + err.name.message);
		// 2.3 读取文件成功，调用对应的学习方法，分别拆解出 css,js,html文件
		resolveCSS(dataStr);
		resolveJs(dataStr);
		resolveHTML(dataStr);
	}
);

//**?3.1 定义处理 css 样式的方法
function resolveCSS(htmlStr) {
	// 3.2 使用正则提取需要的内容
	const r1 = regStyle.exec(htmlStr);
	// 3.3 将提取出来的样式字符串，进行字符串的replace 替换操作
	const newCss = r1[0].replace("<style>", "").replace("</style>", "");
	// 3.4 调用fs.writeFile方法，将提取的样式，写入到clock目录中 index.css 的文件里面
	fs.writeFile(
		path.join(__dirname, "./clock/index.css"),
		newCss,
		function (err) {
			if (err) return console.log("写入CSS样式失败！" + err.message);
			console.log("写入CSS文件成功！");
		}
	);
}

//**?  4.1 定义处理 js 脚本的方法
function resolveJs(htmlStr) {
	//4.2通过正则，对应的<script></script>标签内容
	const r2 = regScript.exec(htmlStr);
	// 4.3 将提取出来的内容，做进一步的处理
	const newJs = r2[0].replace("<script>", "").replace("</script>", "");
	// 4.4
	fs.writeFile(
		path.join(__dirname, "./clock/index.js"),
		newJs,
		function (err) {
			if (err) return console.log("写入JS样式失败！" + err.message);
			console.log("写入JS脚本成功！");
		}
	);
}

// **? 5.1 处理HTML结构的方法
function resolveHTML(htmlStr) {
	// 5.2 将字符串调用 replace 方法，把内嵌的style 和 cript 标签 ，替换为外联的 link 和 script 标签
	const newHTML = htmlStr
		.replace(regStyle, '<link rel="stylesheet" href="./index.css" />')
		.replace(regScript, '<script src="./index.js"></script>');
	// **? 5.3写入 index.html文件
	fs.writeFile(
		path.join(__dirname, "./clock/index.html"),
		newHTML,
		function (err) {
			if (err) return console.log("写入HTML文件失败!" + err.message);
			console.log("写入HTML文件成功！");
		}
	);
}
// **!注意点：fs.readFile()写入同一个文件，不能用来创建路径
// **?重复使用fs.writeFile()写入同一个文件，新写入的内容会覆盖之前的旧内容
