// 图书管理的路由模块

const express = require("express");
const bookdb = require("../database/books");

const route = express.Router();

route.post("/add", (req, res) => {
	let book = req.body;
	// 1. 检查图书是否已经存在 , 如果存在了 , 就抛出错误
	// bookdb.isExist(book.title, (result) => {
	// 	if (result) {
	// 		return res.send({
	// 			status: 1,
	// 			message: "图书已经存在 , 不能新增",
	// 		});
	// 	} else {
	// 		bookdb.read((books) => {
	// 			bookdb.push(book);
	// 			bookdb.write(books, () => {
	// 				res.send({
	// 					status: 0,
	// 					message: "新增成功",
	// 				});
	// 			});
	// 		});
	// 	}
	// });
	bookdb
		.isExist(book.title)
		.then(function (result) {
			if (result) {
				res.send({
					status: 1,
					message: "图书已经存在",
				});
			} else {
				return bookdb.read();
			}
		})
		.then(function (books) {
			books.push(book);
			return bookdb.write(books);
		})
		.then(function () {
			res.send({
				status: 0,
				message: "新增成功",
			});
		});
	// 2. 保存图书信息
});

module.exports = route;
