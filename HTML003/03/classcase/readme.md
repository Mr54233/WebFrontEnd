1. 规划网站的文件夹
   - SMS2 : 根目录
     - views : 静态资源目录 , 直接存放html静态页面文件
       - css : 样式文件目录
         - common.css : 通用样式
         - list.css : list页面的样式
         - add.css : add页面的样式
       - js : js代码文件
       - list.html : 学生列表页面的模板文件
       - add.html : 新增表单的模板文件
     - routers : 路由模块目录
       - stu.js : 学生管理功能路由
     - data.json : 学生数据文件
     - app.js : 网站的主程序

2. 下载安装express
   1. 生成package.json 配置文件
   2. 下载安装express包

3. 开发基本的web服务器
4. 开发web服务器的业务处理代码(路由代码)
   1. 托管静态资源
   2. 处理学生列表页面
      1. 路由模块 stu.js 
