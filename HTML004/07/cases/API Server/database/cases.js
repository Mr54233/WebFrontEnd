const db = require("./db");

// 查询单条
function getSingle(title) {
	return new Promise(function (resolve, reject) {
		var sql = `select * from cases where title=?`;
		db.query(sql, title, (err, result) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(result);
			}
		});
	});
}

// 添加将要去完成的事情
function addList(title) {
	return new Promise(function (resolve, reject) {
		var sql = `insert into cases(title) value (?)`;
		db.query(sql, title, (err, result) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(result.affectedRows);
			}
		});
	});
}

// 列表需要完成的事情
function getList() {
	return new Promise(function (resolve, reject) {
		var sql = `select * from cases`;
		db.query(sql, (err, result) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(result);
			}
		});
	});
}

// 标记事情已经完成和取消完成标记
function markComplete(id) {
	return new Promise(function (resolve, reject) {
		var sql = `update cases set completed=1 and completed=0 where id=?`;
		db.query(sql, id, (err, result) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(result);
			}
		});
	});
}

// 全选
function markAll() {
	return new Promise(function (resolve, reject) {
		var sql = `update cases set completed=1`;
		db.query(sql, (err, result) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(result);
			}
		});
	});
}

// 全不选
function markAllNot() {
	return new Promise(function (resolve, reject) {
		var sql = `update cases set completed=0`;
		db.query(sql, (err, result) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(result);
			}
		});
	});
}

// 清除所有已经完成的事情
function clearComplete() {
	return new Promise(function (resolve, reject) {
		var sql = `delete from cases where completed=1`;
		db.query(sql, (err, result) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(result);
			}
		});
	});
}

// 清除所有已经完成的事情
function clearSelect(id) {
	return new Promise(function (resolve, reject) {
		var sql = `delete from cases where id=?`;
		db.query(sql, id, (err, result) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(result);
			}
		});
	});
}

// 统计还有多少件没有完成的事情
function getTotal() {
	return new Promise(function (resolve, reject) {
		var sql = `select count(*) as cnt from cases where completed=0`;
		db.query(sql, (err, result) => {
			if (err) {
				reject(err.message);
			} else {
				resolve(result[0].cnt);
			}
		});
	});
}

module.exports = {
	getSingle,
	addList,
	getList,
	markComplete,
	clearComplete,
	clearSelect,
	getTotal,
	markAll,
	markAllNot,
};
