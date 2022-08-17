// 操作商品数据的自定义模块
const db = require("./db");

function getPage(pageIndex, pageSize, callback) {
	// 编写sql语句
	var sql = `select * from iwebshop_goods limit ?,?`;
	// 处理参数
	var skip = (pageIndex - 1) * pageSize;

	// 执行sql语句
	db.query(sql, [skip, pageSize], (err, goods) => {
        // 异常交给子系统处理
        // 处理函数运行的结果 : 因为是异步执行的 , 所以结果是交给回调函数处理
        callback(goods);
    });
}

module.exports = getPage