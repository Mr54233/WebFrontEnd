// 修改功能

const db = require("./db");

var uid = 7;
var age = 50;
var state = 1;

var sql = "update users set age = ? , state = ? where uid = ?";

db.query(sql, [uid, state, age], (err, result) => {
	if(err){
        console.log('err.message',err.message)
    } else {
        // console.log('result',result)
        // 打印出一个对象数组

        // 影响到的行数大于0 表示 完成了修改
        if(result.affectedRows > 0){
            console.log('修改用户数据成功')
        }
    }
});
