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
                1. 样式代码
                2. 页面内容
                3. router 文件夹下的 index.js
                    1. 不需要的组件导入语句路由
                    2. 路由映射规则
                4. views 文件夹
                5. components/Helloworld.vue
        2. 用户登录

            1. 路由守卫 : 系统中有一些路由是需要登录用户有权限才能操作的 , 为了防止用户直接在浏览器地址栏中输入地址直接进入某些功能页面 , 此时需要路由守卫
            2. axios 第三方包: 拦截器 ,
                1. request 拦截器
                2. response 拦截器
            3. 退出登录 ,

            4. 单文件组件的结构 , template , script , style
            5. ElementUI 的 按需导入 ,
                1. 在项目仪表盘中安装依赖 element-ui
                2. 在项目中添加一个文件夹: plugins / element.js 从 element-ui 中按需导出组件
                3. 注册成全局组件:
                    1. `Vue.use(组件名)`
                    2. `Vue.prototype.XXX = XXX`
                4. 在入口文件 main.js 导入并运行 plugins/element.js
            6. Axios
                1. 在项目管理的仪表盘上安装依赖 : axios vue-axios
                2. 在入口文件 main.js 中默认导入 axios
                3. 配置 axios
                    1. 挂载 vue 的原型对象:

        3. 后台管理子系统的首页
            1. 左边的导航菜单 , 两级菜单
            2. 从 api 服务器端获取所有的左侧导航菜单数据 钩子函数
                1. created 创建完成
                2. mounted 挂载完成

```html
el-form el-form-item el-input | el-button
```

导航菜单需要继续完成的效果
09-06

1. 整个导航菜单可以收缩和扩展的
2. 被点击的二级菜单高亮显示(刷新页面 , 被点击的二级菜单还是高亮的)
3. 整个导航菜单被单击后 , 显示对应的组件(有路由作用)
    1. 每个导航菜单用 router-link 包装一下
    2. 直接在 menu 里加一个 router

09-07
权限管理:

用户 角色 -> 权限

张三 添加商品
