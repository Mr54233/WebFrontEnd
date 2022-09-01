// 1. 导入jQuery模块
import $ from "jquery";

// 导入css
import './css/index.css'

// 导入less
import './css/my.less'

$(function () {
    $('#myul li:odd').css('backgroundColor','orange')
    $('#myul li:even').css('backgroundColor','green')
});
