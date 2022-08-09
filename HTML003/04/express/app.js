const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

//托管静态资源
app.use(express.static('public'))

// 注册中间件
// app.use(require('./mymodules/getPostData'))

// 使用express内置的urlencoded 中间件 来接受post提交的数据
// 接收到的数据保存在req.body属性中
// app.use(express.urlencoded({extended:false}))
// 注册第三方中间件
app.use(bodyParser.urlencoded({extended:false}))

// 注册路由
app.post('/reg',(req,res)=>{
    res.send(req.body)
})

app.listen(port, () => console.log(`Example app listening on  http://127.0.0.1:${port}`))