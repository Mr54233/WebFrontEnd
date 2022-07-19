window.addEventListener("load", function () {
	// 1. 找到效果相关的元素对象
	var previewImg = document.querySelector(".preview_img");
	var mask = document.querySelector(".mask");
	var big = document.querySelector(".big");

	// 2. 事件监听鼠标移入移出 , 将黄色盒子和大图显示和隐藏
	previewImg.addEventListener("mouseover", function () {
		mask.style.display = "block";
		big.style.display = "block";
	});
	previewImg.addEventListener("mouseout", function () {
		mask.style.display = "none";
		big.style.display = "none";
	});

	previewImg.addEventListener("mousemove", function (e) {
		// 获取到鼠标在小图中的坐标 , 然后赋值给黄色盒子
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		// 计算mask的xy坐标值
		var maskX = x - mask.offsetWidth / 2;
		var maskY = y - mask.offsetHeight / 2;
		// mask的最大移动距离
        var maskMax = previewImg.offsetWidth - mask.offsetWidth;

		if (maskX <= 0) {
			maskX = 0;
		} else if (maskX >= maskMax) {
			maskX = maskMax;
		}
		if (maskY <= 0) {
			maskY = 0;
		} else if (maskY >= maskMax) {
			maskY = maskMax;
		}
		// 设置坐标
		mask.style.left = maskX + "px";
		mask.style.top = maskY + "px";

        var bigImg = document.querySelector('.bigImg')
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
		// 计算大图像移动后的xy坐标
        var bigX = maskX * bigMax / maskMax
        var bigY = maskY * bigMax / maskMax
		// 设置坐标
        bigImg.style.left = -bigX + 'px'
        bigImg.style.top = -bigY + 'px'
	});
});
