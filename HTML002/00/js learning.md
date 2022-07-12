# JavaScript 
JavaScript 入门
## **JavaScript引入方式**
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
``` html
<head>
  window.onload = function(){
    // 这里可以写操作界面元素的JS代码，等页面加载完毕后再执行
    ...
  }
</head>
```
window.onload的含义是：等界面上所有内容都加载完毕后（不仅要等文本加载完毕，而且要等图片也要加载完毕），再执行{}中的代码。做到了先加载，最后执行，也就是：等页面加载完毕后再执行。

当然，我们可以根据具体需求，将 window.onload 写在`<head>`标签中，或者写在`<script>`标签中。

## **JavaScript 输出语句 03**

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

## **变量常量** 
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

## **标识符**

### 标识符:

在js中所有的可以有我们**自主命名**的都可以称之为标识符 . 包括: **变量名 , 函数名 , 属性名 , 参数名** 都属于标识符 . 

通俗来说 , 标识符就是我们写代码时为某个东西起的名字 , 类似于人名

**和变量的命令规则是一样的** . 关于变量的命名规则 , 详见上一段

标识符不能使用语言中保留的**关键字**及**保留字**

## **关键字**

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

## **数据分类**

数据分为:静态数据 , 动态数据

### 静态数据

静态数据一般指的是永久性的数据 . 一般是以文件的形式储存在硬盘上 , 比如文档 , 照片 , 视频等文件.

电脑关闭后 , 静态数据仍然存在 , 只要不是主动删除或者硬盘没损坏 , 这些数据就一直都在 . 

### 动态数据

动态数据时在程序运行过程中 , 动态产生的临时数据 , 这些数据可能是随时发生变化 . 一般存储在内存中 . 

电脑关闭后 , 这些数据会被清除

为何不把应用程序的动态数据加载到硬盘中执行呢? 这主要是因为 , 内存的访问速度比硬盘快无数倍 . 

## **变量的数据类型**

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

### 栈内存和堆内存
我们首先记住一句话：JS 中，所有的变量都是保存在栈内存中的。

然后来看看下面的区别。

#### 基本数据类型：

基本数据类型的值，直接保存在栈内存中。值与值之间是独立存在，修改一个变量不会影响其他的变量。

#### 引用数据类型：

对象是保存到堆内存中的。每创建一个新的对象，就会在堆内存中开辟出一个新的空间；而变量保存了对象的内存地址（对象的引用），保存在栈内存当中。如果两个变量保存了同一个对象的引用，当一个通过一个变量修改属性时，另一个也会受到影响。

# **基本数据类型**
## String 字符串

### 语法

字符串型可以是引号中的任意文本，其语法为：双引号 `""` 或者单引号 `''`。

来看个示例。下面的这些，都是字符串：

```javascript
var a = 'abcde';
var b = '一二三四';
var c = '123123';
var d = '哈哈哈哈哈';
var e = ''; //空字符串

var f = haha; // 没使用引号，到这里会直接报错。因为会被认为是js代码，但是之前并没有定义 haha。

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
```

控制台输出如下：

```
string
string
string
string
string
```


### 引号的注意事项

1、单引号和双引号不能混用。比如下面这样写是不可以的：

```javascript
var str = 'hello";  // 报错：Uncaught SyntaxError: Invalid or unexpected token
```

2、同类引号不能嵌套：双引号里不能再放双引号，单引号里不能再放单引号。

3、单引号里可以嵌套双引号；双引号里可以嵌套单引号。

### 转义字符

在字符串中我们可以使用`\`作为转义字符，当表示一些特殊符号时可以使用`\`进行转义。

-   `\"` 表示 `"` 双引号

-   `\'` 表示 `'` 单引号

-   `\\` 表示`\`

-   `\r` 表示回车

-   `\n` 表示换行。n 的意思是 newline。

-   `\t` 表示缩进。t 的意思是 tab。

-   `\b` 表示空格。b 的意思是 blank。

举例：

```javascript
var str1 = '我说:"今天\t天气真不错！"';
var str2 = '\\\\\\';

console.log(str1);
console.log(str2);
```

上方代码的打印结果：

```
	我说:"今天	天气真不错！"
	\\\
```

### 获取字符串的长度

字符串是由若干个字符组成的，这些字符的数量就是字符串的长度。我们可以通过字符串的 length 属性可以获取整个字符串的长度。

代码举例：

```javascript
var str1 = '一二三四';
var str2 = '一二三四，五六七八！';

var str3 = 'qianguyihao';
var str4 = 'qianguyihao, keep moving!';

