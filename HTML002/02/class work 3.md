1.	Bootstrap是哪家公司研发的？使用Bootstrap时，要声明的文档类型是什么？以及为什么要这样声明？
来源于推特Twitter,
要声明的文档类型是HTML5文档类型
`<!DOCTYPE html>`
如果在Bootstrap创建的网页开头不使用HTML5的文档类型（DOCTYPE），可能会面临一些浏览器显示不一致问题，甚至可能面临一些特定情境下的不一致，以致于页面达不到想要的效果

2.	对于各类尺寸的设备，Bootstrap设置的class前缀分别是什么？
超小屏幕（<768px）：`.col-xs-` （最大宽度100%）
小屏幕（>=768px）：`.col-sm-`  （最大宽度750px）
中等屏幕（>=992px）：`.col-md-`  （最大宽度970px）
大屏幕（>=1200px）：`.col-lg-`  （最大宽度1170px）

3.	Bootstrap网格系统（Grid System）的工作原理？
+ 按照不同屏幕划分为1~12等份
+ 行(row) 可以去除父容器作用15px的边距
+ xs-extra small: 超小; sm-small: 小; md-medium : 中等 ; lg-large : 大 ;
+ 列(column) 大于12 , 多余的 "列(column)" 所在的元素被作为一个整体另起一行排列
+ 每一列默认有左右15px的padding
+ 可以同时为一列指定多个设备的类名 , 以便划分不同份数 , 例如

``` 
class="col-md-4 col-sm-6"
```


