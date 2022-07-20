window.addEventListener("load", function () {
	// 0. 根据图像数量生成小圆圈数量
	var ol = document.querySelector(".circle");
	var ul = document.querySelector(".focus ul");

	// 自动添加小圆圈
	for (var i = 0; i < ul.children.length; i++) {
		var li = document.createElement("li");
		// 添加自定义属性用于记录序号
		// li.setAttribute('data-index' , i)
		li.dataset["index"] = i;
		ol.appendChild(li);
	}
	// 第一个小圆圈应该添加current类样式
	ol.children[0].className = "current";

	// 1. 鼠标经过轮播图模块 , 左右按钮显示 , 离开隐藏左右按钮.
	var focus = document.querySelector(".focus");
	var arrow_l = document.querySelector(".arrow-l");
	var arrow_r = document.querySelector(".arrow-r");

	focus.addEventListener("mouseenter", function () {
		arrow_l.style.display = "block";
		arrow_r.style.display = "block";
	});
	focus.addEventListener("mouseleave", function () {
		arrow_l.style.display = "none";
		arrow_r.style.display = "none";
	});
	
    var focusWidth = focus.offsetWidth;
	// 2. 单击右侧按钮一次 , 图片往左播放一张 , 以此类推
	// 3. 
	// 设置一个节流阀变量
	var flag = true;//节流阀变量
	arrow_r.addEventListener("click", function () {
		if(flag){
			flag = false;// 已经开始执行动画 , 节流阀关闭 , 不允许执行下一次动画
			// 先要找到现在的图像的序号 , (current小圆圈的序号)
			for (var i = 0; i < ol.children.length; i++) {
				if (ol.children[i].className == "current") {
					var index = i;
					ol.children[i].removeAttribute("class");
					break;
				}
			}
			index++;
			index = index == ol.children.length ? 0 : index;
			ol.children[index].className = "current";
			animate(ul, - index*focusWidth , function(){
				flag = true ; // 动画执行结束 , 打开节流阀 , 可以执行下一次动画
			});
		}
	});
	arrow_l.addEventListener("click", function () {
		if(flag){
			// 先要找到现在的图像的序号 , (current小圆圈的序号)
			for (var i = 0; i < ol.children.length; i++) {
				if (ol.children[i].className == "current") {
					var index = i;
					ol.children[i].removeAttribute("class");
					// break;
				}
			}
			index--;
			index = index < 0 ? ol.children.length-1 : index;
			ol.children[index].className = "current";
			animate(ul, -index * focusWidth , function(){
				flag = true;
			});
		}
	});

	//4. 点击小圆圈 , 播放相对应的图片
	ol.addEventListener("click", function (e) {
        var index = e.target.dataset["index"];
		animate(ul, -index * focusWidth);
		for (var i = 0; i < this.children.length; i++) {
			this.children[i].className = "";
		}
		e.target.className = "current";
	});

    // 5. 鼠标不经过轮播图 , 轮播图自动播放
    // 6. 鼠标经过 , 轮播图模块 , 自动播放停止
    var timer = setInterval(() => {
        arrow_r.click();
    }, 3000);
    
    focus.addEventListener('mouseover' , function(){
        clearInterval(timer);
    });
    focus.addEventListener('mouseout' , function(){
		clearInterval(timer);
        var timer = setInterval(() => {
            arrow_r.click();
        }, 3000);
    });
});
