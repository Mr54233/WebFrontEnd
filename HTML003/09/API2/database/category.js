// 操作商品数据的自定义模块
const db = require("./db");

function getPage(pageIndex, pageSize, callback) {
	// 编写sql语句
	var sql = `select * from categories limit ?,?`;
	// 处理参数
	var skip = (pageIndex - 1) * pageSize;

	// 执行sql语句
	db.query(sql, [skip, pageSize], (err, categories) => {
		// 异常交给子系统处理
		// 处理函数运行的结果 : 因为是异步执行的 , 所以结果是交给回调函数处理
		callback(categories);
	});
}

// 按照类型名称进行查询
function findByName(cname, callback) {
	var sql = `select * from categories where cname = ?`;
	db.query(sql, cname, (err, categories) => {
		callback(categories);
	});
}
// 按照id查找数据
function findById(cid, callback) {
	var sql = `select * from category where cname = ?`;
	db.query(sql, cid, (err, category) => {
		callback(category);
	});
}
// 新增
function add(category, callback) {
	var sql = `insert into categories(cname) value(?)`;
	db.query(sql, category, (err, result) => {
		callback(result);
	});
}

// 修改
function update(category, callback) {
	var sql = `update categories set cname=? where cid=?`;
	db.query(sql, [category.cname, category.cid], (err, category) => {
		callback(category);
	});
}

module.exports = {
	getPage,
	add,
	findByName,
	findById,
	update,
};
