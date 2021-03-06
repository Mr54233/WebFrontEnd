# 16
# animation动画
## 什么是动画
+ 动画是CSS3中最具颠覆性的特征之一,可通过设置多个节点来精确的控制一个或者一组动画,从而实现复杂的动画效果顺序会影响到转换的效果(先旋转会改变坐标轴方向)
## 动画的基本使用
1. 先定义动画
2. 再调用定义好的动画
## 语法格式(定义动画)
```css
@keyframes animationname {
    0% {
        width:100px
    }
    100% {
        width:200px
    }
}
```
## 语法格式(使用动画)
```css
div{
    <!-- 调用动画 -->
    animation-name:动画名称
    <!-- 持续时间 -->
    animation-duration:持续时间
}
```
+ 动画序列
    + 0%是动画的开始,100%是动画的完成,这样的规则就是动画序列
    + 在`@keyframes`中规定某项CSS样式,就由创建当前样式逐渐改为新样式的动画效果
    + 动画是使元素从一个样式逐渐变化为另一个样式的效果,可以改变任意多的样式任意多的次数
    + 用百分比来规定变化发生的时间,或用`form`和`to`,等同于0%和100%,常用在仅有开始与结束的时候

### 动画属性
|属性|描述|
|-|-|
|`@keyframes`|规定动画|
|`animation`|所有动画属性的缩写,除了`animation-play-state`属性|
|`animation-name`|规定`@keyframes`动画的名称.(**必须的**)|
|`animation-duration`|规定动画完成一个周期所花费的秒或毫秒,默认是0(**必须的**)|
|`animation-timing-function`|规定动画的速度曲线,默认为`ease`|
|`animation-delay`|规定动画何时开始,默认为0|
|`animation-iteration-count`|规定动画被播放的次数,默认为1,无限为`infinite`|
|`animation-direction`|规定动画是否在下一周期逆向播放.默认是`normal`,逆播放`alternate`|
|`animation-play-state`|规定动画是否正在运行或暂停.默认是`running`,还有`paused`|
|`animation-fill-mode`|规定动画结束后的状态,保持`forwards`,回到初始状态`backwords`|