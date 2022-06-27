# 19
## 移动web开发第二天
### 传统布局和flex布局对比
+ 传统布局
    + 兼容性好
    + 布局繁琐
    + 局限性,不能在移动端很好的布局
+ flex布局
    + 操作方便,布局极其简单,移动端使用比较广泛
    + pc浏览器支持情况比较差
    + IE11或更低版本不支持flex或仅支持部分
    + 体验:flex布局的简单
+ 建议
    + 如果是pc端页面布局,还是采用传统方式
    + 如果是移动端或者是不考虑兼容的pc则采用flex

### flex布局原理
+ `flex`是`flexible box`的缩写,意为"弹性布局",用来为盒状模型提供最大的灵活性,任何一个容器都可以指定为flex布局.
+ 当我们为父盒子设为flex布局以后,子元素的`float,clear`和`vertical-align`属性将失效.
+ flex布局又叫伸缩布局,弹性布局,伸缩盒布局,弹性盒布局
+ 采用flex布局的元素,称为flex容器(`flex-container`),简称"容器",它的所有子元素自动成为容器成员,称为flex项目(`flexitem`),简称"项目"
+ **总结:就是通过给父盒子添加flex属性,来控制子盒子的位置和排列方式**

#### 父项常用属性
+ `flex-direction`:设置主轴的方向
+ `justify-content`:设置主轴上的子元素排列方式
+ `flex-wrap`:设置子元素是否换行
+ `align-content`:设置侧轴上的子元素排列方式(多行)
+ `align-items`:设置侧轴上的子元素排列方式(单行)
+ `flex-flow`:复合属性,相当于同时设置了 `flex-direction` 和 `flex-wrap`
-----
+ `flex-direction` 设置主轴方向
    + 在flex布局中,是分为主轴和侧轴两个方向,同样的叫法有:行和列,x轴和y轴
    + 默认主轴方向是x轴方向,水平向右
    + 默认侧轴方向是y轴方向,垂直向下
    + 默认:主轴和侧轴是会变化的,就看flex-direction设置谁为主轴,剩下的就是侧轴.而我们的子元素是跟着主轴来排列的

|`row`|**默认值从左到右**|
|-|-|
|`row-reverse`|从右到左|
|`column`|**从上到下**|
|`column-reverse`|从下往上|


---
+ `justify-content` 设置主轴上的子元素排列方式

|**`flex-start`**|**默认值从头开始 如果主轴是x轴,则是从左到右**|
|-|-|
|**`flex-end`**|**从尾部开始排列**
|`center`|在主轴居中对齐(如果主轴是x轴则水平居中)
|**`space-around`**|**平分剩余空间**
|**`space-between`**|**先两边贴边 再平分甚于空间(重要)**

---
+ `flex-wrap` 设置是否换行
    +  默认情况下,项目都排在一条线上(又称"轴线")上,flex-wrap属性定义.flex布局中默认是不换行的
        + `nowrap`不换行
        + `wrap`换行

---
+ `align-items` 设置侧轴上的子元素排列方式(单行)
    + 该属性是控制子项在侧轴(默认y轴)上的排列方式 在子项为单项(单行) 的时候使用
        + `flex-start`:从头开始排列
        + `flex-end`:从尾部开始
        + `center`:居中显示
        + `stretch`:拉伸

---
+ `align-content`:设置侧轴上的子元素排列方式(多行)
    + `flex-start`:从头开始排列
    + `flex-end`:从尾部开始
    + `center`:居中显示
    + `stretch`:拉伸
    + **`space-around`:平分剩余空间**
    + **`space-between`:先两边贴边 再平分甚于空间(重要)**

---
+ `flex-flow` 属性是flex-direction和flex-wrap属性的复合属性
    + `flex-wrap:row wrap`

---
+ `align-self` 设置侧轴上的子元素的对齐方式
    + 属性继承`align-items`

---
+ `order` 属性
    + `number`属性:默认为零,`数字越小越往前
