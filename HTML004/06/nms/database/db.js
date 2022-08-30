// 建立数据库连接的自定义模块

const mysql = require("mysql");

module.exports = mysql.createPool({
	// 数据库服务器的主机名或者ip地址
	host: "localhost",
	// 访问数据库的用户名
	user: "root",
	// 登录用户的登陆密码
	password: "admin123456",
	// 访问的数据库名
	database: "nms",
});
