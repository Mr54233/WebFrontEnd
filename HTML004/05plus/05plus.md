- [前后端交互方式](#前后端交互方式)
  - [接口调用方式](#接口调用方式)
  - [URL 地址格式](#url-地址格式)
- [Promise 用法](#promise-用法)
  - [异步调用](#异步调用)
  - [promise 概述](#promise-概述)
  - [promise 用法 - 1](#promise-用法---1)
  - [基于 Promise 处理 Ajax 请求](#基于-promise-处理-ajax-请求)
    - [1. 处理原生 ajax 请求](#1-处理原生-ajax-请求)
    - [2. 发送多次 ajax 请求](#2-发送多次-ajax-请求)
  - [then 参数中的函数返回值](#then-参数中的函数返回值)
  - [Promise 常用的 API](#promise-常用的-api)
- [编写 api 服务器项目](#编写-api-服务器项目)

# 前后端交互方式

## 接口调用方式

1. 原生 Ajax
2. 基于 jQuery 的 Ajax
3. fetch
4. axios

![](../img/接口调用方式.png)

早前数据格式 : XML(相对臃肿) , WebService

如今数据格式 : json(短小精悍)

## URL 地址格式

1. 传统形式的 URL
    - 格式:scheme://host:port/path?query#fragment
        - scheme : 协议 , 比如 http, https , ftp
        - host : 域名或 IP 地址
        - port : 端口号 , http 协议默认端口号为 80 , 可以忽略
        - path : 路径 , 比如 abc/def
        - query : 查询参数 , 如 uname=zs&age=18
        - fragment : 锚点(哈希 hash) , 用来定位页面的某个位置
2. RESTful 风格的 URL
    - 格式 : scheme://host:port/path/value1/value2/...
    - /:id/:name req.params.id
        - HTTP 请求方式
        - GET : 查询
        - POST : 新增
        - PUT : 修改
        - DELETE : 删除

# Promise 用法

## 异步调用

1.  异步效果分析
    -   定时任务
    -   Ajax
    -   时间函数
2.  多次异步调用的依赖分析
    -   多次异步调用的结果顺序不确定
    -   异步调用的结果存在依赖需要，则需要
    -   进行嵌套

![](../img/调用地狱.png)

## promise 概述

promise 是异步编程的一种解决方案 , 从语法上来说 , promise 是一个对象 , 从他可以获取异步调用的消息

使用 promise 主要有以下的好处:

1. 主要解决异步深层嵌套的问题（回调地狱）
2. promise 提供简洁的 API，是的控制异步操作更加容易

```js
// 回调地狱
$.get("http://localhost:3000/list", function (data) {
	console.log(data);
	$.get("http://localhost:3000/adata", function (data) {
		console.log(data);
		$.get("http://localhost:3000/bdata", function (data) {
			console.log(data);
		});
	});
});
```

## promise 用法 - 1

1. 实例化对象 , 构造函数中传入一个函数 , 该函数用于处理异步任务
2. `resolver`和`reject`两个函数分别用于处理异步任务成功和失败的情况，并通过`p.then`来获取处理结果

```js
// 1. 创建一个promise 对象
//  需要一个函数作为参数 , 这个函数将异步任务封装在这个函数中
//  这个函数可以有两个参数 , resolve , reject
//  resolve是异步任务成功了 , 需要回调的回调函数
//  reject是异步任务失败了 , 需要回调的回调函数
var p = new Promise(function (resolve, reject) {
	$.get("http://localhost:3000/list", function (result) {
		if (result.status == "success") {
			resolve(result.data);
		} else {
			reject(result.data);
		}
	});
});

// 2. 调用promise对象的then方法执行异步任务
//    传递的参数就是两个分别处理成功和失败情况的回调函数
p.then(
	function (data) {
		console.log("异步任务执行成功", data);
	},
	function (data) {
		console.log("异步任务执行失败", data);
	}
);
```

## 基于 Promise 处理 Ajax 请求

### 1. 处理原生 ajax 请求

```js
function queryInfo(url) {
	var p = new Promise(function (resolve) {
		$.get(url, function (data) {
			resolve(data);
		});
	});
	return p;
}
```

### 2. 发送多次 ajax 请求

```js
queryInfo("http://localhost:3000/list")
	.then(function (data) {
		console.log(data);
		return queryInfo("http://localhost:3000/adata");
	})
	.then(function (data) {
		console.log(data);
		return queryInfo("http://localhost:3000/bdata");
	})
	.then(function (data) {
		console.log(data);
	});
```

## then 参数中的函数返回值

1. 返回 Promise 实例对象

    - 返回的 Promise 对象会调用下一个 then

2. 返回普通值
    - 返回的普通值会直接传递给下一个 then，通过 then 中的函数的参数接收该值

## Promise 常用的 API

1. 实例方法
    - p.then()得到异步任务的正确处理结果
    - p.catch()获取异常信息
    - p.finally()成功与否都会执行（尚且不是正式标准）
2. 对象方法
    - Promise.all() 并发处理多个异步任务，所有任务都执行完毕得到处理结果
    - Promise.race() 并发处理多个异步任务，只要一个任务执行完毕得到处理结果

# 编写 api 服务器项目

名字叫 mybooks

功能:新增图书
