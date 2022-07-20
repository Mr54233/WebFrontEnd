/* 
功能: 封装缓动动画函数
参数:   el 执行动画的元素对象
        target , 目标位置
        callback , 回调函数
*/
function animate(el, target , callback) {
    // 1. 计算步长
    var step = (target - el.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    el.style.left = el.offsetLeft + step + "px";
    
    clearInterval(el.timer);
    el.timer = setInterval(() => {
        var step = (target - el.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        el.style.left = el.offsetLeft + step + "px";
        
        // 到了位置就得清除定时器
        if(el.offsetLeft == target ){
            clearInterval(el.timer);
            callback(); 
        }
    }, 15);
}