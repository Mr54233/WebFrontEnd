window.onload = function () {
	//获取所有的表单元素
	var inputs = document.querySelectorAll("input");
	// 遍历表单元素 , 检查表单元素是否存在自定义属性
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];
		if (input.dataset["req"]) {
			// 表单上有必填自定义属性
			var errMsg = input.dataset["err-msg"] || "数据不能为空";
			var sucMsg = input.dataset["suc-msg"] || "有效数据";
			// 给表单元素绑定onblur时间的处理函数
			bind(input, {name:"req"}, errMsg, sucMsg);
		} else if (input.dataset['minLen']){
			var errMsg = input.dataset["err-msg"] || "数据不小于" + input.dataset['minLen'];
			var sucMsg = input.dataset["suc-msg"] || "有效数据";
            bind(input,{name : 'min-len' , val:input.dataset['minLen']},errMsg, sucMsg);
        }
	}

	/* 
    功能 : 绑定失去焦点事件的处理函数
    参数 : el表单元素 , 
            type验证类型 , req表示必填 , minLen最小长度
            errMsg , 错误提示信息
            sucMsg , 成功提示信息
    */
	function bind(el, type, errMsg, sucMsg) {
		// 构造正则表达式对象
		var reg = null;
		switch (type.name) {
			case "req":
				reg = /^\w+$/gi;
				break;
            case "min-len":
                var con = '\\w{'+ type.val +',}';
                reg = new RegExp(con,'ig');
                break;
		}
		// 获取显示提示信息的元素对象
		var td = el.parentNode.nextElementSibling;
		// 订阅失去焦点事件的处理函数
		el.onblur = function () {
			if (!reg.test(this.value)) {
				td.innerHTML = errMsg;
				td.style.color = "red";
				return false;
			} else {
				td.innerHTML = sucMsg;
				td.style.color = "green";
				return true;
			}
		};
	}
};
