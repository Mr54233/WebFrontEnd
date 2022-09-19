- [08](#08)
- [前端工程化](#前端工程化)
  - [模块化相关规范](#模块化相关规范)
    - [模块化概述](#模块化概述)
      - [传统开发模式的主要问题](#传统开发模式的主要问题)
      - [通过模块化解决上述问题](#通过模块化解决上述问题)
    - [浏览器端模块化规范](#浏览器端模块化规范)
    - [服务器端模块化规范](#服务器端模块化规范)
    - [大一统的模块化规范--ES6 模块化](#大一统的模块化规范--es6-模块化)
      - [1. Node.js 中通过 babel 体验 ES6 模块化](#1-nodejs-中通过-babel-体验-es6-模块化)
      - [2. ES6 模块化的基本语法](#2-es6-模块化的基本语法)
  - [webpack](#webpack)
    - [当前 Web 开发面临的困境](#当前-web-开发面临的困境)
    - [webpack 概述](#webpack-概述)
    - [webpack 基本使用](#webpack-基本使用)
    - [webpack 中的加载器](#webpack-中的加载器)
  - [Vue 单文件组件](#vue-单文件组件)
    - [传统组件的问题和解决方案](#传统组件的问题和解决方案)
    - [Vue 单文件组件的基本用法](#vue-单文件组件的基本用法)

# 08

# 前端工程化

## 模块化相关规范

### 模块化概述

#### 传统开发模式的主要问题

1. 命名冲突
2. 文件依赖

#### 通过模块化解决上述问题

模块化就是把单独的一个功能封装到一个模块(文件) 中 , 模块之间是相互隔离的 , 但是可以通过特定的接口公开内部成员 , 也可以依赖别的模块

模块化开发的好处 : 方便代码的重用 , 从而提升开发效率 , 便且方便后期的维护

### 浏览器端模块化规范

1. AMD require.js
2. CMD Sea.js

### 服务器端模块化规范

1. CommonJS
    - 模块分为单文件模块和包
    - 模块成员导出 : `module.exports` 和 `exports`
    - 模块成员导入 : `require('模块标识符')`

### 大一统的模块化规范--ES6 模块化

在 ES6 模块化返回诞生之前，Javascript 社区已经尝试并提出了 AMD、CMD、CommonJS 等模块化规范。

但是这些社区提出的模块化规范，还是存在一定的差异性和局限性，并不是浏览器和服务器通用的模块化标准，比如：
AMD 和 CMD 适用于浏览器端的 Javascript 模块化
CommonJS 适用于服务器端的 Javascript 模块化

因此
ES6 模块化规范中定义 :

-   每个 JS 文件都是一个单独模块
-   导入使用 import
-   导出使用 export

#### 1. Node.js 中通过 babel 体验 ES6 模块化

-   A.安装 babel
    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
    npm install --save @babel/polyfill

-   B.创建 babel.config.js  
    在 babel.config.js 中添加右图代码

-   C.创建 index.js 文件
    在项目目录中创建 index.js 文件
    作为入口文件

-   D.使用 npx 执行文件
    npx babel-node ./index.js

#### 2. ES6 模块化的基本语法

1. 默认导出和默认导入

默认导出语法 : export default 默认导出的成员
默认导入语法 : import 接受名称 from 模块路径

> 注意：在每个模块中只允许唯一的一次 export default
> 操作，否则报错；如果模块中没有向外暴露成员，其他模块引入时将会得到一个空对象

2. 按需导入和按需导出
   按需导出语法：
   `export let 属性名=值 export function 函数名{//...}`
   按需导入语法：
   `import { 成员名 } from ‘模块标识符’`

一个模块中既可以按需导入也可以默认导入，一个模块中既可以按需导出也可以默认导出
一个模块中可以多次按需导出。 按需导入时可以使用 as 取别名

3. 直接导入并执行模块代码
   有时候，我们只想单纯执行某个模块中的代码，并不需要得到模块中向外暴露的成员，此时可以直接导入并执行模块代码

## webpack

### 当前 Web 开发面临的困境

文件依赖关系错综复杂
静态资源请求效率低
模块化支持不友好
浏览器对高级 Javascript 特性兼容程度较低

### webpack 概述

webpack 是一个流行的前端项目构建工具，可以解决目前 web 开发的困境。
webpack 提供了模块化支持，代码压缩混淆，解决 js 兼容问题，性能优化等特性，提高了
开发效率和项目的可维护性
目前绝大多数企业中的前端项目，都式基于 webpack 进行打包构建的

### webpack 基本使用

1.  建立列表隔行变色项目

    1. 新建项目空白文件夹，运行 npm init -y 命令，初始化包管理配置文件 package.json
    1. 新建 src 源代码文件夹
    1. 新建 src -> index.html 首页
    1. 初始化首页基本的结构
    1. 运行 npm install jquery -S 命令，安装 JQuery
    1. 通过模块化的形式，实现列表隔行变色效果

2.  在项目中安装和配置 webpack
    1.  执行 npm install webpack webpack-cli -D 命令，安装 webpack 相关的包
    2.  在项目根目录中，创建名为 webpack.config.js 配置文件
    3.  在 webpack.config.js 配置文件中，初始化如下基本配置
    4.  在 package.json 包管理配置文件中的 scripts 节点下，新增 dev 脚本如下
    5. 在终端中运行 npm run dev 命令，启动 webpack 进行项目打包

3.  配置打包的入口和出口

    1. webpack 的 4.x 版本中默认的约定：
    2. 打包的入口文件位 src -> index.js
    3. 打包的输出文件位 dist -> main.js
    4. 如果需要修改打包的入口和出口文件，可以在 webpack.config.js 配置文件中添加如下配置信息

4.  配置 webpack 自动打包功能

    1. 运行 npm install webpack-dev-server -D 命令，安装支持项目自动打包的工具
    1. 修改 package.json -> scripts 节点中的 dev 命令如下
    1. 将 src -> index.html 中 script 脚本的引用路径修改位 “/bundle.js”
    1. 运行 npm run dev 命令重新进行打包
    1. 在浏览器中访问 http://localhost:8080 地址，查看自动打包效果
    1. 注意：webpack-dev-server 会启动一个实时打包的 http 服务器
       webpack-dev-server 打包生成的输出文件放置到网站的根目录中，并且是虚拟的，看不见

5.  5
6.  配置自动打包相关的参数

webpack 的 4.x 版本中默认的约定

-   打包的文件入口为 src->index.js
-   打包的输出文件为 dis->main.js

### webpack 中的加载器

1. 通过 loader 加载器打包非 js 模块
   在实际开发过程中 , webpack 默认只能打包处理以.js 为后缀的模块 , 其他非 js 模块
   webpack 默认处理不了的
2. 2
3. webpack 中加载的基本使用
4. webpack 中加载器的基本使用
    1. npm i style-loader css-loader -D
    2. npm i less-loader less -D
5. 打包样式表中的图片和文字
    1. 运行 npm i url-loader file-loader -D
6. 打包处理 js 文件中的高级语法

## Vue 单文件组件

### 传统组件的问题和解决方案

1. 问题

-   全局定义的组件必须保证组建的名称不能重复
-   字符串模板缺乏语法高亮 , 在 HTML 有多行的时候 ,需要用到丑陋的\
-   不知道 css , 意味着 HTML 和 JS 组件化时 , css 明显被遗漏

2. 解决方案

### Vue 单文件组件的基本用法

单文件组件的组成解构

-   template 组件的模板区域
-   script 业务逻辑区域
-   style 样式区域

webpack 中配置 vue 组件的加载器

-   运行 npm i vue-loader vue-template-compiler -D

在 webpack 项目中使用 vue

-   npm i vue -S

webpack 打包发布
