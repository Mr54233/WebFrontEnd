import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import TreeTable from "vue-table-with-tree-grid";

// 树形组件
Vue.component("tree-table", TreeTable);

// 导入elementUI 样式和插件
import "element-ui/lib/theme-chalk/index.css";
import "./plugins/element";

// 导入通用样式文件
import "./assets/css/global.css";

// 导入第三方字体图标类样式
import "./assets/fonts/iconfont.css";

Vue.config.productionTip = false;

// 设置axios默认url
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/";

// 使用axios请求拦截器去完成路由守卫任务
axios.interceptors.request.use((config) => {
	config.headers.Authorization = window.sessionStorage.getItem("token");
	return config;
});

// 将axios 绑定到vue原型对象上
Vue.prototype.$http = axios;

// 定义全局时间过滤器
Vue.filter("dateFormat", function (originVal) {
	const dt = new Date(originVal * 1000);

	const y = dt.getFullYear();
	const m = (dt.getMonth() + 1 + "").padStart(2, "0");
	const d = (dt.getDate() + "").padStart(2, "0");

	const hh = (dt.getHours() + "").padStart(2, "0");
	const mm = (dt.getMinutes() + "").padStart(2, "0");
	const ss = (dt.getMilliseconds() + "").padStart(2, "0");

	const DateStr = `${y}-${m}-${d} ${hh}:${mm}:${ss}`;

	return DateStr;
});

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
