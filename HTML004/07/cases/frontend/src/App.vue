<template>
	<section class="todoapp">
		<!-- 除了驼峰, 还可以使用-转换链接 -->
		<TodoHeader></TodoHeader>
		<TodoMain></TodoMain>
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

export default {
	components: {
		TodoHeader,
		TodoMain,
		TodoFooter,
	},
};
</script>
