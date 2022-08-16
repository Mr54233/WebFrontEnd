- [07](#07)
- [AJAX](#ajax)
  - [Google](#google)
  - [应用场景](#应用场景)
  - [设计方案](#设计方案)
  - [Jquery 框架下的 Ajax](#jquery-框架下的-ajax)
  - [jQuery ajax 事件](#jquery-ajax-事件)
  - [页码的个数](#页码的个数)

# 07
# AJAX

Asynchronous JavaScript And XML (异步 JavaScript 和 **XML**)

Web 数据的交换方式

## Google

Google :

1. XMLHttpRequest 对象 : 发出异步方式请求(HttpRequest 对象)

2. JavaScript DOM 操作 : 做局部的刷新页面

3. CSS : 页面外观

4. XML : 数据格式

异步请求 : 浏览器不会被阻塞

局部刷新 : 浏览器只刷新局部

-   最大的好处 : 提高了用户体验

## 应用场景

1. 百度地图
2. 百度搜索的关键字可以自动补全
3. 注册用户页面 : 一般而言 , 一个系统中的每个用户的用户账号应该是唯一的
    1. AJAX:
        1. 发 AJAX 请求 : 账号文本框失去焦点 , 在页面上写 JS 代码
        2. 回调函数 : 处理 AJAX 请求返回来的结果
        3. 服务器端处理 Ajax 请求 , 一般不是返回 html 代码 , 返回的是数据 , 较多的情况是 json 对象

## 设计方案

1. 服务器准备一个专门路由模块来处理 ajax 请求

## Jquery 框架下的 Ajax

1. 对客户端的 Ajax 请求进行了封装 :

    1. 六个发 Ajax 请求的方法
        1. `$.ajax()`
        2. `$.get()`
        3. `$.post()`
        4. `$.getJson()`
        5. `$.getScript()` js
        6. `$().load()` html

2.

```js
$.ajax({
   url : '请求的服务器端的处理地址',
   type : '发送方式 get | post ',
   data : {数据名 : 数据值, ...}, // 发送给服务器的数据
   dataType : 'text/plain | text/html | application/json ' , // 希望服务器发回来的数据的类型
   success:function(result){
      // 成功完成的回调函数 , result为成功请求之后得到的结果
   } ,
   error:function(){
      // 失败完成的回调函数
   } ,
   complete:function(){
      // 完成的回调函数
   }
})
```

## jQuery ajax 事件

jQuery ajax 事件 : 监视 ajax 请求处理的过程

全局 ajax 事件 : ajaxStart , ajaxStop , ajaxSend

```js
$(document).ajaxStart(function () {
	// ajax开始之后触发的函数
});
$(document).ajaxStop(function () {
	// ajax结束之后触发的函数
});
```

局部Ajax 事件 : beforeSend
```js
$.ajax({
   url:'',
   data:'',
   beforeSend:function(){
      // 在发送ajax事件之前执行的函数
   }
})
```

## 页码的个数 
count = 5 

pageIndex = 3

12345   01234 / 5 = 0   0=>1 == 0*5+1

----

count = 5 

pageIndex = 6

678910   56789 / 5 = 1  1=>6 == 1*5+1
