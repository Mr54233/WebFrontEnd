const fs = require("fs");
const path = require("path");

// 读取books.json记录的所有图书的信息
function read() {
	return new Promise(function (resolve, reject) {
		let fileName = path.join(__dirname, "books.json");
		fs.readFile(fileName, (err, books) => {
			resolve(JSON.parse(books.toString()));
		});
	});
}

// 写数据
function write(books) {
	return new Promise(function (resolve, reject) {
		let fileName = path.join(__dirname, "books.json");
		fs.writeFile(fileName, JSON.stringify(books), (err) => {
			resolve();
		});
	});
}

// 判断图书是否已经存在
function isExist(title) {
	return new Promise(function (resolve, reject) {
		read().then(function (books) {
			resolve(books.some((books) => books.title == title));
		});
	});
	// read((books) => {
	// 	var result = books.some((books) => books.title == title);
	//     callback(result)
	// });
}

module.exports = {
	read,
	write,
	isExist,
};
