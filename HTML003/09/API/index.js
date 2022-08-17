const express = require("express");
const cors = require('cors')

const app = express();

const port = 8080;

// 挂载中间件
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// 挂载路由
app.use("/api/goods", require("./routers/goodsRoute"));

// 异常处理
app.use((err,req,res,next)=>{
    if(err){
        console.log(err.message)
        res.send(err.message)
    }
})

app.listen(port, () => console.log(`http://127.0.0.1:${port}`));
