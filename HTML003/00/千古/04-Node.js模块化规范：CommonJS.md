# 前言

网站越来越复杂，js 代码、js 文件也越来越多，会遇到**一些问题**：

-   文件依赖

-   全局污染、命名冲突

程序模块化包括：

-   日期模块

-   数学计算模块

-   日志模块

-   登陆认证模块

-   报表展示模块等。

所有这些模块共同组成了程序软件系统。

一次编写，多次使用，才是提高效率的核心。

# 模块化的理解

## 什么是模块化

### 概念

将一个复杂的程序依据一定的规则(规范) 封装成几个块(文件) , 并组合在一起 .

模块的内部数据, 实现是私有的

只是向外暴露一些接口(方法)与外部其他模块通信.

最早的时候 , 我们会把所有的代码都写在一个 js 文件里 , 那么 , 耦合性很高 , 不利于维护 ;

而且会造成**全局污染** , 很容易命名冲突.

## 模块化的好处

-   避免了命名冲突 , 减少命名空间污染
-   降低耦合性: 更好的分离 , 按需加载
-   **高复用性**: 代码方便复用 , 别人开发的模块直接拿过来就可以使用 , 不需要重发开发类似的功能
-   **高可维护性**: 软件的生命周期中最长的阶段其实并不是开发阶段 , 而是维护阶段 , 需求变更比较频繁 . 使用模块化的开发方式更容易维护.
-   部署方便

# 模块化的规范

## 模块化规范的引入

假设我们引入模块化，首先可能会想到的思路是：在一个文件中引入多个 js 文件。如下：

```html
<body>
	<script src="zepto.js"></script>
	<script src="fastClick.js"></script>
	<script src="util/login.js"></script>
	<script src="util/base.js"></script>
	<script src="util/city.js"></script>
</body>
```

但是这样做会带来很多问题：

-   请求过多：引入十个 js 文件，就有十次 http 请求。

-   依赖模糊：不同的 js 文件可能会相互依赖，如果改其中的一个文件，另外一个文件可能会报错。

以上两点，最终导致：**难以维护**。

于是，这就引入了模块化规范。

## 模块化的概念解读

模块化起源于 Node.js。Node.js 中把很多 js 打包成 package，需要的时候直接通过 require 的方式进行调用（CommonJS），这就是模块化的方式。

那如何把这种模块化思维应用到前端来呢？这就产生了两种伟大的 js：`RequireJS` 和 `SeaJS`。

## 模块化规范

服务器端规范：

