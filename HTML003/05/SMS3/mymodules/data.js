// 专门负责读写文件
const path = require('path')
const fs = require('fs')

const app = express()

app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000")
})