const express = require('express')
const app = express()
const port = 3000

// 挂载路由
app.use('/',(req,res)=>{
    console.log('home page ')
    throw new Error('自己抛出的异常')
    // var x = 10 / 0 ;
    // console.log(x)
    res.send('<h1>HOME PAGE </h1>')
})
app.use('/reg',(req,res)=>{
    res.send('<h1>REG USER PAGE </h1>')
})
// 挂载错误级别的中间件
// 错误级别的中间件 , 处理请求的过程中 ,中间件函数或者路由函数中发送了异常 , 并且异常还没有得到处理

app.use(function(err,req,res,next){
    console.log(err.message)
    res.send(`<h1>500,${err.message}</h1>`)
    next()
})

app.listen(port, () => console.log(`Example app listening on  http://127.0.0.1:${port}`))