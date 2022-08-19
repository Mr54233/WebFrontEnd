// 1.1 获取裁剪区域的 DOM 元素
var $image = $("#image");
// 1.2 配置选项
const options = {
	// 纵横比
	aspectRatio: 1,
	// 指定预览区域
	preview: ".img-preview",
};

// 1.3 创建裁剪区域
$image.cropper(options);

$(".btnChange").on("click", function () {
	$("#file").click();
});

$("#file").on("change", function (e) {
	var file = e.target.files[0];
	var newImgUrl = URL.createObjectURL(file);
	$image.cropper("destroy").attr("src", newImgUrl).cropper(options);
});

$(".btnUpload").on("click", function (e) {
	var dataURL = $image
		.cropper("getCropperCanvas", {
			// 创建一个canvas画布
			width: 100,
			height: 100,
		})
		.toDataURL("image/png");
	// 写个点击上传的ajax
	$.ajax({
		type: "method",
		url: "url",
		data: dataURL,
		dataType: "dataType",
		success: function (response) {},
	});
});