console.log(str1.length); // 4
console.log(str2.length); // 10
console.log(str3.length); // 11
console.log(str4.length); // 25
```

由此可见，字符串的 length 属性，在判断字符串的长度时，会认为：

-   **一个中文算一个字符，一个英文算一个字符**

-   一个标点符号（包括中文标点、英文标点）算一个字符

-   一个空格算一个字符

### 字符串拼接

多个字符串之间可以使用加号 `+` 进行拼接。

**拼接语法**：

```
字符串 + 任意数据类型 = 拼接之后的新字符串;
```

**拼接规则**：拼接前，会把与字符串相加的这个数据类型转成字符串，然后再拼接成一个新的字符串。

**代码举例**：（字符串与六大数据类型相加）

```javascript
var str1 = '一二三四' + '永不止步';
var str2 = '一二三四' + 666;
var str3 = '一二三四' + true;
var str4 = '一二三四' + null;
var str5 = '一二三四' + undefined;

var obj = { name: '一二三四', age: 28 };
var str6 = '一二三四' + obj;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);
```

打印结果：

```
一二三四永不止步

一二三四666

一二三四true

一二三四null

一二三四undefined

一二三四[object Object]
```

## 字符串的不可变性

字符串里面的值不可被改变。虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间。

代码举例：

```js
var str = 'hello';

str = 'qianguyihao';
```

比如上面的代码，当重新给变量 str 赋值时，常量`hello`不会被修改，依然保存在内存中；str 会改为指向`qianguyihao`。

## 模板字符串（模板字面量）

ES6 中引入了**模板字符串**，让我们省去了字符串拼接的烦恼。下面一起来看看它的特性。

### 在模板字符串中插入变量

以前，让字符串进行拼接的时候，是这样做的：（传统写法的字符串拼接）

```javascript
var name = 'smyhvae';
var age = '26';
console.log('name:' + name + ',age:' + age); //传统写法
```

这种写法，比较繁琐，而且容易出错。

现在，有了 ES6 语法，字符串拼接可以这样写：

```javascript
var name = 'qianguyihao';
var age = '26';

