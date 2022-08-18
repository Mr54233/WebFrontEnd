// 操作newses 表的自定义模块

const db = require("./db");

function getAllNews(count, callback) {
	if (count === "") {
		var sql = `select * from newses`;
		db.query(sql, (err, result) => {
			callback(result);
		});
	} else {
		var sql = `select * from newses limit ?,5`;
		db.query(sql, (count-1)*5, (err, result) => {
			callback(result);
		});
	}
}

module.exports = {
	getAllNews,
};
