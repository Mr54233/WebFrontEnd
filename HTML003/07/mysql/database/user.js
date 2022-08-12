// 操作用户表的自定义模块

const db = require("./db");

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
function isExist(uname,callback){
	var sql = `select * from users where uname = ?`
	db.query(sql,uname,(err,result)=>{
		callback(result.length)
	})
}


// 删除用户
function deleteUser(uid, callback) {
	var sql = "update users set state = 1 where uid = ?";
	db.query(sql, uid, (err, result) => {
		callback();
	});
}

// 编辑更新用户
function updateUser(uid,callback){
    var sql = "select * from users where uid = ?"
    db.query(sql,uid,(err,result)=>{
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
    })
}


module.exports = {
	getList,
	add,
	deleteUser,
    updateUser,
	isExist
};
