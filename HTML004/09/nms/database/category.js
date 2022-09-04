const db = require("./db");

/// 根据cid查询到一条类型数据
function getSingle(cid) {
	return new Promise(function (resolve, reject) {
		var sql = `select * from categories where cid = ?`;
		db.query(sql, cid, (err, categories) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(categories);
			}
		});
	});
}

// 分页查询
function getPage(pageIndex, pageSize) {
	return new Promise(function (resolve, reject) {
		var start = (pageIndex - 1) * pageSize;
		var sql = `select * from categories limit ? , ?`;
		db.query(sql, [start, pageSize], (err, categories) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(categories);
			}
		});
	});
}

// 查询总记录数
function getTotal() {
	return new Promise(function (resolve, reject) {
		var sql = `select count(*) as cnt from categories`;
		db.query(sql, (err, result) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(result[0].cnt);
			}
		});
	});
}

// 根据cname查询类型数据
function getCategories(cname) {
	return new Promise(function (resolve, reject) {
		var sql = `select * from categories where cname = ?`;
		db.query(sql,cname, (err, categories) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(categories);
			}
		});
	});
}

// 新增类型

function insert(category) {
	return new Promise(function (resolve, reject) {
		var sql = `insert into categories(cname)  value(?)`;
		db.query(sql, category.cname, (err, result) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(result.affectedRows);
			}
		});
	});
}

// 修改类型数据
function update(category) {
	return new Promise(function (resolve, reject) {
		var sql = `update categories set cname=? where cid=?`;
		db.query(sql, [category.cname, category.cid], (err, result) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(result.affectedRows);
			}
		});
	});
}

// 删除类型数据
function remove(cid) {
	return new Promise(function (resolve, reject) {
		var sql = `delete from categories where cid = ?`;
		db.query(sql, [cid], (err, result) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(result.affectedRows);
			}
		});
	});
}

module.exports = {
	getSingle,
	getPage,
	getTotal,
	getCategories,
	insert,
	update,
	remove,
};
