// 需求 : 读取files/1.txt文件中的内容并打印出来

// 1. 导入fs模块
const fs = require('fs')

// 2. 读取指定文件中的内容
// 第一个参数就是带路径的文件名 , 路径可以是相对路径
// 回调函数第一个参数记录读取文件内容过程中发生的异常
// 回调函数的第二个参数记录读取文件的编码方式 默认编码为'utf-8'
// 回调函数的第三个参数记录了读取文件的内容
fs.readFile('../files/1.txt','utf-8' , (err , result)=>{
    if(err){
        // 发生了异常 , 打印异常的原因
        console.log(err.message);
    } else {
        // 没有发生异常 , 打印文件内容
        console.log('文件内容是' ,result);
        console.log('文件内容是' ,result.toString());
    }
})