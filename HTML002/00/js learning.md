# JavaScript 
JavaScript 入门
## JavaScript引入方式
### 行内式
写在标签内部
### 内嵌式
写在`head`标签中
### 外链式
引入外部js文件
#### 1.行内样式 01Html
**不推荐使用**
``` javascript
<input type="button" value="点我" onclick="alert('Hello1')">
```
#### 2.内嵌式 02Html
学习时常用,
可以在`script`里边放多行代码
我们可以在`body`标签内放入
``` javascript
<script type="text/JavaScript"> </script>
```
并在`<script>`里边写js代码

#### 3.外链式 
代码依然放body内,可以和内嵌的js代码并列
script标签引入了外部js文件,所以在这个标签里不可以再写js代码
``` JavaScript
<script src="js文件路径"></script>
```

##### 总结
我们在实战开发中一般都是采用方式3,有利于代码的结构化和复用,复合高内聚低耦合的思想,很少有人把一大堆js代码塞到html文件里
##### 关于Windows.onload
上面的三种方式，有个共同的地方是：JS 代码都是写在`</body>`中的，准确来说，是在页面标签元素的后面，在 body结束标签的前面。

为什么一般是按这样的顺序来写呢？这是因为：**浏览器默认会从上至下解析网页**（这句话很重要）。当你需要通过 JS 来操作界面上的标签元素的时候，假如将 JS 代码、`<script>`标签写到`<head>`标签中，或者写在页面标签元素的前面，那么这样的 JS 是无效的，因为标签元素在此时都还没来得及加载，自然无法操作这个元素。

重点：

当你需要通过 JS 来操作界面上的标签元素的时候，如果实在想把 JS 写到`<head>`标签中，那么就必须用` window.onload `将 JS 代码进行包裹。代码格式如下：
``` JavaScript
<head>
  window.onload = function(){
    // 这里可以写操作界面元素的JS代码，等页面加载完毕后再执行
    ...
  }
</head>
```
window.onload的含义是：等界面上所有内容都加载完毕后（不仅要等文本加载完毕，而且要等图片也要加载完毕），再执行{}中的代码。做到了先加载，最后执行，也就是：等页面加载完毕后再执行。

当然，我们可以根据具体需求，将 window.onload 写在`<head>`标签中，或者写在`<script>`标签中。

## JavaScript 输出语句 03

### alert()语句
弹窗
`alert("弹出的文字")`

### confirm()语句
弹窗选择是否
``` JavaScript
var result = confirm('是否');
console.log(result);
```

### prompt()语句
弹窗输入文本
``` JavaScript
var a = prompt('请随便输入点什么东西吧');
console.log(a);
```

#### alert()和 prompt()的区别：

alert() 语句中可以输出数字和字符串，如果要输出字符串，则必须用引号括起来；prompt()语句中，用户不管输入什么内容，都是字符串。
prompt() 会返回用户输入的内容。我们可以用一个变量，来接收用户输入的内容。

##### 网页内容区域输出：document.write()语句 03
``` JavaScript
document.write("123")
```

#### 控制台输出：console.log() 打印日志
`console.log()`表示在控制台中输出。console 表示“控制台”，log 表示“输出”。括号里可以写字符串、数字、变量。

控制台是程序员调试程序的地方，比如使用 console 语句打印日志，测试程序是否运行正常。

在 Chrome 浏览器中，按 F12 即可打开控制台，选择「console」栏，即可看到打印的内容。

console 语句可以设置不同的打印等级：
``` JavaScript
console.log("普通打印")
console.warn("警告打印")
console.error("错误打印")
```
如下:
![](../img/%E6%89%93%E5%8D%B0.png)

**总结**：`alert()` 主要用来显示消息给用户，`console.log()` 用来给程序员做调试用。

## 变量常量 
### 常量
固定值,不可改变
常量有一下这几种:
+ 数字常量(数值常量)
+ 字符串常量
+ 布尔常量
+ 自定义常量

#### 数字常量
非常简单,直接写数字就行,不需要任何其他的符号.既可以是整数,也可以是浮点数.

