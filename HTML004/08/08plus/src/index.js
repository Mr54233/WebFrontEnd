// 导入jQuery模块
import $ from "jquery";

// 导入vue框架
import {createApp} from "vue";

// 导入单文件组件
import App from "./components/app.vue";

// 导入css
import "./css/index.css";

// 导入less
import "./css/my.less";

$(function () {
	$("#myul li:odd").css("backgroundColor", "orange");
	$("#myul li:even").css("backgroundColor", "green");
});

// class Person {
// 	static count = 100;
// }

// console.log(Person.count);

createApp(App).mount('#app')