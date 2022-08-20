# 新闻管理系统

## 技术选型 :

前后端分离的 web 开发模式 ,

-   API Server 项目 : 向前端项目提供数据 , 实现服务器端的业务逻辑

    -   用户管理 : 用户注册 , 用户登录 , 更改基本资料 , 改变头像 , 修改登陆密码 ,
        -   (管理员操作) 用户列表 , 禁言 , 从逻辑上删除某个用户 , 物理上清理用户数据 ,
    -   新闻管理 :
        -   (管理员操作) 类别列表 , 新增类别 , 修改类别 , 删除类别 , 新闻列表 , 发布新闻 , 修改新闻 , 删除新闻
        -   敏感词过滤 : GCD 统计(可视化 Echarts) 用户权限管理

-   前端项目 : 提供前端页面 , 在前端页面中展示数据
    -   前台子系统 :
        -   首页:类别 , 新闻列表 , 搜索新闻 , 分类展示 , 新闻详情 , 评论 , 用户注册 , 用户登录
    -   后台子系统 :
        -   用户管理 : 用户列表 , 修改基本资料 , 更改头像 , 修改登陆密码 ,
        -   新闻管理 : 类别管理 , 新闻管理

---

API Server 项目 : Nodejs + Express + MySQL + CORS + jsonwebtoken + express-jwt + connect-multiparty

前端项目 : layui + Echarts + jQuery(Ajax) + template-web.js(前端模板引擎) + cropper.js(图片裁剪) + 富文本编辑器组件库 tinymce.js

---

## 数据库

users 用户表

| 字段     | 数据类型    | 约束                                | 说明                      |
| -------- | ----------- | ----------------------------------- | ------------------------- |
| uid      | int         | 主键 pk,非空 not null , 自动增长 AI | 用户编号                  |
| uname    | varchar(50) | 非空 not null                       | 用户名                    |
| password | varchar(50) | 非空 not null                       | 登录密码                  |
| role     | tinyint     | 默认为 0                            | 0 为 common , 1 为管理员  |
| photo    | varchar(50) |                                     | 头像地址名称              |
| state    | tinyint     | 默认值 df 为 0                      | 状态 0 正常 1 禁言 2 删除 |

表名 : 评论表
|||||
|-|-|-|-|

---

## 新闻类别管理

-   API Server :
    -   APP.js : 主程序
    -   routes : 路由模块文件夹
        -   category : 类别管理的各个路由 类别的分页显示的路由模块
            -   page.js : 封装分页显示.
        -   category.js : 新闻类别路由模块
    -   database : 数据操作模块的文件夹
        -   db.js : 创建和数据库服务器的连接
        -   category.js : 类别表的数据操作模块

## 地址设计

/api/category/page 分页显示  
/api/category/save 进入保存  
/api/category/delete 删除  
/api/category/edit 进入新增|修改表单

## 前端项目

-   admin : 后台管理子系统文件夹
    -   index.html : 后台管理子系统的首页
        -   iframe 内置框架 理解为容器 , 加载另一个页面
            -   src : 另一个页面的地址 ,
                -   1. 使用 js 修改 src 属性的值
                -   2. 给iframe 框架标签设置id值 `<a href='...' target='内置框架的id值'></a> `
-   home : 前台子系统 文件夹