#### 字符串常量
字符串常量就是单引号或者双引号括起来的内容.可以是单词,句子等.一定要加引号.在js中,只要是单双引号括起来的内容都是字符串常量.

#### 布尔常量
布尔常量就是代表**真**或**假**
在js中用`true`和`false`来表达

#### 自定义常量
##### `const`
ES6的新增的语法
``` JavaScript
const 常量名称 = 常量取值;
```
**建议使用变量定义常量**

### 变量
变量表示可以被修改的数据
变量可以用来表示常量
**本质**:变量是程序在内存中申请的一块用来存放数据的地方.打个比方,超市里的储物格就是变量,在不同的时间段,储物格中存储的数据可以不一样.

#### 变量的定义和赋值
定义变量是告诉浏览器,我们需要一块内存空间,相当于生成了超市里的储物格.
给变量赋值就是给储物格中塞东西，可能今天上午塞的是面包🍞，下午就换成了蛋糕🍰。

##### 变量的定义/声明（ES5）
在 ES6 语法之前，统一使用var关键字来声明一个变量。比如：
``` JavaScript
var name; // 定义一个名为 name 的变量。name是变量名。
```
`var` 是英语“`variant`”变量的缩写。后面要加一个空格，空格后面的东西就是“`变量名`”。

PS：在 JavaScript 中，永远都是用` var `来定义变量（在 ES6 之前），这和 C、Java 等语言不同。

##### 变量的定义/声明（ES6）
在 ES6 语法及之后的版本里，可以使用 `const`、`let`关键字来定义一个变量
``` JavaScript
const name; // 定义一个常量
let age; // 定义一个变量
```

如果你想定义一个常量，就用 `const`；如果你想定义一个变量，就用 `let`。

##### 变量的赋值
变量赋值举例：
``` JavaScript
name = '赋的值';
```
综合起来，变量的定义、赋值、取值，举例如下：
``` JavaScript
// 定义：声明一个变量
var num;
// 赋值：往变量中存储数据
num = 996;
// 取值：从变量中获取存储的数据
console.log(num);
```

##### 合并写法
变量的定义和赋值，还可以合并写在一起，是实战中常用的写法。举例如下：
``` JavaScript
var a = 100; // ES5语法
console.log(a);

const b = hello; // ES6 语法

let c = world; // ES6 语法
c = 123456; // 修改 变量 C 的值
```

定义一个变量并赋值， 我们称之为变量的初始化。如下图所示：
![](../img/%E5%85%B3%E9%94%AE%E5%AD%97%E5%8F%98%E9%87%8F%E5%90%8D.png.crdownload)

+ 定义变量：var 就是一个**关键字**，用来定义变量。所谓关键字，就是有特殊功能的单词。
+ 变量赋值：等号表示**赋值**，将等号右边的值，赋给左边的变量。
+ 变量名：我们可以给变量起个名字。

##### **变量的初始化【重要】**
第一次给变量赋值，称之为“**变量的初始化**”，这个概念非常重要。第二次给这个变量赋值（也就是修改这个变量的值）就不叫初始化了。

一个变量如果没有进行初始化（只声明，不赋值），那么这个变量中存储的值是`undefined`，这个知识点必须知道。

变量的初始化，可以有两种形式，如下。

形式1：先定义，在赋值。举例：
``` JavaScript
var name;
name = '123';
```
形式2：在定义的同时进行初始化。也就是上一小段讲的“合并写法”。举例：
``` JavaScript
var name = '123';
```

#### 变量的定义和赋值的补充
##### 修改变量的值
一个变量被重新复赋值后，它原有的值就会被覆盖，变量值将以最后一次赋的值为准。

举例：
``` JavaScript
var a = 100;
a = 110;

console.log(a); // 打印结果：110。因为 110 覆盖了 100
```

##### 同时定义多个变量
1、同时定义多个变量时，只需要写一个 `var`， 多个变量名之间用英文逗号隔开。举例：
``` JavaScript
// 同时定义多个变量
var num1, num2;
```

