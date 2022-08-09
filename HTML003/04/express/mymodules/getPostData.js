// 获取浏览器端 , 通过 post 方式提交的数据
module.exports = function (req, res, next) {
	// 接收 post 方式提交的学生数据
	// 用于保存post 方式提交的数据 , 默认为空字符串
	var result = "";

	// 请求对象的data事件表示有提交的数据到达了
	// 事件处理函数的参数就记录了接收到的数据
	req.on("data", (chunk) => {
		result += chunk;
	});

	// 请求对象的end事件表示数据已经提交完毕了
	req.on("end", () => {
		// console.log(result)
		// 将字符串格式的数据拆分出一个对象
		let datas = result.split(/&|=/g);

		// 将最后结果的对象作为req的body属性值
		req.body = {};
		for (var i = 0; i < datas.length; i += 2) {
			req.body[datas[i]] = datas[i + 1];
		}

		// console.log(req.body);
        next();
	});
	
};
