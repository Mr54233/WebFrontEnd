# 复习04
+ 设置行高可以完成什么效果?
    + 单行文字垂直居中:line-hight=容器高度
    + 容器中多行文字,设置行间距

+ div>ul>li 的权重值:0,0,0,3

+ 如果有多个选择器选取了同一个网页元素,该网页元素的css属性表现为:
    + 如果多个选择器中的css属性和值没有冲突,则为**叠加.**
    + 如果多个选择器中的css属性和值有冲突:
        + 如果选择器名相同,则表现为**覆盖**,就近原则.
        + 如果选择器名不相同,则需要看优先级,则计算权重值,权重值打的优先.

|选择器|权重值|
|-|-|
|继承或者*|0,0,0,0|
|标签 空|0,0,0,1|
|类,伪类 .|0,0,1,0|
|id #|0,1,0,0|
|行内样式|1,0,0,0|
|!important|无限大|