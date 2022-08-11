// 操作用户表的自定义模块

const db = require("./db");

// 查询所有
function getList(callback) {
	db.query("select * from users", (err, result) => {
		// 一般在业务处理函数中不处理异常 ,
		// 异常交给系统的异常处理子系统统一进行处理

		callback(result);
	});
}
