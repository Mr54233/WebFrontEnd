// 删除功能

const db = require("./db");

var uid = 5;

var sql = "delete from users where uid > ?";

db.query(sql, [uid], (err, result) => {
	if (err) {
		console.log("err.message", err.message);
	} else {
		// console.log('result',result)
		// 打印出一个对象数组

		// 影响到的行数大于0 表示 完成了删除
		if (result.affectedRows > 0) {
			console.log("删除用户数据成功");
		}
	}
});
