// 封装请求
function ajx(count) {
	$.ajax({
		type: "get",
		url: `http://127.0.0.1:3000/api/getNews/${count}`,
		success: function (response) {
			var html = "";
			var finHtml = "";
			response.forEach((news) => {
				html = `<tr>
                    <td>${news.title}</td>
                    <td>${news.subtitle}</td>
                    <td>${news.author}</td>
                    <td>${news.content}</td>
                    <td>${news.pubdate}</td>
                    </tr>`;
				finHtml += html;
			});
			$("#tb").html(finHtml);
		},
	});
}

// 加载即调用请求
$(document).ready(() => {
	ajx(1);
});

layui.use("laypage", function () {
	var laypage = layui.laypage;

	$.ajax({
		type: "get",
		url: "http://127.0.0.1:3000/api/getNews",
		success: function (response) {
			var count = response.length;
			//执行一个laypage实例
			laypage.render({
				elem: "page", //注意，这里的 test1 是 ID，不用加 # 号
				limit: 5,
				limits: [5, 10, 15, 20],
				layout: ["prev", "page", "next", "count", "limit"],
				count, //数据总数，从服务端得到
				jump: function (obj, first) {
					//obj包含了当前分页的所有参数，比如：
					// console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
					// console.log(obj.limit); //得到每页显示的条数

					//首次不执行
					if (!first) {
						ajx(obj.curr);
					}
				},
			});
		},
	});
});

//注意：导航 依赖 element 模块，否则无法进行功能性操作
layui.use("element", function () {
	var element = layui.element;
});

// 获取登录的姓名

if(localStorage.token){
    $.ajax({
        type: "post",
        url: "http://127.0.0.1:3000/api/user/getuname",
        data:{
            token:localStorage.token
        },
        success: function (response) {
            $('#uname').html(response.username)
            $('#login').css('display','none')
        }
    });
}

// 退出登录
$('#logout').click((e)=>{
    e.preventDefault();
    // 移除token
    localStorage.token = '';
    location.href='index.html'
})