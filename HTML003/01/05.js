// 演示路径处理功能
const path = require("path");

const fileName = path.join('./a' , '/b' , 'c','readme.txt')


// __dirname , 执行命令的当前文件夹
const fileName1 = path.join(__dirname,'./a' , '/b' , 'c','readme.txt')

console.log(fileName,'\n', fileName1)


// 获得文件名
var allName = path.basename(fileName1)
console.log(allName)

// 获得扩展名
var extName = path.extname(fileName1)
console.log(extName)