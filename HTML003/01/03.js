// 需求 , 在files文件夹中中新建一个文件
// readme.txt , 并写入内容

// 1. 导入文件系统
const fs = require("fs");
// 2. writeFile() 方法可以新建一个文件再写入内容
// 参数1 : 表示文件的存放路径
// 参数2 : 表示要写入的内容
// 参数3 : 写入的编码
// 参数4 : 回调函数
fs.writeFile(
	"../files/readme.txt",
	"my name is rose , my age is 18",
	"utf-8",
	(err, result) => {
		if (err) {
			console.log("err.message", err.message);
		} else {
			// 没有异常 , 成功写文件 , 打印提示信息
			console.log("成功写文件");
		}
	}
);
