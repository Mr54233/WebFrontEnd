- [接口调用-axios 用法](#接口调用-axios-用法)
  - [axios 的基本特性](#axios-的基本特性)
  - [axios 常用 API](#axios-常用-api)
  - [axios 参数传递](#axios-参数传递)
    - [1. get 方式参数传递（delete 方式参数传递类似）](#1-get-方式参数传递delete-方式参数传递类似)
    - [2、post 方式参数传递](#2post-方式参数传递)
  - [axios 响应结果](#axios-响应结果)
    - [1. 响应结果的主要属性](#1-响应结果的主要属性)
  - [axios 全局配置](#axios-全局配置)
  - [axios 拦截器](#axios-拦截器)
    - [1. 请求拦截器](#1-请求拦截器)
    - [2. 响应拦截器](#2-响应拦截器)
- [接口调用-async/await 用法](#接口调用-asyncawait-用法)
- [基于接口的案例](#基于接口的案例)

# 接口调用-axios 用法

## axios 的基本特性

axios（[官网](https://github.com/axios/axios)）是一个基于 Promise 用于浏览器和 nodejs 的 HTTP 客户端，它具备以下一些特性：

-   支持浏览器和 node.js
-   支持 promise
-   能拦截请求和响应
-   自动转换 JSON 数据

```js
axios.get("/adata").then((ret) => {
	// data 属性名称是固定的 , 用于获取后台响应的数据
	console.log(ret.data);
});
```

## axios 常用 API

-   get 查询数据
-   post 新增数据
-   put 修改数据
-   delete 删除数据

## axios 参数传递

### 1. get 方式参数传递（delete 方式参数传递类似）

    - 通过 URL 传递参数
    - 通过 params 选项传递参数

```js
axios.get("/adata?id=123").then((ret) => {
	console.log(ret.data);
});
```

```js
axios.get("/adata/123").then((ret) => {
	console.log(ret.data);
});
```

```js
axios.get("/adata", { params: { id: 123 } }).then((ret) => {
	console.log(ret.data);
});
```

### 2、post 方式参数传递

通过选项传递参数（默认传递的是 json 格式的数据）

```js
axios.post("/adata", { uname: "tom", pwd: 123 }).then((ret) => {
	console.log(ret.data);
});
```

## axios 响应结果

### 1. 响应结果的主要属性

-   data:实际响应回来的数据
-   headers:响应头信息
-   status：响应状态码
-   statusText:响应状态信息

```js
axios.post("/axios-json").then((ret) => {
	console.log(ret);
});
```

## axios 全局配置

1. `axios.defaults.timeout=3000;` //设置超时事件
2. `axios.defaults.baseURL = ‘http://localhost:3000/app’;` //设置默认地址
3. `axios.defaults.headers[‘mytoken’]=’axssaweregsdfwef’;`//设置请求头

## axios 拦截器

### 1. 请求拦截器

在请求发注之前设置一些信息

![](../img/axios请求拦截器.png)

```js
axios.interceptors.request.use(
	function (config) {
		// 在请求发出之前进行一些信息设置
		return config;
	},
	function (err) {
		// 处理响应的错误信息
	}
);
```

### 2. 响应拦截器

在获取数据之前对服务器返回数据进行一些加工处理

![](../img/axios响应拦截器.png)

```js
axios.interceptors.response.use(
	function (res) {
		// 在请求发出之前进行一些信息设置
		return res;
	},
	function (err) {
		// 处理响应的错误信息
	}
);
```

# 接口调用-async/await 用法

# 基于接口的案例

基于 NodeJS 平台开发服务器代码，完成图书数据的增删改查 API 开发

基于 Vue 框架开发前端系统，完成图书数据的列表、新增图书、修改图书和删除图书数据的功能。