console.log('我是' + name + ',age:' + age); //传统写法
console.log(`我是${name},age:${age}`); //ES6 写法。注意语法格式
```

**注意，上方代码中，倒数第二行用的符号是单引号，最后一行用的符号是反引号（在 tab 键的上方）**。

参考链接：

-   [ES6 的 rest 参数和扩展运算符](https://segmentfault.com/a/1190000010222698)

### 在模板字符串中插入表达式

以前，在字符串中插入表达式的写法必须是这样的：

```js
const a = 5;
const b = 10;
console.log('this is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
```

现在，通过模板字符串，我们可以使用一种更优雅的方式来表示：

```js
const a = 5;
const b = 10;

// 下面这行代码，故意做了换行。
console.log(`this is ${a + b} and
not ${2 * a + b}.`);
```

打印结果：

```bash
this is 15 and
not 20.
```
### 模板字符串中可以换行

因为模板字符串支持换行，所以可以让代码写得非常美观。

代码举例：

```js
const result = {
    name: 'qianguyihao',
    age: 28,
    sex: '男',
};

// 模板字符串支持换行
const html = `<div>
	<span>${result.name}</span>
	<span>${result.age}</span>
	<span>${result.sex}</span>
</div>`;

console.log(html); // 打印结果也会换行
```

打印结果：

![](http://img.smyhvae.com/20200825_2016.png)

### 模板字符串中可以调用函数

**模板字符串中可以调用函数**。
字符串中调用函数的位置，将会显示函数执行后的返回值。

举例：

```js
function getName() {
    return 'qianguyihao';
}

console.log(`www.${getName()}.com`); // 打印结果：www.qianguyihao.com
```

### 模板字符串支持嵌套使用

```js
const nameList = ['千古壹号', '许嵩', '解忧少帅'];

function myTemplate() {
    // join('') 的意思是，把数组里的内容合并成一个字符串
    return `<ul>
	${nameList.map((item) => `<li>${item}</li>`).join('')}
	</ul>`;
}
document.body.innerHTML = myTemplate();
```

效果如下：

![](http://img.smyhvae.com/20200607_2118.png)

## 布尔值：Boolean

布尔型有两个值：true 和 false。主要用来做逻辑判断： true 表示真，false 表示假。

布尔值直接使用就可以了，千万不要加引号。

代码：

```javascript
var a = true;
console.log(typeof a);
```

控制台输出结果：

```
boolean
```

布尔型和数字型相加时， true 按 1 来算 ，false 按 0 来算。

## 数值型：Number

在 JS 中所有的数值都是 Number 类型，包括整数和浮点数（小数）。

```javascript
var a = 100; // 定义一个变量 a，并且赋值整数100
console.log(typeof a); // 输出变量 a 的类型

var b = 12.3; // 定义一个变量 b，并且赋值浮点数 12.3
console.log(typeof a);
```

上方代码的输出结果为：

```
number

number
```

再次补充：**在 JS 中，只要是数，就是 Number 数值型的。无论整浮、浮点数（即小数）、无论大小、无论正负，都是 Number 类型的。**

### 数值范围

由于内存的限制，ECMAScript 并不能保存世界上所有的数值。

-   最大值：`Number.MAX_VALUE`，这个值为： 1.7976931348623157e+308

-   最小值：`Number.MIN_VALUE`，这个值为： 5e-324

如果使用 Number 表示的变量超过了最大值，则会返回 Infinity。

-   无穷大（正无穷）：`Infinity`

-   无穷小（负无穷）：`-Infinity`

注意：`typeof Infinity`的返回结果是 number。

### NaN

**NaN**：是一个特殊的数字，表示 Not a Number，非数值。在进行数值运算时，如果得不到正常结果，就会返回 NaN。

比如：

```javascript
console.log('abc' / 18); //结果是NaN

console.log('abc' * 'abcd'); //按理说，字符串相乘是没有结果的，但如果你非要让JS去算，它就一定会给你一个结果，结果是NaN。
```

注意事项：

1. `typeof NaN`的返回结果是 number。

2. **Undefined 和任何数值计算的结果为 NaN。NaN 与任何值都不相等，包括 NaN 本身。**

3. 关于 isNaN() 函数 , 往后看

### 连字符和加号的区别

键盘上的`+`可能是连字符，也可能是数字的加号。如下：

```js
console.log("我" + "爱" + "你");	//连字符，把三个独立的汉字，连接在一起了
console.log("我+爱+你");			//原样输出
console.log(1+2+3);				//输出6
```

输出：

```bash
我爱你
我+爱+你
6
```

**总结**：如果加号两边**都是** Number 类型，此时是数字相加。否则，就是连字符（用来连接字符串）。

举例 1：

```javascript
var a = '1';
var b = 2;
console.log(a + b);
```

控制台输出：

```
12
```

举例 2：

```js
var a = 1;
var b = 2;
console.log("a" + b);	//"a"就不是变量了！所以就是"a"+2 输出a2

```

控制台输出：

```bash
a2
```

**于是我们明白了，在变量中加入字符串进行拼接，可以被同化为字符串。**【重要】

### 隐式转换

我们知道，`"2"+1`得到的结果其实是字符串，但是`"2"-1`得到的结果却是数值 1，这是因为计算机自动帮我们进行了“**隐式转换**”。

也就是说，`-`、`*`、`/`、`%`这几个符号会自动进行隐式转换。例如：

```javascript
var a = '4' + 3 - 6;
console.log(a);
```

输出结果：

```javascript
37;
```

虽然程序可以对`-`、`*`、`/`、`%``这几个符号自动进行“隐式转换”；但作为程序员，我们最好自己完成转换，方便程序的可读性。

关于隐式转换的详细内容，往后看.


## 浮点数的运算

### 运算精度问题

在 JS 中，整数的运算**基本**可以保证精确；但是**小数的运算，可能会得到一个不精确的结果**。所以，千万不要使用 JS 进行对精确度要求比较高的运算。

如下：

```javascript
var a = 0.1 + 0.2;
console.log(a); //打印结果十分意外：0.30000000000000004
```

上方代码中，打印结果并不是 0.3，而是 0.30000000000000004。

这是因为，计算机在做运算时，所有的运算都要转换成二进制去计算。然而，有些数字转换成二进制之后，无法精确表示。比如说，**0.1 和 0.2 转换成二进制之后，是无穷的，因此存在浮点数的计算不精确的问题。**

### 处理数学运算的精度问题

如果只是一些简单的精度问题，可以使用 `toFix()` 方法进行小数的截取。备注：关于 `toFixed()`方法， 详见《JavaScript 基础/内置对象：Number 和 Math》。

在实战开发中，关于浮点数计算的精度问题，往往比较复杂。市面上有很多针对数学运算的开源库，比如[decimal.js](https://github.com/MikeMcl/decimal.js/)、 [Math.js](https://github.com/josdejong/mathjs)。这些开源库都比较成熟，我们可以直接拿来用。

-   `Math.js`：属于很全面的运算库，文件很大，压缩后的文件就有 500kb。如果你的项目涉及到大型的复杂运算，可以使用 Math.js。

-   `decimal.js`：属于轻量的运算库，压缩后的文件只有 32kb。大多数项目的数学运算，使用 decimal.js 足够了。

在使用这几个开源库时，既可以用 cdn 的方式引入，也可以用 npm 包的方式引入。

比如说，通过 cdn 的方式引入 `decimal.js` 时，可以这样用：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script src="https://cdn.bootcdn.net/ajax/libs/decimal.js/10.2.0/decimal.min.js"></script>
        <script>
            console.log('加法：');
            var a = 0.1;
            var b = 0.2;
            console.log(a + b);
            console.log(new Decimal(a).add(new Decimal(b)).toNumber());

            console.log('减法：');
            var a = 1.0;
            var b = 0.7;
            console.log(a - b);
            console.log(new Decimal(a).sub(new Decimal(b)).toNumber());

            console.log('乘法：');
            var a = 1.01;
            var b = 1.003;
            console.log(a * b);
            console.log(new Decimal(a).mul(new Decimal(b)).toNumber());

            console.log('除法：');
            var a = 0.029;
            var b = 10;
            console.log(a / b);
            console.log(new Decimal(a).div(new Decimal(b)).toNumber());
        </script>
    </body>
</html>
```

打印结果：

```
加法：
0.30000000000000004
0.3

减法：
0.30000000000000004
0.3

乘法：
1.0130299999999999
1.01303

除法：
0.0029000000000000002
0.0029
```

参考链接：

-   <https://www.bloghome.com.cn/post/nodejsxue-xi-bi-ji-shi-qi-fu-dian-yun-suan-decimal-js.html>

-   <https://zhuanlan.zhihu.com/p/62381711>

## 变量值的传递（赋值）

语句：

```js
a = b;
```

把 b 的值赋给 a，b 不变。

将等号右边的值，赋给左边的变量；等号右边的变量，值不变。

来做几个题目。

举例 1：

```js
// a		b       c
var a = 1; // 1
var b = 2; // 1     2
var c = 3; // 1     2       3
a = b + c; // 5     2       3
b = c - a; // 5     -2      3
c = a * b; // 5     -2      -10
console.log(a);
console.log(b);
console.log(c);
```

输出：

```
5
-2
-10
```

举例 2：

```js
//a    b     c
var a = 1;
var b = 2;
var c = 3; // 1     2     3
a = a + b; // 3     2     3
b = b + a; // 3     5     3
c = c + b; // 3     5     8
console.log(a); // 3
console.log(b); // 5
console.log(c); // 8
```

输出：

```
3
5
8
```

举例 3：

```js
//a       b
var a = '1';
var b = 2; // "1"     2
a = a + b; // "12"    2
b = b + a; // "12"    "212"
console.log(a); // 输出12
console.log(b); // 输出212
```

输出：

```
12
212
```

举例 4：

```js
//a         b
var a = '1';
var b = 2;
a = b + a; //"21"       2
b = b + a; //"21"       "221"
console.log(a); //21
console.log(b); //221
```

效果：

```
21
221
```

举例 5：（这个例子比较特殊，字符串减去数字）

```js
var a = '3';
var b = 2;
console.log(a - b);
```

效果：（注意，字符串 - 数值 = 数值）

```
1
```

## Null：空对象

null 专门用来定义一个**空对象**。例如：`let a = null`，又例如 `Object.create(null)`.

如果你想定义一个变量用来保存引用类型，但是还没想好放什么内容，这个时候，可以在初始化时将其设置为 null。你可以把 null 理解为：**null 虽然是一个单独的数据类型，但null 相当于是一个 object，只不过地址为空（空指针）而已**。

比如：

```js
let myObj = null;
cosole.log(typeof myObj); // 打印结果：object
```

补充：

-   Null 类型的值只有一个，就是 null。比如 `let a = null`。

-   从语义上讲，null表示一个空对象，所以使用 typeof 检查一个 null 值时，会返回 object。

## undefined：未定义类型

### case1：变量已声明，未赋值时

**声明**了一个变量，但没有**赋值**，此时它的值就是 `undefined`。举例：

```js
let name;
console.log(name); // 打印结果：undefined
console.log(typeof name); // 打印结果：undefined
```

补充：

-   Undefined 类型的值只有一个，就是 undefind。比如 `let a = undefined`。

-   使用 typeof 检查一个 undefined 值时，会返回 undefined。

### case2：变量未声明（未定义）时

如果你从未声明一个变量，就去使用它，则会报错（这个大家都知道）；此时，如果用 `typeof` 检查这个变量时，会返回 `undefined`。举例：

```js
console.log(typeof a); // undefined
console.log(a); // 打印结果：Uncaught ReferenceError: a is not defined
```
### case3：函数无返回值时

如果一个函数没有返回值，那么，这个函数的返回值就是 `undefined`。

或者，也可以这样理解：在定义一个函数时，如果末尾没有` return `语句，那么，其实就是 `return undefined`。

举例：

```js
function foo() {}

console.log(foo()); // 打印结果：undefined
```

### case4：调用函数时，未传参

调用函数时，如果没有传参，那么，这个参数的值就是 undefined。

举例：

```js
function foo(name) {
    console.log(name);
}

foo(); // 调用函数时，未传参。执行函数后的打印结果：undefined
```

实际开发中，如果调用函数时没有传参，我们可以根据需要给形参设置一个默认值：

```js
function foo(name) {
    name = name || 'qianguyihao';
}

foo();
```

等学习了 ES6 之后，上方代码也可以这样写：

```js
function foo(name = 'qianguyihao') {}

foo();
```

## 其他区别

undefined 实际上是由 null 衍生出来的，所以`null == undefined`的结果为 **true**。

但是 `null === undefined` 的结果是 false。它们虽然相似，但还是有区别的，其中一个区别是，和数字运算时：

-   `10 + null` 结果为 10。

-   `10 + undefined` 结果为 NaN。

规律总结：

- 任何值和 `null` 运算，`null` 可看做 0 运算。

- 任何数据类型和 `undefined` 运算都是 `NaN`。

## 数据类型转换

**变量的数据类型转换**：将一种数据类型转换为另外一种数据类型。

通常有三种形式的类型转换：

-   转换为字符串类型

-   转换为数字型

-   转换为布尔型

你会专门把某个数据类型转换成 null 或者 undefined 吗？不会，因为这样做，没有意义。

## 变量的类型转换的分类

类型转换分为两种：显式类型转换、隐式类型转换。

### 显式类型转换

-   toString()

-   String()

-   Number()

-   parseInt(string)

-   parseFloat(string)

-   Boolean()

### 隐式类型转换

-   isNaN ()

-   自增/自减运算符：`++`、`--`

-   正号/负号：`+a`、`-a`

-   加号：`+`

-   运算符：`-`、`*`、`/`

### 隐式类型转换（特殊）

-   逻辑运算符：`&&`、`||`、`!` 。非布尔值进行**与或**运算时，会先将其转换为布尔值，然后再运算。`&&`、`||`的运算结果是**原值**，`!`的运算结果为布尔值。具体可以看下一篇文章《运算符》。

-   关系运算符：`<`、`>` `<=` `>=`等。关系运算符，得到的运算结果都是布尔值：要么是 true，要么是 false。具体可以看下一篇文章《运算符》。

针对上面这两种类型转换，这篇文章来详细介绍。
## 一、转换为 String

### 1. 调用 toString()方法

语法：

```javascript
变量.toString();
常量.toString(); // 这里的常量，不允许是数字，但可以是其它常量

// 或者用一个新的变量接收转换结果
var result = 变量.toString();
```

【重要】该方法**不会影响到原变量**，它会将转换的结果返回。当然我们还可以直接写成`a = a.toString()`，这样的话，就是直接修改原变量。

举例：

```js
// 基本数据类型
var a1 = 'qianguyihao';
var a2 = 29;
var a3 = true;

// 引用数据类型
var a4 = [1, 2, 3];
var a5 = { name: 'qianguyihao', age: 29 };

// null 和 undefined
var a6 = null;
var a7 = undefined;

// 打印结果都是字符串
console.log(a1.toString()); // "qianguyihao"
console.log(a2.toString()); // "29"
console.log(a3.toString()); // "true"
console.log(a4.toString()); // "1,2,3"
console.log(a5.toString()); // "object"

// 下面这两个，打印报错
console.log(a6.toString()); // 报错：Uncaught TypeError: Cannot read properties of null
console.log(a7.toString()); // 报错：Uncaught TypeError: Cannot read properties of undefined
```

小技巧：在 chrome 浏览器的控制台中，Number类型、Boolean类型的打印结果是蓝色的，String类型的打印结果是黑色的。

一起来看看 toString() 的**注意事项**。

（1）null 和 undefined 这两个值没有 toString() 方法，所以它们不能用 toString() 。如果调用，会报错。

```js
console.log(null.toString());
console.log(undefined.toString());
```

![](https://img.smyhvae.com/20211116_1458.png)

如果你不确定一个值是不是`null`或`undefined`，可以使用`String()`函数，下一小段会讲。

（2）多数情况下，`toString()`不接收任何参数；当然也有例外：Number 类型的变量，在调用 toString()时，可以在方法中传递一个整数作为参数。此时它会把数字转换为指定的进制，如果不指定则默认转换为 10 进制。例如：

```javascript
var a = 255;

//Number数值在调用toString()时，可以在方法中传递一个整数作为参数
//此时它将会把数字转换为指定的进制,如果不指定则默认转换为10进制
a = a.toString(2); // 转换为二进制

console.log(a); // "11111111"
console.log(typeof a); // string
```

（3）纯小数的小数点后面，如果紧跟连续6个或6个以上的“0”时，那么，将用e来表示这个小数。代码举例：

```js
const num1 = 0.000001; // 小数点后面紧跟五个零
console.log(num1.toString()); // 打印结果："0.000001"

const num2 = 0.0000001; // 小数点后面紧跟六个零
console.log(num2.toString()); // 【重点关注】打印结果："1e-7"

const num3 = 1.0000001;
console.log(num3.toString()); // 打印结果："1.0000001"

const num4 = 0.10000001;
console.log(num4.toString()); // 打印结果："0.10000001"
```

（4）常量可以直接调用 toString() 方法，但这里的常量，不允许是数字。举例如下：

```js
1.toString(); // 注意，会报错
1..toString(); // 合法。得到的结果是字符串"1"
1.2.toString(); // 合法。得到的结果是字符串"1.2"
(1).toString(); // 合法。得到的结果是字符串"1"
```

上方代码中，为何出现这样的打印结果？这是因为：

- 第一行代码：JS引擎认为`1.toString()`中的`.`是小数点，小数点后面的字符是非法的。
- 第二行、第三行代码：JS引擎认为第一个`.`是小数点，第二个`.`是属性访问的语法，所以能正常解释实行。
- 第四行嗲吗：用`()`排除了`.`被视为小数点的语法解释，所以这种写法也能正常解释执行。

参考链接：[你不知道的toString方法](https://www.jianshu.com/p/88570529a03c)

（5）既然常量没有方法，那它为什么可以调用 toString()呢？这是因为，除了 null、undefined之外，其他的常量都有对应的特殊的引用类型——**基本包装类型**，所以代码在解释执行的时候，会将常量转为基本包装类型，这样就可以调用相应的引用类型的方法。

我们在后续的内容《JavaScritpt基础/基本包装类型》中会专门讲到基本包装类型。

### 2. 使用 String()函数

语法：

```javascript
String(变量/常量);
```

使用 String()函数做强制类型转换时：

-   对于 Number、Boolean、String、Object 而言，本质上就是调用 toString()方法，返回结果同 toString()方法。
-   但是对于 null 和 undefined，则不会调用 toString()方法。它会将 null 直接转换为 "null"。将 undefined 直接转换为 "undefined"。

该方法**不会影响到原数值**，它会将转换的结果返回。

### 3. 隐式类型转换：字符串拼接

格式：变量+"" 或者 变量+"abc"

举例：

```javascript
var a = 123; // Number 类型
console.log(a + ''); // 打印结果："123"
console.log(a + 'haha'); // 打印结果："123haha"
```

上面的例子中，打印的结果，都是字符串类型的数据。实际上底层是调用的 String() 函数。

### prompt()：用户的输入

我们在前面的《JavaScript基础/02-JavaScript书写方式：hello world》就讲过，`prompt()`就是专门用来弹出能够让用户输入的对话框。重要的是：用户不管输入什么，都当字符串处理。

## 二、转换为 Number

### 1. 使用 Number() 函数

语法：

```js
const result = Number(变量/常量);
```

**情况一：字符串 --> 数字**

（1）如果字符串中是纯数字，则直接将其转换为数字。

（2）如果字符串是一个**空串**或者是一个**全是空格**的字符串，则转换为 0。

（3）只要字符串中包含了其他非数字的内容（`小数点`按数字来算），则转换为 NaN。怎么理解这里的 **NaN** 呢？可以这样理解，使用 Number() 函数之后，**如果无法转换为数字，就会转换为 NaN**。

**情况二：布尔 --> 数字**

（1）true 转成 1

（2）false 转成 0

**情况三：null --> 数字**，结果为：0

**情况四：undefined --> 数字**，结果为：NaN

### 2. 隐式类型转换：正负号 `+a`、`-a`

> 注意，这里说的是正号/负号，不是加号/减号。

任何值做`+a`、`-a`运算时， 底层调用的是 Number() 函数。不会改变原数值；得到的结果，会改变正负性。

代码举例：

```js
const a1 = '123';
console.log(+a1); // 123
console.log(-a1); // -123

const a2 = '123abc';
console.log(+a2); // NaN
console.log(-a2); // NaN

const a3 = true;
console.log(+a3); // 1
console.log(-a3); // -1


const a4 = false;
console.log(+a4); // 0
console.log(-a4); // -0

const a5 = null;
console.log(+a5); // 0
console.log(-a5); // -0

const a6 = undefined;
console.log(+a6); // NaN
console.log(-a6); // NaN
```

### 3. 使用 parseInt()函数：字符串 -> 整数

语法：

```js
const result = parseInt(需要转换的字符串)
```

**parseInt()**：将传入的数据当作**字符串**来处理，从左至右提取数值，一旦遇到非数值就立即停止；停止时如果还没有提取到数值，就返回NaN。

parse 表示“转换”，Int 表示“整数”。例如：

```javascript
parseInt('5'); // 得到的结果是数字 5
```

按照上面的规律，parseInt()的转换结果，列举如下。

**情况一：字符串 --> 数字**

（1）**只保留字符串最开头的数字**，后面的中文自动消失。

（2）如果字符串不是以数字开头，则转换为 NaN。

（3）如果字符串是一个空串或者是一个全是空格的字符串，转换时会报错。

**情况二：Boolean --> 数字**，结果为：NaN

**情况三：Null --> 数字**，结果为：NaN

**情况四：Undefined --> 数字**，结果为：NaN

---

Number() 函数和 parseInt() 函数的区别：

就拿`Number(true)` 和 `parseInt(true)/parseFloat(true)`来举例，二者在使用时，是有区别的：

-   Number(true) ：**千方百计地想转换为数字；如果转换不了则返回 NaN。**

-   parseInt(true)/parseFloat(true) ：**提取出最前面的数字部分；没提取出来，那就返回 NaN。**

**parseInt()具有以下特性**：

（1）parseInt()、parseFloat()会将传入的数据当作**字符串**来处理。也就是说，如果对**非 String**使用 parseInt()、parseFloat()，它会**先将其转换为 String** 然后再操作。【重要】

比如：

```javascript
var a = 168.23;
console.log(parseInt(a)); //打印结果：168  （因为是先将 a 转为字符串"168.23"，然后然后再操作）

var b = true;
console.log(parseInt(b)); //打印结果：NaN （因为是先将 b 转为字符串"true"，然后然后再操作）

var c = null;
console.log(parseInt(c)); //打印结果：NaN  （因为是先将 c 转为字符串"null"，然后然后再操作）

var d = undefined;
console.log(parseInt(d)); //打印结果：NaN  （因为是先将 d 转为字符串"undefined"，然后然后再操作）
```


（2）**只保留字符串最开头的数字**，后面的中文自动消失。例如：

```javascript
console.log(parseInt('2017在公众号上写了6篇文章')); //打印结果：2017

console.log(parseInt('2017.01在公众号上写了6篇文章')); //打印结果仍是：2017   （说明只会取整数）

console.log(parseInt('aaa2017.01在公众号上写了6篇文章')); //打印结果：NaN （因为不是以数字开头）
```


（3）自动截断小数：**取整，不四舍五入**。

例 1：

```javascript
var a = parseInt(5.8) + parseInt(4.7);
console.log(a);
```

打印结果：

```
9
```

例 2：

```javascript
var a = parseInt(5.8 + 4.7);
console.log(a);
```

打印结果：

```javascript
10;
```

（4）带两个参数时，表示在转换时，包含了进制转换。

代码举例：

```javascript
var a = '110';

var num = parseInt(a, 16); // 【重要】将 a 当成 十六进制 来看待，转换成 十进制 的 num

console.log(num);
```

打印结果：

```
272
```

如果你对打印结果感到震惊，请仔细看上面的代码注释。就是说，无论 parseInt() 里面的进制参数是多少，最终的转换结果是十进制。

我们来看下面的代码，打印结果继续震惊。

```javascript
var a = '5';

var num = parseInt(a, 2); // 将 a 当成 二进制 来看待，转换成 十进制 的 num

console.log(num); // 打印结果：NaN。因为 二进制中没有 5 这个数，转换失败。
```


### 3. 使用 parseInt()函数：字符串 -> 整数

语法：

```js
const result = parseInt(需要转换的字符串)
```

**parseInt()**：将传入的数据当作**字符串**来处理，从左至右提取数值，一旦遇到非数值就立即停止；停止时如果还没有提取到数值，就返回NaN。

parse 表示“转换”，Int 表示“整数”。例如：

```javascript
parseInt('5'); // 得到的结果是数字 5
```

按照上面的规律，parseInt()的转换结果，列举如下。

**情况一：字符串 --> 数字**

（1）**只保留字符串最开头的数字**，后面的中文自动消失。

（2）如果字符串不是以数字开头，则转换为 NaN。

（3）如果字符串是一个空串或者是一个全是空格的字符串，转换时会报错。

**情况二：Boolean --> 数字**，结果为：NaN

**情况三：Null --> 数字**，结果为：NaN

**情况四：Undefined --> 数字**，结果为：NaN

---

Number() 函数和 parseInt() 函数的区别：

就拿`Number(true)` 和 `parseInt(true)/parseFloat(true)`来举例，二者在使用时，是有区别的：

-   Number(true) ：千方百计地想转换为数字；如果转换不了则返回 NaN。

-   parseInt(true)/parseFloat(true) ：提取出最前面的数字部分；没提取出来，那就返回 NaN。

**parseInt()具有以下特性**：

（1）parseInt()、parseFloat()会将传入的数据当作**字符串**来处理。也就是说，如果对**非 String**使用 parseInt()、parseFloat()，它会**先将其转换为 String** 然后再操作。【重要】

比如：

```javascript
var a = 168.23;
console.log(parseInt(a)); //打印结果：168  （因为是先将 a 转为字符串"168.23"，然后然后再操作）

var b = true;
console.log(parseInt(b)); //打印结果：NaN （因为是先将 b 转为字符串"true"，然后然后再操作）

var c = null;
console.log(parseInt(c)); //打印结果：NaN  （因为是先将 c 转为字符串"null"，然后然后再操作）

var d = undefined;
console.log(parseInt(d)); //打印结果：NaN  （因为是先将 d 转为字符串"undefined"，然后然后再操作）
```


（2）**只保留字符串最开头的数字**，后面的中文自动消失。例如：

```javascript
console.log(parseInt('2017在公众号上写了6篇文章')); //打印结果：2017

console.log(parseInt('2017.01在公众号上写了6篇文章')); //打印结果仍是：2017   （说明只会取整数）

console.log(parseInt('aaa2017.01在公众号上写了6篇文章')); //打印结果：NaN （因为不是以数字开头）
```


（3）自动截断小数：**取整，不四舍五入**。

例 1：

```javascript
var a = parseInt(5.8) + parseInt(4.7);
console.log(a);
```

打印结果：

```
9
```

例 2：

```javascript
var a = parseInt(5.8 + 4.7);
console.log(a);
```

打印结果：

```javascript
10;
```

（4）带两个参数时，表示在转换时，包含了进制转换。

代码举例：

```javascript
var a = '110';

var num = parseInt(a, 16); // 【重要】将 a 当成 十六进制 来看待，转换成 十进制 的 num

console.log(num);
```

打印结果：

```
272
```

如果你对打印结果感到震惊，请仔细看上面的代码注释。就是说，无论 parseInt() 里面的进制参数是多少，最终的转换结果是十进制。

我们来看下面的代码，打印结果继续震惊。

```javascript
var a = '5';

var num = parseInt(a, 2); // 将 a 当成 二进制 来看待，转换成 十进制 的 num

console.log(num); // 打印结果：NaN。因为 二进制中没有 5 这个数，转换失败。
```

### 4. parseFloat()函数：字符串 --> 浮点数（小数）

parseFloat()的作用是：将字符串转换为**浮点数**。

parseFloat()和 parseInt()的作用类似，不同的是，parseFloat()可以获得小数部分。

代码举例：

```javascript
var a = '123.456.789px';
console.log(parseFloat(a)); // 打印结果：123.456
```

parseFloat() 的几个特性，可以参照 parseInt()。

## 三、转换为 Boolean

### 转换结果列举【重要】

其他的数据类型都可以转换为 Boolean 类型。无论是隐式转换，还是显示转换，转换结果都是一样的。有下面几种情况：

（1）情况一：数字 --> 布尔。 0 和 NaN的转换结果 false，其余的都是 true。比如 `Boolean(NaN)`的结果是 false。

（2）情况二：字符串 ---> 布尔。空串的转换结果是false，其余的都是 true。全是空格的字符串，转换结果也是 true。字符串`'0'`的转换结果也是 true。

（3）情况三：null 和 undefined 都会转换为 false。

（4）情况四：引用数据类型会转换为 true。注意，空数组`[]`和空对象`{}`，**转换结果也是 true**，这一点，很多人都不知道。

**重中之重来了：**

转换为 Boolean 的上面这几种情况，**极其重要**，开发中会频繁用到。比如说，我们在项目开发中，经常需要对一些**非布尔值**做逻辑判断，符合条件后，才做下一步的事情。这个逻辑判断就是依据上面的四种情况。

举例：（接口返回的内容不为空，前端才做进一步的事情）

```js
const result1 = '';
const result2 = { a: 'data1', b: 'data2' };

if (result1) {
    console.log('因为 result1的内容为空，所以代码进不了这里');
}

if (result2 && result2.a) {
    // 接口返回了 result2，且 result2.a 里面有值，前端才做进一步的事情
    console.log('代码能进来，前端继续在这里干活儿');
}
```

这里再次强调一下，空数组`[]`和空对象`{}`转换为 Boolean 值时，转换结果为 true。