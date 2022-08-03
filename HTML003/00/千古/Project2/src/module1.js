//暴露方式一：module.exports = value

//暴露一个对象出去
module.exports = {
	name: "我是 module1",
	foo() {
		console.log(this.name);
	},
};

//我们不能再继续写 module.exports = xxx。因为重新赋值，会把之前的赋值覆盖掉。