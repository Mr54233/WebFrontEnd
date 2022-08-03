//暴露方式二：exports.xxx = value

//可以往export对象中不断地添加属性，进行暴露

exports.foo1 = function () {
	console.log("module3 中的 foo1 方法");
};

exports.foo2 = function () {
	console.log("module3 中的 foo2 方法");
};