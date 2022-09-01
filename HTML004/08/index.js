// 导入m1模块

// 默认导入不可以导入模块中按需导出的成员
// es6模块化规范的模块中可以同时存在按需导出和默认导出
// 在模块中可以同时存在按需导入和默认导入

// import m1 from "./m1";
import { a, c, show } from "./m1";

import "./m2";

// console.log(m1);
console.log(a, c, show);

// npm install -D @babel/core @babel/cli @babel/preset-env @babel/node
// npm install -S @babel/polyfill
