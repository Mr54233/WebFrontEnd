// 自定义模块 : 和users 表的数据操作有关的功能

const db = require("./db");

// 验证账号和密码
function findByNameAndPwd(user, callback) {
	// 1. sql语句
	var sql = "select * from users where uname=? and password=?";
	// 2. 执行sql语句
	db.query(sql, [user.uname, user.password], (err, users) => {
		// 一般直接调用回到函数去处理 查询结果
		callback(users);
	});
}

module.exports = {
	findByNameAndPwd,
};
