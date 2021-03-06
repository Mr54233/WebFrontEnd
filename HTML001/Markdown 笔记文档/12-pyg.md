# 12
+ 能会引入ico图标
+ 能简单看懂网站优化的三大标签
+ **能使用字体图标(重点)**
+ 能说出我们的css属性书写顺序
+ 跟上老师的节奏完成品优购电商项目

## 代码规范
+ 请参考品优购代码规范

## 前期准备工作
+ 要实现结构和样式相分离的设计思想

### 文件夹结构
|名称|说明|
|-|-|
|项目文件夹|pinyougou|
|样式类图片文件夹|img|
|样式文件夹|css|
|产品类图片文件夹|upload|
|字体类文件夹|fonts|
|脚本文件夹|js|

## 网站ico图标
### 使用ico图标
+ 首先favicon.ico这个图标放在根目录下
+ 在html里面,head之间引入代码
    + `<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>`

### 制作ico图标
+ 方法步骤:
    + 首先把我们想要的切成图片
    + 把图片转换成ico图标,我们借助于第三方转换网站:bitbug.net,比特虫

### 注意
1. 它是显示在浏览器中的网页图标.
2. 它是图标形式,不是图片
3. 位置放在head标签里面
4. 后面的type="image/x-icon"属性可以省略
5. 为了兼容性,请将favicon.ico这个图标放在根目录下


## 网站优化三大标签
+ SEO是由英文search engine optimization缩写而来,中文为"搜索引擎优化"
+ 常见的搜索引擎,比如百度谷歌
+ SEO是指通过对网站进行站内优化,网站结构调整,网站内容建设,网站代码优化等和站外优化,从而提高网站的关键词排名以及公司产品的曝光度.简单的说就是,把产品做好,搜索引擎就会介绍客户来.
+ 我们现在阶段主要进行站内优化,网站优化

![](../img/%E4%B8%89%E5%A4%A7%E6%A0%87%E7%AD%BE.png)

### 网页title标题
+ title具有不可替代性,是我们的内页第一个重要标签,是搜索引擎了解网页的入口,和对网页主题的最佳判断点.
+ 建议:
    + 首页标题:网站名(产品名) - 网站的介绍
+ 例如:
    + 品优购-综合网购首选-正品低价,品质保证,配送及时,轻松购物!
    + 小米商城 - 小米5s,红米note4,小米mix,小米笔记本官方网站

![](../img/%E5%85%B3%E9%94%AE%E8%AF%8D.png)

### Description网页说明
对于关键词的作用明显降低,但由于很多搜索引擎,仍然大量采用王爷的mata标签中描述部分作为搜索结果的"内容摘要".就是简要说明我们网站的主要做什么的
我们提倡,Description作为网站的总体业务和主题囊括,多采用"我们是....","我们提供...","xxx网作为...","电话:..."之类语句.

+ 品优购网:
`<meta name="description"
        content="品优购JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!" />`

+ 注意点:
    1. 描述中出现关键词,与正文内容相关,这部分内容是给人看的,所以要写的很详细,让人感兴趣,吸引用户点击.
    2. 同样遵循简短原则,字符数包含空格在内不要超过120个汉字
    3. 补充在title和keywords之间未能充分表述的说明.
    4. 用英文逗号 关键词1 , 关键词2

## 字体图标
+ 图片是有诸多优点的,但是缺点很明显
    + 比如图片不但增加了总文件的大小,还增加了很多额外的"http请求"这都会大大降低网页的性能的
    + 图片不能很好的进行"缩放",因为图片放大和缩小会失真

+ 字体图标优点
    + 可以做出跟图片一样可以做的事情,改变透明度,旋转都,等
    + 但是本质其实是文字,可以很随意的改变颜色,产生阴影,透明效果等等.
    + 本身体积更小,但是携带的信息并没有削减
    + 几乎支持所有的浏览器
    + 移动端设备必备良药

字体图标使用流程
![](../img/%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87%E4%BD%BF%E7%94%A8%E6%B5%81%E7%95%85.png)