2、定义多个变量的同时，分别进行初始化。举例：
``` JavaScript
// 定义多个变量的同时，进行初始化
var num1 = 10, num2 = 20;
```

如果多个变量初始化的初始化值都是一样的，则可以这样简写：
``` JavaScript
var num1, num2;
num1 = num2 = 10; // 重点在这一行

console.log(num1); // 10
console.log(num2); // 10
```

上面的写法和下面的写法是有区别的：（注意看打印结果）
``` JavaScript
var num1, num2 = 10;

console.log(num1); // undefined
console.log(num2); // 10
```

##### 变量之间可以相互赋值
``` JavaScript
var num1, num2;
num1 = 10;
num2 = num1; // 把 num1 的值拷贝一份，赋值给 num2
console.log(num2); // 10
```

##### 变量如果重复定义
在ES5中，如果用 `var` 定义了同名变量，那么，后定义的变量，会覆盖先定义的变量。举例：
``` JavaScript
var name = '许嵩';
var name = '1234'; // 这里会重新定义一个新的变量 name

console.log(name); // 1234
```
##### **变量声明和赋值的特殊情况**
变量建议先声明，再使用；否则可能会产生意想不到的结果。具体如下。

写法 1、先声明，再赋值：（正常）
``` JavaScript
var a;
a = 100;
console.log(a); // 打印结果：100
```
写法 2、不声明，直接赋值：（正常）
``` JavaScript
a = 100;
console.log(a); // 打印结果：100
```

写法 3、只声明，不赋值：（注意，打印 undefined）
``` JavaScript
var a;
console.log(a); // 打印结果：undefined
```

写法 4、不声明，不赋值，直接使用：（会报错）
``` JavaScript
console.log(a); // 会报错
```
控制台会报错：

补充：写法 1 和写法 2 虽然都正常，但这两种写法是有区别的，等以后学习了「变量提升」的概念就明白了。大多数情况下，我们都是采用的写法 1。

#举例
举例：交换两个变量的值

代码实现：
``` JavaScript
var a1 = 100;
var a2 = 200;

var temp;

temp = a1;
a1 = a2;
a2 = temp;
```

## *变量的命名规则(重要)*
js是大小写敏感的语言.也就是说A和a是两个变量.大写字母是可以使用的,比如
``` JavaScript
var a = 123; //变量1
var A = 1234: // 变量2
```

### 必须遵守:
+ 只能由字母(A-Z,a-z) , 数字(0-9) , 下划线(_) , 美元符($)组成 . 
+ 不能以**数字**开头 . 必须以字母(A-Z , a-z) , 下划线(_) 或者美元符($)开头 . 变量名中不允许出现空格 . 尤其注意 , 变量名中不能出现 **中划线** - .
+ 严格区分大小写(js是区分大小写的语言) . 
+ 不能使用js语言中保留的 [关键字] 和 [保留字] 作为变量名.
+ 变量名长度不能超过255个字符.
+ 汉字可以作为变量名 , 但不建议使用 , 因为比较捞

### 建议遵循:

+ 命名要有可读性 , 方便顾名思义
+ 建议使用**驼峰命名法** . 比如: getElementById , getUserInfo , aaaOrBbbAndCcc

#### 补充:

1. 不能以数字开头 , 是为了把数字和字母区分开 . 
2. js底层保存标识符的时候 , 是采用的Unicode 编码 . 所以理论上讲 , 在遵守命名规则的前提下 , utf-8中包含的所有内容都可以作为标识符.

## 标识符

### 标识符:

在js中所有的可以有我们**自主命名**的都可以称之为标识符 . 包括: **变量名 , 函数名 , 属性名 , 参数名** 都属于标识符 . 

通俗来说 , 标识符就是我们写代码时为某个东西起的名字 , 类似于人名

**和变量的命令规则是一样的** . 关于变量的命名规则 , 详见上一段

标识符不能使用语言中保留的**关键字**及**保留字**

## 关键字

### 关键字:

