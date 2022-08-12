// 新增数据

const db =  require("./db")

// 完成新增

var uname = '小明'
var password = '22222'

var sql = 'insert into users(uname,password) values(?,?)'

db.query(sql,[uname,password],(err,result)=>{
    if(err){
        console.log('err.message',err.message)
    } else {
        // console.log('result',result)
        // 打印出一个对象数组

        // 影响到的行数大于0 表示 完成了新增
        if(result.affectedRows > 0){
            console.log('用户新增成功, 用户id是',result.insertId)
        }
    }
}) 
