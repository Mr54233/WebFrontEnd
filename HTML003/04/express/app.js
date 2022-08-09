const express = require('express')
const app = express()
const port = 3000

//托管静态资源
app.use(express.static('public'))

// 注册中间件
app.use(require('./mymodules/getPostData'))

// 注册路由
app.post('/reg',(req,res)=>{
    res.send(req.body)
})

app.listen(port, () => console.log(`Example app listening on  http://127.0.0.1:${port}`))