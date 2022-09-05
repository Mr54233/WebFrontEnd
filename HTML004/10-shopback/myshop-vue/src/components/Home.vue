<template>
	<el-container class="home-container">
		<el-header>
			<span>电商后台管理子系统</span>
			<el-button type="info" @click="logout"
				>退出登录</el-button
			></el-header
		>
		<el-container>
			<el-aside width="200px">
				<el-menu
					default-active="2"
					class="el-menu-vertical-demo"
					background-color="#333744"
					text-color="#fff"
					active-text-color="#ffd04b"
				>
					<!-- 一级菜单区域 -->
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>导航一</span>
						</template>
						<!-- 二级菜单 -->
						<el-menu-item index="1-1">选项1</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>Main</el-main>
		</el-container>
	</el-container>
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

<style scoped>
.home-container {
	height: 100%;
}
.el-header {
	background-color: #373d41;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.el-header span {
	font-size: 20px;
	color: #fff;
}

.el-aside {
	background-color: #333744;
}
.el-main {
	background-color: #eaedf1;
}
</style>
