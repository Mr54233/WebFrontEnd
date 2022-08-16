const express = require("express");
const cors = require('cors')
const app = express();
const port = 3000;

// 挂载中间件
// 跨域
app.use(cors())






// 错误
app.use((err,req,res,next)=>{
    if(err){
        console.log('err.message',err.message)
        res
    }
})


app.listen(port, () =>
	console.log(`http://127.0.0.1:${port}`)
);
