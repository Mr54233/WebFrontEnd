// 操作用户表的自定义模块

const db = require("./db");
const Pager = require("./page");

// 查询所有
function getList(callback) {
	var sql = "select * from users";
	db.query(sql, (err, result) => {
		// 一般在业务处理函数中不处理异常 ,
		// 异常交给系统的异常处理子系统统一进行处理

		// 格式化
		var users = [],
			genders = ["男", "女"],
			states = ["正常", "删除"];
		// console.log(result)
		result.forEach((user) => {
			user.gender = genders[user.gender];
			user.state = states[user.state];
			users.push(user);
		});

		callback(users);
	});
}

// 分页查询用户
function getPage(pageIndex, pageSize, count, callback) {
	// 计算需要跳过的前几页的数量
	var skip = (pageIndex - 1) * pageSize;
	// 分页查询
	var sql = "select * from users limit ?,?";
	db.query(sql, [skip, pageSize], (err, result) => {
		// 查询总记录数
		var sql = "select count(*) as cnt from users";
		db.query(sql, (err, counts) => {
			var cnt = parseInt(counts[0].cnt);
			// console.log('cnt',cnt)
			// 创建分页控件对象
			var pager = new Pager(pageIndex, pageSize, cnt, count);
			// 返回users,pagers
			// 调用回调函数生成html页面
			// 格式化users
			// 格式化
			var users = [],
				genders = ["男", "女"],
				states = ["正常", "删除"];
			// console.log(result)
			result.forEach((user) => {
				user.gender = genders[user.gender];
				user.state = states[user.state];
				users.push(user);
			});
			callback(users, pager);
		});
	});
}

// 新增用户
function add(user, callback) {
	var sql = "insert into users(uname,password,age,gender) values(?,?,?,?) ";
	db.query(
		sql,
		[user.uname, user.password, user.age, user.gender],
		(err, result) => {
			// 注册成功 , 则调用回调函数
			callback();
		}
	);
}

// 带条件(uname)查询用户
function isExist(uname, callback) {
	var sql = `select * from users where uname = ?`;
	db.query(sql, uname, (err, result) => {
		callback(result.length);
	});
}

// 删除用户
function deleteUser(uid, callback) {
	var sql = "update users set state = 1 where uid = ?";
	db.query(sql, uid, (err, result) => {
		callback();
	});
}

// 编辑用户
function editUser(uid, callback) {
	var sql = "select * from users where uid = ?";
	db.query(sql, uid, (err, result) => {
		var users = [],
			genders = ["男", "女"],
			states = ["正常", "删除"];
		// console.log(result)
		result.forEach((user) => {
			user.gender = genders[user.gender];
			user.state = states[user.state];
			users.push(user);
		});

		callback(users);
	});
}

// 更新用户
function updateUser(user, uid, callback) {
	var sql = "update users set uname=?,password=?,age=?,gender=? where uid=?";
	db.query(
		sql,
		[user.uname, user.password, user.age, user.gender, uid],
		(err, result) => {
			// 更新成功 , 则调用回调函数
			callback();
		}
	);
}

module.exports = {
	getList,
	add,
	deleteUser,
	editUser,
	isExist,
	getPage,
	updateUser,
};
