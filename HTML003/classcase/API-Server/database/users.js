// 操作users表的 自定义模块

const db = require("./db");

function login(user, callback) {
	var sql = `select * from users where uname = ?`;
	db.query(sql, user.uname, (err, result) => {
		callback(result);
	});
}

module.exports = {
	login,
};
