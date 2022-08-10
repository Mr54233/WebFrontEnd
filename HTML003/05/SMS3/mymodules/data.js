// 专门负责读写data.json文件 的模块

const path = require("path");
const fs = require("fs");
var fileName = path.join(__dirname, "../data.json");

// 读取文件内容 , 转换成数组返回
function getAll(callback) {
	fs.readFile(fileName, "utf-8", (err, result) => {
		stus = JSON.parse(result);

		// 读取的数据由函数的调用者传入回调函数来处理
		callback(stus);
	});
}

// 写入文件
function writeData(student, callback) {
	// arr 就是读取文件得到的原来的学生数组
	getAll((arr) => {
		arr.push(student);
		fs.writeFile(fileName, JSON.stringify(arr), (err) => {
			callback();
		});
	});
}

module.exports = {
	getAll,
	writeData,
};
