- [re 前端路由](#re-前端路由)
- [re 前后端交互](#re-前后端交互)
- [async await](#async-await)
	- [API Server 服务器](#api-server-服务器)
- [Promise 常用的 API](#promise-常用的-api)
- [接口调用-fetch 用法](#接口调用-fetch-用法)
	- [fatch 概述](#fatch-概述)
	- [fetch 基本用法](#fetch-基本用法)
	- [fetch 请求参数](#fetch-请求参数)
		- [1. 常用配置](#1-常用配置)
		- [2. GET 方式的参数传递](#2-get-方式的参数传递)
		- [3. DELETE 方式的参数传递](#3-delete-方式的参数传递)
		- [4. POST 方式的参数传递](#4-post-方式的参数传递)
		- [5. PUT 方式的参数传递](#5-put-方式的参数传递)
	- [1. 响应数据格式](#1-响应数据格式)

# re 前端路由

-   嵌套路由 children
-   动态路由
    -   /静态路由/:变量名 props:
    -   $router.params.变量名
-   编程式导航
    -   this.$router.push('路径') 跳转到路径指定的组件
    -   this.$router.go(n) n 为整数 , 正为进 , 负为退

# re 前后端交互

-   Promise :

```js
//1.
new Promise(function (resolve, reject) {
	// 完成异步任务的代码
});
// 2.
p.then(
	function (data) {},
	function (info) {}
);
//2.1
p.then(function (data) {})
	.catch(function (info) {})
	.finally(function () {});
```

# async await

1. async 修饰一个函数 , 让函数变成异步调用的函数
2. await 修饰函数调用 , 让函数调用变成同步调用 , 等待到函数执行的结果
    - 约束 : await 方式调用函数必须写在 async 函数中

## API Server 服务器

app.js -> 路由(路由函数) -> 数据库操作函数(异步操作)

-   数据库操作: 返回 promise 对象
-   路由函数 : 用 async 进行修饰 , 调用函数用 await 修饰调用数据库操作函数

nms 数据库 categories 类型表

api http://localhost:3000

-   URL : /api/category/page
-   请求提交的方式 : GET
-   功能 : 分页显示类型数据
-   参数 : ?curr=1&limit=5
    -   curr : 当前页的页码 , 可以省略 , 默认为 1
    -   limit : 每页条数 , 可以省略 , 默认为 5
-   返回参数 :

```js
{
	status:0,   // 是否成功 , 0 为成功 , 1 为失败
	message:'', //失败原因
	data:[],    // 本页的数据
	total:100,  // 总记录数
}
```

-   URL : /api/category/save
-   请求提交的方式 : POST
-   功能 : 新增或者修改类型数据
-   参数 : ?cid=15&cname=演练
    -   cid : 代表的是类型编号 , 可以省略 , 如果没有的话表示的是新增类型 , 有的话就是修改
    -   cname : 类型名称
-   返回参数 :

```js
{
	status:0,   // 是否成功 , 0 为成功 , 1 为失败
	message:'', //失败原因
}
```

-   URL : /api/category/getSingle
-   请求提交的方式 : GET
-   功能 : 根据 cid 查询到一条类型数据
-   参数 : ?cid=15
    -   cid : 类型编号
-   返回参数 :

```js
{
	status:0,   // 是否成功 , 0 为成功 , 1 为失败
	message:'', //失败原因
	data:{}
}
```

-   URL : /api/category/remove
-   请求提交的方式 : GET
-   功能 : 根据 cid 删除一条类型数据
-   参数 : ?cid=15
    -   cid : 类型编号
-   返回参数 :

```js
{
	status:0,   // 是否成功 , 0 为成功 , 1 为失败
	message:'', //失败原因
}
```

-   /database 数据库操作的自定义模块
    -   db.js 建立数据库连接
    -   category.js 操作 categories 表的增删改查函数
-   /routers 路由模块
    -   

# Promise 常用的 API

1. 实例方法
    - p.then()得到异步任务的正确处理结果
    - p.catch()获取异常信息
    - p.finally()成功与否都会执行（尚且不是正式标准）
2. 对象方法
    - Promise.all() 并发处理多个异步任务，所有任务都执行完毕得到处理结果
    - Promise.race() 并发处理多个异步任务，只要一个任务执行完毕得到处理结果

# 接口调用-fetch 用法

## fatch 概述

1. 基本特性
    - Fetch API 是新的 ajax 解决方案 Fetch 会返回 Promise
    - fetch 不是 ajax 的进一步封装，而是原生 js，没有使用 `XMLHttpRequest` 对象。
    - fetch(url, options).then(）
2. 语法结构

```js
fetch(url)
.then(fn2)
.then(fn3)
...
.catch(fn)
```

## fetch 基本用法

```js
fetch("/abc")
	.then((data) => {
		return data.text();
	})
	.then((ret) => {
		// 注意这里才是得到的最终数据
		console.log(ret);
	});
```

## fetch 请求参数

### 1. 常用配置

-   method （String）：HTTP 请求方式，取值 `GET`、`POST`、`PUT`、`DELETE`，默认 `GET`
-   body （String): HTTP 请求参数
-   header (Object):HTTP 请求头，默认为{}

```js
fetch("/abc", {
	method: "get",
})
	.then((data) => {
		return data.text();
	})
	.then((ret) => {
		// 注意这里得到的才是最终的数据
		console.log(ret);
	});
```

### 2. GET 方式的参数传递

```js
fetch("/abc?id=123")
	.then((data) => {
		return data.text();
	})
	.then((ret) => {
		// 注意这里才是得到的最终数据
		console.log(ret);
	});
```

```js
fetch("/abc/123", {
	method: "get",
})
	.then((data) => {
		return data.text();
	})
	.then((ret) => {
		// 注意这里得到的才是最终的数据
		console.log(ret);
	});
```

### 3. DELETE 方式的参数传递

```js
fetch("/abc/123", {
	method: "delete",
})
	.then((data) => {
		return data.text();
	})
	.then((ret) => {
		// 注意这里得到的才是最终的数据
		console.log(ret);
	});
```

### 4. POST 方式的参数传递

```js
fetch("/books", {
	method: "post",
	body: "uname=lisi&pwd=123",
	header: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
})
	.then((data) => {
		return data.text();
	})
	.then((ret) => {
		// 注意这里得到的才是最终的数据
		console.log(ret);
	});
```

```js
fetch("/books", {
	method: "post",
	body: JSON.stringify({
		uanem: "lisi",
		age: 12,
	}),
	header: {
		"Content-Type": "application/json",
	},
})
	.then((data) => {
		return data.text();
	})
	.then((ret) => {
		// 注意这里得到的才是最终的数据
		console.log(ret);
	});
```

### 5. PUT 方式的参数传递

```js
fetch("/books/123", {
	method: "put",
	body: JSON.stringify({
		uanem: "lisi",
		age: 12,
	}),
	header: {
		"Content-Type": "application/json",
	},
})
	.then((data) => {
		return data.text();
	})
	.then((ret) => {
		// 注意这里得到的才是最终的数据
		console.log(ret);
	});
```

## 1. 响应数据格式

data.text() 将返回体处理成字符串

data.json() 返回结果和 JSON.parse(responseText)一样

```js
fetch("/abc" then(data=>{
    // return data.text()
    return data.json()
}))
	.then((ret) => {
		console.log(ret);
	});
```

