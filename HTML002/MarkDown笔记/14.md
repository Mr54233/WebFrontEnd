# 14

## jQuery

### jQuery 的优点

-   轻量级 , 核心文件才几十 kb , 不会影响页面加载速度
-   跨浏览器兼容, 基本兼容了现在的主流浏览器
-   链式编程 , 隐式迭代
-   对事件 , 样式 , 动画支持 , 大大简化了 DOM 操作
-   支持插件扩展开发 . 有着丰富的第三方的插件 , 例如 : `树形菜单 , 日期控件 , 轮播图` 等.
-   免费 , 开源 .

### jQuery 的下载

jQuery 的官网 , https://jquery.com/ , 官网即可下载最新版本.

> 各个版本的下载: https://code.jquery.com/

版本介绍:

> 1x : 兼容 IE678 等低版本浏览器 , 官网不再更新
> 2x : 不兼容 IE678 等低版本浏览器 , 官网不再更新
> 3x : 不兼容 IE678 等低版本浏览器 , 是现在官方主要维护更新的版本

## 使用

> 1 在页面上引用 jQuery 库:

```html
<script src='js/jquery.min.js'>
```

> 2 基于 jQuery 框架开发自己的 DOM 操作的代码

```js
<script>
    $(document).ready(function(){
    // 写自己的代码
});
window.onload = function(){
    // 自己的代码
}
</script>
```
DOM操作:
增删改查

# 查

**`$(选择器)`**:核心函数 , **工厂函数** , 按照选择器的规则从网页中选取满足规则的元素对象出来. 并且将所有元素对象封装成一个jQuery对象 , 工厂函数的返回值就是jQuery对象 . 

ready: 是一个事件 , `$(document).ready `相当于 `window.onload`
绑定事件的处理函数 : `jQuery对象.事件名(function(){});`
```js
jQuery => Element:jquery对象名[下标]
```
```js
Element => jQuery: $(Element)
```

## *核心* : 
工厂函数支持的选择器 : 
- 所有的CSS选择器
- xpath选择器

1. 基本选择器 , 标签 , 类 , id , 后代 , 并集 , 交集 , 
2. 层级关系选择器: 后代 空格 , 字 > , 后面的兄弟 + , 后面所有的兄弟 ~
3. 特殊选择器或者过滤器:
    - :not(选择器)
    - :empty 筛选出没有任何内容的
    - :parent 筛选出有内容的元素

## 事件处理
事件驱动
1. 事件名前面没有on  , `click` , `mousemove` , `blur`
2. 注册事件处理函数 :
    `jQuery对象名.bind('event',callback);`
    `jQuery对象名.事件名(callback);`
3. 松绑 : `unbind{}`

## 读取或者设置HTML属性值
`attr(属性名) `: 读取HTML属性值
`attr(属性名 , 属性值)` : 设置HTML属性值

## 读取或设置CSS属性值
`css(属性名)` : 读取css属性值
`css(属性名 , 属性值)` : 设置css属性值

## 读取或者设置内容
`html()`: 读取内容
`html(值)`: 设置内容