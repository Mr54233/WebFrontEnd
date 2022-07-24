$(function () {
    // 节流阀 
    var flag = true;

	// 今日推荐距离顶部的距离
	var toolTop = $(".recommend").offset().top;
    // 加载调用
    toggleTool();
    // 封装函数
    function toggleTool(){
        // 如果滚动的距离大于等于今日推荐的距离
        if ($(document).scrollTop() >= toolTop) {
            // 淡入
            $(".fixedtool").fadeIn();
        } else {
            // 淡出
            $(".fixedtool").fadeOut();
        }
    }
	$(window).scroll(function () {
        toggleTool();
        // 滚动长度决定 左侧电梯导航的current
        if (flag){
            $(".floor .w").each(function(i,ele){
                if($(document).scrollTop() >= $(ele).offset().top){
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass()
                }
            })
        }
	});
	// 点击导航到对应位置
	$(".fixedtool li").click(function () {
        flag = false;
		// 拿到点击li的索引值
		// 去往对应索引值对印的地方 ， 计算出需要移动的距离
		var current = $(".floor .w").eq($(this).index()).offset().top;

		// 页面动画效果滚动到目标位置
		$("body , html").stop().animate({
			scrollTop: current
		},function(){
            flag = true;
        });

        // hover
        $(this).addClass('current').siblings().removeClass();
	});
});
