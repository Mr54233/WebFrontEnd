// 获取浏览器端 , 通过 post 方式提交的数据的中间件(express)

const qs = require("querystring");

module.exports = function (req, res, next) {
	var result = "";

	req.on("data", (chunk) => {
		result += chunk;
	});

	req.on("end", () => {
		req.body = qs.parse(result);
		next();
	});
};
