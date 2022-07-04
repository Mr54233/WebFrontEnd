Bootstrap框架响应式博客系统首页
1280px设计稿
整个页面布局:
在中等屏幕,大屏幕情况下,左中右三列
``` html
col-md-2
col-md-7
col-md-3
```

1. 建立项目文件夹结构
```
    blog
        bootstrap 框架文件
            css
            fonts
            js
        css  自定义样式文件
            index.css 首页样式文件
        images  背景图像文件
        upload 产品图像文件
        index.html 首页
```
2. 搭建页面骨架标签
导入修正兼容IE678HTML5兼容的js文件
3. 导入bootstrap核心样式
4. 内容:
    + 考虑页面布局
``` 
.container
    .row
        .col-md-2
        .col-md-7
        .col-md-3
```