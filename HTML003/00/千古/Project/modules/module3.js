//暴露方式二：exports.xxx = value

//可以往 export 对象中不断地添加属性，进行暴露

exports.foo1 = function () {
	console.log("module3 中的 foo1 方法");
};

exports.foo2 = function () {
	console.log("module3 中的 foo2 方法");
};

exports.arr = [1, 1, 2, 2, 3, 5, 11];