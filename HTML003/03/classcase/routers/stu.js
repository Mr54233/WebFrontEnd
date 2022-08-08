// 学生管理功能的路由模块

const express = require("express");
const path = require("path");
const fs = require("fs");
const route = express.Router();

// 学生列表
route.get("/list", (req, res) => {
	// /list?page=2 获取页码数据
	let pageIndex = 1; // 默认页码是第一页
	if (req.query.page) {
		pageIndex = req.query.page; // 设置页码为请求的页码
	}

	var pageSize = 3; // 每页的条数 不建议写在源代码内

	// 读取data.jason 中的数据 , 并且获取到对应页码的学生数据
	let dfile = path.join(__dirname, "../data.json");
	fs.readFile(dfile, "utf-8", (err, data) => {
		if (err) {
			console.log("err.message", err.message);
		} else {
			// 所有学生的数组
			let all = JSON.parse(data);
			// 开始下标
			let start = (pageIndex - 1) * pageSize;
			// 结束下标
			let end = pageIndex * pageSize;
			// 处理不满一页的情况
			end = end < all.length ? end : all.length;

			// 拼接html代码
			let html = `<tbody class="tb">`;
			for (var i = start; i < end; i++) {
				html += `<tr>
                            <td>${all[i].no}</td>
                            <td>${all[i].name}</td>
                            <td>${all[i].birthday}</td>
                            <td>${all[i].address}</td>
                            <td><a class='btnDel' href='JavaScript:;'>删除</a></td>
                        </tr>`;
			}
			html += `</tbody>`;
			// 读取学生列表的模板文件
			let tfile = path.join(__dirname, "../views", "list.html");
			fs.readFile(tfile, "utf-8", (err, htmlStr) => {
				// 替换动态内容
				let reg = /<tbody class='tb'>[\s\S]*<\/tbody>/g;
				htmlStr = htmlStr.replace(reg, html);
				res.send(htmlStr);
			});
		}
	});
});
// 处理新增的学生数据
route.post("/add", (req, res) => {});

module.exports = route;
