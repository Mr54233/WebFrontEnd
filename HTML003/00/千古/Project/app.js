//将其他模块汇集到主模块

let uniq = require("uniq"); //引入时，第三方模块要放在自定义模块的上面

let module1 = require("./modules/module1");
let module2 = require("./modules/module2");
let module3 = require("./modules/module3");

//调用module1对象的方法
module1.foo();

//调用module2的函数
module2(); //注意，在定义时，module2对象等价于整个函数function。所以，module2()的意思是，直接调用了函数。

//调用module3中的属性
module3.foo1();
module3.foo2();

uniq(module3.arr); //将module3中的数组进行去重操作
console.log(module3.arr); //打印数组去重后的结果