被js赋予了特殊含义的单词 . 也就是说 , 关键字时js本身已经使用了的单词 , 我们不能再用它们充当变量名 , 函数名等标识符 . 关键字的开发工具中会显示特殊的颜色

js中的关键字如下:

```bash
if、else、switch、break、case、default、for、in、do、while、
var、let、const、void、function、continue、return、
try、catch、finally、throw、debugger、
this、typeof、instanceof、delete、with、
export、new、class、extends、super、with、yield、import、static、
true、false、null、undefined、NaN
```

### 保留字:

实际上就是预留的"关键字" . 它们虽然现在还不是关键字 , 但是未来可能会成为关键字 . 同样不能用他们充当**变量名 , 函数名**等标识符.

js中的保留字如下:

```bash
enum、await

abstract、boolean、byte、char、double、final、float、goto、int、long、native、short、synchronized、transient、volatile、

arguments eval Infinity

# 以下关键字只在严格模式中被当成保留字，在ES6中是属于关键字
implements、interface、package、private、protected、public
```

## 数据分类

数据分为:静态数据 , 动态数据

### 静态数据

静态数据一般指的是永久性的数据 . 一般是以文件的形式储存在硬盘上 , 比如文档 , 照片 , 视频等文件.

电脑关闭后 , 静态数据仍然存在 , 只要不是主动删除或者硬盘没损坏 , 这些数据就一直都在 . 

### 动态数据

动态数据时在程序运行过程中 , 动态产生的临时数据 , 这些数据可能是随时发生变化 . 一般存储在内存中 . 

电脑关闭后 , 这些数据会被清除

为何不把应用程序的动态数据加载到硬盘中执行呢? 这主要是因为 , 内存的访问速度比硬盘快无数倍 . 

## 变量的数据类型

### 为什么需要数据类型

在计算机中，不同的数据所需占用的存储空间不同，为了充分利用存储空间，于是定义了不同的数据类型。而且，不同的数据类型，寓意也不同。

我们都知道，无论这个变量是字符串类型，还是数字类型，我们都可以直接用 `var` 去定义它。比如：

```javascript
var a = 'hello word';

var b = 123;
```

为什么可以这样做呢？这是因为：JavaScript 是一种「弱类型语言」，或者说是一种「动态语言」，这意味着不需要提前声明变量的类型，在程序运行过程中，类型会自动被确定。

**JS 的变量数据类型，是在程序运行的过程中，根据等号右边的值来确定的**。而且，变量的数据类型是可以变化的。比如说：

``` JavaScript
var name = 'qianguyihao';

name = 123; // 强制将变量 name 修改为 数字类型
```
### JS 中一共有八种数据类型

+ 基本数据类型(值类型) : **String 字符串 , Number 数值 , Bigint 大型数值 , Boolean 布尔值 , Null 空值 , Undefined 未定义 , symbol 符号.**
+ 引用数据类型 (引用类型) : **Object 对象** . 
  + *注意*：**内置对象 Function、Array、Date、RegExp、Error** 等都是属于 Object 类型。也就是说，除了那七种基本数据类型之外，其他的，都称之为 Object 类型。
+ **BigInt** 和 **Symbol** 是ES6中新增的类型

#### 经典例子

**基本数据类型举例**：

```javascript
var a = 23;
var b = a;

a++;

console.log(a); // 打印结果：24
console.log(b); // 打印结果：23
```

上面的代码中：a 和 b 都是基本数据类型，让 b 等于 a，然后**改变 a 的值之后，发现 b 的值并没有被改变**。

但是在引用数据类型中，就不同了，我们来看一看。

**引用数据类型举例**：

```javascript
var obj1 = new Object();
obj1.name = 'smyh';

// 让 obj2 等于 obj1
var obj2 = obj1;

// 修改 obj1 的 name 属性
obj1.name = 'vae';

console.log(obj1.name); // 打印结果：vae
console.log(obj2.name); // 打印结果：vae
```

上面的代码中：obj1 和 obj2 都是引用数据类型，让 obj2 等于 obj1，然后**修改 obj1.name 的值之后，发现 obj2.name 的值也发生了改变**。
