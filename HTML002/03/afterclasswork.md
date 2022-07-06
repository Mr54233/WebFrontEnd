# 怎么理解Javascript是一种弱类型的语言？
1. 变量不需要先声明在使用
2. 变量的数据类型: 变量赋值后 , 由被赋予的数据类决定它的数据类型

# 阅读下列代码，说出其输出结果以及其原因：
``` JavaScript
    console.log(myname);
    var myname = ‘tom’；
```
undefined , 因为JavaScript可以先声明后使用 , 所以一开始就声明然后再赋值 , 一开始没有赋值的时候默认值就是undefined
# 分别写出js中number类型的最大值和最小值，无穷大和无穷小：
MAX_VALUE  MIN_VALUE infinity -infinity

# 阅读下列代码，说出其输出结果以及其原因：
``` JavaScript
   var info = ‘首都’+’is ‘+’beijing’;
   console.log(info.length);
```
11 , 中文字符和英文字符同样占用一个字符长度

