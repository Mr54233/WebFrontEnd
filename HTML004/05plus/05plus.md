- [前后端交互](#前后端交互)
- [前后端交互模式](#前后端交互模式)
  - [接口调用方式](#接口调用方式)
  - [URL 地址格式](#url-地址格式)
- [promise 用法](#promise-用法)
  - [异步调用](#异步调用)
  - [promise概述](#promise概述)
  - [promise用法](#promise用法)
- [接口调用-fetch 用法](#接口调用-fetch-用法)
- [接口调用-axios 用法](#接口调用-axios-用法)
- [接口调用-async/await 用法](#接口调用-asyncawait-用法)
- [基于接口的案例](#基于接口的案例)
- [编写api服务器项目](#编写api服务器项目)

# 前后端交互

# 前后端交互模式

## 接口调用方式

1. 原生 Ajax
2. 基于 jQuery 的 Ajax
3. fetch
4. axios

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

# promise 用法

## 异步调用

1.  异步效果分析
    -   定时任务
    -   Ajax
    -   时间函数
2.  多次异步调用的结果
    - 不一定

## promise概述

promise 是异步编程的一种解决方案 , 从语法上来说 , promise是一个对象 , 从他可以获取异步调用的消息

使用promise主要有以下的好处:
1. 主要解决异步

## promise用法
1. 实例化对象  ,  构造函数中传入一个函数 , 该函数用于处理异步任务

# 接口调用-fetch 用法

# 接口调用-axios 用法

# 接口调用-async/await 用法

# 基于接口的案例



# 编写api服务器项目

名字叫mybooks

功能:新增图书