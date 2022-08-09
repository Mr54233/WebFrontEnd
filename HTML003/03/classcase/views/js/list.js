window.addEventListener("load", () => {
	var btndels = document.querySelectorAll(".td .btnDel");
	for (var i = 0; i < btndels.length; i++) {
		btndels[i].addEventListener("click", function () {
			// 向服务器发出请求 : /stu/delete?no=xxx
			var td = this.parentNode.parentNode.firstElementChild;

			window.location.href = "/stu/delete?no=" + td.innerHTML;
		});
	}
});
