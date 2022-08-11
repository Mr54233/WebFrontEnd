// 查询数据库中的数据

// // 1. 导入mysql包
// const mysql = require("mysql");

// // 2. 连接数据库
// const db = mysql.createPool({
// 	// 数据库服务器的主机名或者ip地址
// 	host: "localhost",
// 	// 访问数据库的用户名
// 	user: "root",
// 	// 登录用户的登陆密码
// 	password: "admin123456",
// 	// 访问的数据库名
// 	database: "bookshop",
// });

const db =  require("./db")

// 3. 执行sql语句完成数据操作

/*
var sql = `select * from users`;
db.query(sql,(err,result)=>{
    if(err){
        console.log('err.message',err.message)
    } else {
        console.log('result',result)
        // 打印出一个数组
    }
})
*/


//  查询年龄大于20的用户的姓名和密码
var age = 20;
// sql语句中使用占位符?来表明此处会合并进来一个参数
var sql = 'select uname,password from users where age > ?'

// var sql = `select uname,password from users where age > 20`


// 第二个参数可能是填充进来的值 , 可能不止一个写成数组
db.query(sql,[age],(err,result)=>{
    if(err){
        console.log('err.message',err.message)
    } else {
        console.log('result',result)
        // 打印出一个对象数组
    }
}) 

