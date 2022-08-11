// 这是一个通用模块

// 1. 导入mysql包
const mysql = require("mysql");

// 2. 连接数据库
const db = mysql.createPool({
	// 数据库服务器的主机名或者ip地址
	host: "localhost",
	// 访问数据库的用户名
	user: "root",
	// 登录用户的登陆密码
	password: "admin123456",
	// 访问的数据库名
	database: "bookshop",
});

// 3. 暴露db对象
module.exports = db