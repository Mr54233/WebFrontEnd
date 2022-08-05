// 在模块中定义一个变量和函数
// 在模块中定义的变量和函数只能在模块内部进行访问

var userName = "ZhangSan";
function sayHi() {
	console.log("你好我是" + userName);
}
sayHi();

// 暴露出模块中的username属性和sayHi函数

module.exports.userName = userName
module.exports.sayHi = sayHi