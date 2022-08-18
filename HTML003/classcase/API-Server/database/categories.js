// 操作categories 表的自定义模块

const db = require("./db");

function getAllCate(callback) {
	var sql = `select * from categories`;
	db.query(sql, (err, result) => {
		callback(result);
	});
}

function add(cname, callback) {
	var sql = `select * from categories where cname = ?`;
	db.query(sql, cname, (err, result) => {
		if (result.length > 0) {
			callback({
				status: 555,
				message: "类型名称已存在 , 请重新输入",
			});
		} else {
			var sql = `insert into categories(cname) value(?)`;
			db.query(sql, cname, (err, result) => {
				if (result.affectedRows === 1) {
					callback({
						status: 200,
						message: "添加成功",
					});
				} else {
					callback({
						status: 666,
						message: "添加失败",
					});
				}
			});
		}
	});
}

function deleteCate(cname, callback) {
	var sql = `delete from categories where cname = ?`;
	db.query(sql, cname, (err, result) => {
		if (result.affectedRows === 1) {
			callback({
				status: 200,
				message: "删除成功",
			});
		} else {
			callback({
				status: 666,
				message: "删除失败",
			});
		}
	});
}

function edit(cname, callback) {
	var sql = "select * from categories where cname = ?";
	db.query(sql, cname, (err, result) => {
		callback(result);
	});
}

function update(cate, callback) {
	var sql = `update categories set cname = ? where cid = ?`;
	db.query(sql, [cate.cname, cate.cid], (err, result) => {
		if (result.affectedRows === 1) {
			callback({
				status: 200,
				message: "编辑成功",
			});
		} else {
			callback({
				status: 666,
				message: "编辑失败",
			});
		}
	});
}

module.exports = {
	getAllCate,
	add,
	deleteCate,
	edit,
	update
};
