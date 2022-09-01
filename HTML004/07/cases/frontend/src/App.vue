<template>
	<section class="todoapp">
		<!-- 除了驼峰, 还可以使用-转换链接 -->
		<TodoHeader @customEvent="process"></TodoHeader>
		<TodoMain :arr="showArr"></TodoMain>
		<TodoFooter></TodoFooter>
	</section>
</template>

<script>
// 1.0 样式引入
import "./assets/css/base.css";
import "./assets/css/index.css";

import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";

import axios from "./assets/lib/axios";
axios.defaults.baseURL = "http://localhost:3000/api/case";
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

export default {
	data() {
		return {
			cases: "",
		};
	},
	components: {
		TodoHeader,
		TodoMain,
		TodoFooter,
	},
	methods: {
		process(x) {
			console.log(x);
		},
	},
	mounted() {
		axios.get("/getList").then((ret) => {
			this.cases = ret.data;
			console.log(this.cases);
		});
	},
};
</script>
