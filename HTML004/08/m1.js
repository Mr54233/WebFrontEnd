// ES6模块化规范的模块

// 一个模块中可以有若干个按需导出
// let a = 10;
export let a = 10;
let b = 20;
export let c = 30;

export function show() {
	console.log(demo);
}

// 使用export default 进行模块的导出
// 暴露模块成员

// 一个模块只能有一次默认导出
// 如果模块没有导出任何成员 , 其他模块导入一个空对象
/* export default {
	a,
	b,
	// c,
	show,
};
 */
