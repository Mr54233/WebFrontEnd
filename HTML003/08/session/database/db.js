// 建立和数据库服务器之间的连接的自定义模块
const MySQL = require("mysql");

const db = MySQL.createPool({
	host: 'localhost',
	user: "root",
	password: "admin123456",
	database: "testdb",
});

module.exports = db;
