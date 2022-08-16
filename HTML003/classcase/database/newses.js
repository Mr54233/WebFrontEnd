// 获取新闻

const db = require("./db");

function getAllNews(callback) {
	let sql = `select * from newses`;

	db.query(sql, (err, result) => {
		callback(result);
	});
}

module.exports = {
	getAllNews,
};