-   [**CommonJS 规范**](http://www.commonjs.org/)：是 Node.js 使用的模块化规范。

CommonJS 就是一套约定标准，不是技术。用于约定我们的代码应该是怎样的一种结构。

浏览器端规范：

-   [**AMD 规范**](https://github.com/amdjs/amdjs-api)：是 **[RequireJS](http://requirejs.org/)** 在推广过程中对模块化定义的规范化产出。

```md
-   异步加载模块；

-   依赖前置、提前执行：require([`foo`,`bar`],function(foo,bar){});  
    //也就是说把所有的包都 require 成功，再继续执行代码。

-   define 定义模块：define([`require`,`foo`],function(){return});
```

-   **[CMD 规范]()**：是 **[SeaJS](http://seajs.org/)** 在推广过程中对模块化定义的规范化产出。淘宝团队开发。

```md
同步加载模块；

依赖就近，延迟执行：require(./a) 直接引入。或者 Require.async 异步引入。 //依赖就近：执行到这一部分的时候，再去加载对应的文件。

define 定义模块， export 导出：define(function(require, export, module){});
```

> PS：面试时，经常会问 AMD 和 CMD 的区别。

另外，还有 ES6 规范：import & export。

这篇文章，我们来讲一下`CommonJS`，它是 Node.js 使用的模块化规范。

# CommonJS 的基本语法

## CommonJS 的介绍

[CommonJS](http://www.commonjs.org/)：是 Node.js 使用的模块化规范。也就是说，Node.js 就是基于 CommonJS 这种模块化规范来编写的。

CommonJS 规范规定：每个模块内部，module 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口对象。加载某个模块，其实是加载该模块的 module.exports 对象。

在 CommonJS 中，每个文件都可以当作一个模块：

-   在服务器端：模块的加载是运行时同步加载的。

-   在浏览器端: 模块需要提前编译打包处理。首先，既然同步的，很容易引起阻塞；其次，浏览器不认识`require`语法，因此，需要提前编译打包。

## 模块的暴露和引入

Node.js 中只有模块级作用域，两个模块之间的变量、方法，默认是互不冲突，互不影响，这样就导致一个问题：模块 A 要怎样使用模块 B 中的变量&方法呢？这就需要通过 `exports` 关键字来实现。

Node.js 中，每个模块都有一个 exports 接口对象，我们可以把公共的变量、方法挂载到这个接口对象中，其他的模块才可以使用。

接下来详细讲一讲模块的暴露、模块的引入。

### 暴露模块的方式一： exports

`exports`对象用来导出当前模块的公共方法或属性。别的模块通过 require 函数调用当前模块时，得到的就是当前模块的 exports 对象。

**语法格式**：

```js
// 相当于是：给 exports 对象添加属性
exports.xxx = value;
```

这个 value 可以是任意的数据类型。

**注意**：暴露的关键词是`exports`，不是`export`。其实，这里的 exports 类似于 ES6 中的 export 的用法，都是用来导出一个指定名字的对象。

**代码举例**：

```js
const name = "qianguyihao";

const foo = function (value) {
	return value * 2;
};

exports.name = name;
exports.foo = foo;
```

### 暴露模块的方式二： module.exports

`module.exports`用来导出一个默认对象，没有指定对象名。

语法格式：

```javascript
// 方式一：导出整个 exports 对象
module.exports = value;

// 方式二：给 exports 对象添加属性
module.exports.xxx = value;
```

这个 value 可以是任意的数据类型。

代码举例：

```js
// 方式1
module.exports = {
	name: "我是 module1",
	foo() {
		console.log(this.name);
	},
};

// 我们不能再继续写 module.exports = value2。因为重新赋值，会把 exports 对象 之前的赋值覆盖掉。

// 方式2
const age = 28;
module.exports.age = age;
```

`module.exports` 还可以修改模块的原始导出对象。比如当前模块原本导出的是一个对象，我们可以通过 module.exports 修改为导出一个函数。如下：

```js
module.exports = function () {
	console.log("hello world");
};
```

## exports 和 module.exports 的区别

最重要的区别:

-   使用 exports 时 , 只能单个设置属性`exports.a = a`

-   使用 module.exports 时 , 即单个设置

-   属性`module.exports.a` , 也可以整个赋值`module.exports = obj`.

其他要点:

-   Node 中每个模块的最后 , **都会执行 `return:module.exports`.**

-   Node 中每个模块都会把`module.exports`指向的对象赋值给一个变量`exports` , 也就是说`exports = module.exports`.

-   `module.exports = xxx` , 表示当前模块导出一个单一成员 , 结果就是 xxx.

-   如果需要导出多个成员 , 则必须使用`exports.add = xxx;exports.foo = xxx` . 或者使用 `module.exports.add = xxx;module.exports.foo = xxx`

## 暴露的本质

**暴露的本质是 exports 对象**

比如 ,
方式一的`exports.a = a` 可以理解成是, **给 exports 对象添加属性**
方式二的`module.exports = a` 可以理解为是, **给整个 exports 对象赋值** ,
方式二的`module.exports.a = a` 可以理解为是, **给整个 exports 对象添加属性** ,

# 引入模块的方法 : require

require 函数用来在一个模块中引入另外一个模块 , 传入模块名 , 返回模块导出
对象

## 语法格式:

```js
const module1 = require("模块名");
```

解释：

-   内置模块：require 的是**包名**。

-   下载的第三方模块：require 的是**包名**。

-   自定义模块：require 的是**文件路径**。文件路径既可以用绝对路径，也可以用相对路径。后缀名`.js`可以省略。

### 代码举例:

```js
const module1 = require("./main.js");

const module2 = require("./main");

const module3 = require("Demo/src/main.js");
```

## require()函数的两个作用:

-   执行导入的模块中的代码.

-   返回导入模块中的接口对象.

# 主模块

主模块是整个程序执行的入口，可以调度其他模块。

```bash
# 运行main.js启动程序。此时，main.js就是主模块
$ node main.js
```

# 模块的初始化

一个模块中的 js 代码仅在模块**第一次被使用**的时候执行一次 , 并且在使用过程中进行初始化 , 然后会被缓存起来 , 便于后续继续使用.

代码举例:

1. calModule.js:

```js
var a = 1;

function add() {
	return ++a;
}

exports.add = add;
```

2. main.js
   (在 main.js 中引入 calModule.js 模块)

```js
var addModule1 = require("./calModule");
var addModule2 = require("./calModule");

console.log(addModule1.add());
console.log(addModule2.add());
```

在命令行执行`node main.js` 运行程序 , 打印结果:

```bash
2
3
```

从打印结果中可以看出，`calModule.js`这个模块虽然被引用了两次，但只初始化了一次。

# CommonJS 在服务器端的实现举例

## 1. 初始化项目

在工程文件中新建如下目录和文件

```
module
	|module1.js
	|module2.js
	|module3.js

app.js
```

然后在根目录下新建如下命令:

```
npm init
```

然后根据提示，依次输入如下内容：

-   **包名**：可以自己起包名，也可以用默认的包名。注意，包名里不能有中文，不能有大写。

-   **版本**：可以用默认的版本 1.0.0，也可以自己修改包名。

其他的参数，一路回车即可。效果如下：

![](http://img.smyhvae.com/20180410_1425.png)

于是，根目录下会自动生成`package.json`这个文件。点进去看一下：

```json
{
	"name": "commonjs_node",
	"version": "1.0.0",
	"description": "",
	"main": "app.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "smyhvae",
	"license": "ISC"
}
```
