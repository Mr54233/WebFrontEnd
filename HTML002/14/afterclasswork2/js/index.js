$(function(){
    // 鼠标经过
    $('#left li').mouseover(function(){
        // 拿到索引号
        var index = $(this).index();
        // 让索引号对应的图片显示
        $("#content div").eq(index).show();
        $("#content div").eq(index).siblings().hide();
    })
})