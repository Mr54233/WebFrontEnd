# 01
# 移动开发第四天
## 响应式开发
就是使用媒体查询针对不同设备的进行布局和央视的设置,从而使配不同设备的目的.
+ 设备的划分情况:
    + 小于768的为超小屏幕(手机)
    + 678-992之间的为小屏设备(平板)
    + 992-1200的中等屏幕(桌面显示器)
    + 大于1200的宽屏设备(大桌面显示器)
+ 响应式布局容器
响应式需要一个父级作为布局容器,来配合子级元素来实现变化效果.
原理就是在不同屏幕下,通过媒体查询来改变这个布局容器的大小,再改变里面子元素的排列方式和大小,从而实现不同屏幕下,看到不同页面布局和样式变化.
+ 父容器版心的尺寸划分
    + 超小屏幕(手机 小于768px): 设置宽度为100%
    + 小屏幕(平板 大于等于768px): 设置宽度为750px
    + 中等屏幕(桌面显示器,大于等于992px):宽度设置为970px
    + 大屏幕(大桌面显示器,大于等于1200px):宽度设置为1170px
    但是我们也可以更具实际情况自己定义划分

## Bootstrap
来源于推特,是目前最受欢迎的前端框架,Bootstrap是基于HTML,CSS和JavaScript的,它简洁灵活,使得web开发更加快捷.
### 框架
顾名思义是一套架构,它有一套比较完整的网页功能解决方案,而且控制权在框架本身,有预制样式库,组件和插件.使用者要按照框架所规定的某种规范进行开发.
+ bootstrap优点
    + 标准化的html+css编码规范
    + 提供了一套简洁,直观,强悍的组件
    + 有自己的生态圈,不断地更新迭代
    + 让开发更简单,提高了开发的效率
+ 版本简介
    + 2.x:停止更新.兼容性更好,代码不够简洁,功能不够完善
    + 3.x:目前使用最多的,稳定,但是放弃了IE6-IE7.对IE8支持但是界面效果不好,偏向用于开发响应式布局,移动设备优先的web项目
    + 4.x:最新版,但是还不够流行


1.bootstrap基本使用

![](../img/bootstrap%E6%96%87%E4%BB%B6%E5%A4%B9.png)

2.创建html骨架
``` html
 <!-- jQuery (necessary for bootstrap's javascript plugins)-->
<script src="//cdn.boot.com/jquery/1.11.3/jquery.min.js"></script>
<!-- include all compiled plugins (below) , or include individual files as needed-->
<script src="js/bootstrap.min.js"></script>
```
3.引入相关样式文件
``` html
<!-- Bootstrap 核心样式-->
<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
```
4.直接书写内容
直接拿bootstrap预先定义好的样式来使用
修改bootstrap原来的样式,注意权重问题
学号bootstrap的关键在于知道它定义了那些样式,已经这些样式能实现什么样的效果


#### 容器
bootstrap需要为页面内容和栅格系统包裹一个`.container`或者`.container-fluid`容器,它提供了两个作此用处的类.

+ .container
    + 响应式布局的容器 固定宽度
    + 大屏(>=1200px) 宽度定位1170px
    + 中屏(>=992px) 宽度定位970px
    + 小屏(>=768px) 宽度定位750px
    + 超小屏(100%)
+ .container-fluid
    + 流式布局容器 百分百宽度
    + 占据全部视口(viewport)的容器.

#### 栅格系统
Bootstrap提供了一套响应式,移动设备优先的流式栅格系统,随着屏幕或视口尺寸的增加,系统回自动分为最多12列.
栅格系统用于通过一系列的行(row)与列(column)的组合来创建页面布局,你的内容就可以放入这些创建好的布局中.
+ 按照不同屏幕划分为1~12等份
+ 行(row) 可以去除父容器作用15px的边距
+ xs-extra small: 超小; sm-small: 小; md-medium : 中等 ; lg-large : 大 ;
+ 列(column) 大于12 , 多余的 "列(column)" 所在的元素被作为一个整体另起一行排列
+ 每一列默认有左右15px的padding
+ 可以同时为一列指定多个设备的类名 , 以便划分不同份数 , 例如
``` html
class="col-md-4 col-sm-6"
```
##### 栅格嵌套
栅格系统内置的栅格系统将内容再次嵌套.简单理解就是一个列内再分成若干份小列 . 我们可以通过添加一个新的`.row`元素和一系列`.col-sm-*`元素到已经存在的`.col-sm-*`元素内.

```html
<!-- 列嵌套-->
<div class=col-sm-4>
	<div class="row">
		<div class="col-sm-6">小列</div>
		<div class="col-sm-6">小列</div>
	</div>
</div>
```
##### 列偏移

使用`.col-md-offset-*`类可以将列像右侧偏移,这些类实际是通过使用`*`选择器为当前元素增加了左侧的边距(`margin-left`).

``` html
<!-- 列偏移-->
<div class="row">
	<div class="col-lg-4">1</div>
	<div class="col-lg-4 col-lg-offset-4">2</div>
</div>
```

#### 响应式工具

为了加快对移动设备友好的页面开发工作,利用媒体查询功能,并使用这些工具类可以方便的针对不同设备展示或隐藏页面内容.

|类名|超小屏|小屏|中屏|大屏|
|-|-|-|-|-|
|`.hidden-xs`|隐藏|可见|可见|可见|
|`.hidden-sm`|可见|隐藏|可见|可见|
|`.hidden-md`|可见|可见|隐藏|可见|
|`.hidden-lg`|可见|可见|可见|隐藏|
