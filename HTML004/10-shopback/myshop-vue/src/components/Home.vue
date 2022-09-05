<template>
	<div>
		<h1>首页</h1>
		<el-button type="info" @click="logout">退出登录</el-button>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		// 退出登陆的处理方法
		logout() {
			// 1. 清空sessionStorage中的token
			window.sessionStorage.clear();
			// 2. 强制进入到登陆页面
			this.$router.push("/");
		},
	},
};
</script>

<style></style>
