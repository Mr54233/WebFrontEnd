// 建立数据库连接的自定义模块
const mysql = require('mysql');

module.exports = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'nms'
});