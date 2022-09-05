# 电子商务后台管理子系统

1. 技术栈 : 前后端分离的 web 开发模式
    1. API 服务器端 , Express + cors + jsonwebtoken + express-jwt
    2. 前端项目 : vue + axios + ElementUI
2. API 服务器端 :
    1. 准备数据库 , 启动 MySQL ,
        1. 打开 navicat 创建新的数据库
        2. 在 mydb 数据库上新建查询 , 载入 mydb.sql 并执行
    2. 解压 vue_api_server.rar 压缩包文件 , 得到了 api 服务器端的项目
        1. 在项目的文件夹中进入命令窗口
        2. 安装依赖`npm i`
        3. 运行 api 服务器项目 : node app.js
        4. 注意点 : config 文件夹下 default.json 这是整个项目的配置文件
            1. db_config 中配置的就是数据库服务器的信息 , 根据自己的运行环境来进行修改
    3. 启动 postman , 根据 api 接口文档 , 测试服务器端
3. Vue 前端项目
    1. 09-05
        1. 创建前端项目
            1. 使用 vue-cli 脚手架创建: vue ui
                1. babel router
            2. 将 app.vue 根组件删除掉不需要的东西
        2. 用户登录
        3. 后台管理子系统的首页
