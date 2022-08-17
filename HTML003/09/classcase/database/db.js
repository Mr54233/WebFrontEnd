const mysql = require('mysql')

const db = mysql.createPool({
    url:'localhost',
    user:'root',
    password:'admin123456',
    database:'testdb'
})

module.exports = db