# final

## HTML

+ html:

  + head

    + title
    + meta
      + SEO : title Keywords Description
    + link 导入css文件
    + script 导入外部的脚本文件

  + body

    + p
  
    + span
  
    + h1-6
  
    + ul li
  
    + ol li
  
    + img src="文件" alt="找不到图像的提示文字"  title="鼠标悬停的提示信息" 绝对路径 相对路径 
      + http://www.baidu.com 其他服务器上的资源
      + ../上一级/images/a.jpg

    + a href="路径" name="锚的名字"

      + mailto:邮箱地址
      + #锚名字  
  
    + 表格 
  
      ```
      table 
          theader 
          tbody 
          tfooter
          tr 行
          th 头
          td 数据
      ```
  
      表格在网页里边的用途:
  
      1. 用作显示数据
      2. 用作布局(淘汰)
      3. form + table布局
  
    + 表单(**重点**)
  
      + form + table布局
  
        ```html
        <form action="提交地址" method="post|get">
        <!-- get不安全 -->
        <!-- url?name=value&name1=value2&&...
        post会封装到数据包内,比较安全 -->
            <table>
                <tr>
                	<td>标签</td>
                    <td><input type="" name="" value=""/></td>
                </tr>
            </table>
        </form>
        ```
  
        + input 标签类型
          1. text
          2. password
          3. radio
          4. checkbox
             + checked="checked" 
          5. submit
          6. reset
          7. button
          8. file
          9. hidden
          10. Email
          11. Url
          12. Phone
          13. Number
          14. Color
          15. Date
          16. Time
          17. Search
        + textarea 多行文本框
          + rows
          + cols
        + select 下拉列表框
          + name
          + option
          + value
          + selected = "selected"
          + readonly = "readonly" 只读
          + disabled = "disabled" 禁用
            + readonly 没变灰 可以获得焦点
            + disabled 背景变灰 不能获得焦点
          + enabled = "enabled" 启用
  
  + div
  
    + dl
      + dt
        + dd
  
  + header
  
    + nav
    + article
    + section
    + aside
    + footer

##  CSS

+ 三种使用方法
  + 行内 行内style=""
  + 内嵌 style
  + 外联 `<link type=”text/css”rel=”stylesheet” href=”css文件名”>`

+ 选择器

  + 标签

  + 类

  + id

  + 伪类

    + a:hover li:hover div:hover 

      + ```css
        a:hover div{
        a鼠标悬停里边的div
        }
        ```

  + 后代

  + 并集

  + 通配符 *

    + CSS3 新增的选择器

  + 属性选择器

  + 结构伪类选择器

  + 伪元素选择器

+ 盒子模型:

  + margin 外边距

  + border 边框

    + ```
      border-width 宽度
      		style 风格 : 实线虚线
      		color 颜色 : 
      ```

    + border - top

      + left
      + right
      + bottom

  + padding 内边距

    + ```
      margin:10px 上下左右都是10px
      margin:10px 20px 上下10 左右20
      margin: 1 2 3 4  上1 右2 下3 左4
      margin:10px 20px 30px ;上10 左右20 下30
      ```

    + margin-top

      + left
      + right
      + bottom

  + width 宽度

  + height 高度

    + CSS3的盒子border和padding不会撑大盒子
    + IE浏览器的盒子也不兼容 

  + left 左上角坐标

  + top 左上角坐标

  + bottom 右下

  + right 右下

+ display转换显示方式	
  + none 隐藏 
  + block 转换为块级元素
  + inline-block 转换为行内块
    + 块与块间有缝隙
  + flex 
+ visibility 隐藏但是占位
  + hidden
  + visible

+ float(**重点**)
    + left
    + right
		+ 浮动就没有缝隙了

+ position(**重点**)
  + static
  + **relative 相对于自己标准流的定位 不会被下面的挤掉**
  + **absolute 相对于有定位的父级元素定位 脱离标准流 会被下面的内容挤掉**
  + **fixed 直接找浏览器定位 脱离标准流**

+ **子绝父相**
  + **子元素绝对定位,父元素相对定位**

+ color
+ background:颜色|图像地址|重复|定位
  + background-color 颜色
  + background-image 图片
  + background-repeat 重复
  + background-position 定位 **精灵图**
  + background-size 大小 **二倍图**
+ text-align:文本对齐
  + 盒子里边的文本对齐
  + center
+ margin:上下随便 左右auto
  + 块级元素水平居中
+ vertical-align:
  + 行内元素的垂直对齐
  + baseline 基线对齐 导致底边对齐会有距离
    + 图片底部的有空间就是因为基线对齐 vertical-align:middle 即可消除底部空白
