// 操作users表的 自定义模块

const db = require("./db");

function login(user, callback) {
	var sql = `select * from users where uname = ?`;
	db.query(sql, user.uname, (err, result) => {
		callback(result);
	});
}

function register(user, callback) {
	var sql1 = `select * from users where uname = ?`
	db.query(sql1,user.uname,(err,result)=>{
		if(result.length > 0){
			callback({
				statu:555,
				message:'用户名重复 , 请重新输入用户名'
			})
		} else {
			var sql = `insert into users(uname,password) value(?,?)`;
			db.query(sql, [user.uname, user.password], (err, result) => {
				if(result.affectedRows === 1){
					callback({
						status:200,
						message:'注册成功'
					});
				} else {
					callback({
						status:666,
						message:'注册失败'
					});
				}
			});
		}
	})
}

function getAllUser(callback){
	var sql = `select * from users`
	db.query(sql,(err,result)=>{
		callback(result)
	})
}

module.exports = {
	login,
	register,
};
