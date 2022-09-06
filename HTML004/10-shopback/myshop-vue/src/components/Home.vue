<template>
	<el-container class="home-container">
		<el-header>
			<span>电商后台管理子系统</span>
			<el-button type="info" @click="logout"
				>退出登录</el-button
			></el-header
		>
		<el-container>
			<!-- 侧边栏宽度 -->
			<el-aside :width="isCollapse ? '64px' : '200px'">
				<!-- 控制收缩扩展的区域 -->
				<div class="toggle-button" @click="toggleCollapse">|||</div>
				<el-menu
					:default-active="activeIndex"
					class="el-menu-vertical-demo"
					background-color="#333744"
					text-color="#fff"
					active-text-color="#409eff"
					:unique-opened="true"
					:collapse="isCollapse"
					:collapse-transition="false"
					:router="true"
				>
					<!-- 一级菜单区域 -->
					<el-submenu
						:index="menu.id + ''"
						v-for="menu in menulist"
						:key="menu.id"
					>
						<template slot="title">
							<i :class="icons[menu.id]"></i>
							<span>{{ menu.authName }}</span>
						</template>
						<!-- 二级菜单区域 -->
						<el-menu-item
							:index="submenu.path"
							v-for="submenu in menu.children"
							:key="submenu.id"
							@click="setActiveIndex(submenu.path)"
						>
							<template slot="title">
								<i class="el-icon-menu"></i>
								<span>{{ submenu.authName }}</span>
							</template>
						</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
export default {
	// 在创建了vue对象之后 , 请求api服务器端提供的导航菜单数据
	created() {
		this.getMenuList();
		// 当创建完vue实例对象 , 获取sessionStorage中的激活菜单的index
		this.activeIndex = window.sessionStorage.getItem("activeIndex");
	},
	data() {
		return {
			menulist: [],
			icons: {
				125: "iconfont icon-users",
				103: "iconfont icon-tijikongjian",
				101: "iconfont icon-shangpin",
				102: "iconfont icon-danju",
				145: "iconfont icon-baobiao",
			},
			//控制菜单收缩和扩展的模型数据
			isCollapse: false,
			// 激活菜单的index
			activeIndex: "",
		};
	},
	methods: {
		// 退出登陆的处理方法
		logout() {
			// 1. 清空sessionStorage中的token
			window.sessionStorage.clear();
			// 2. 强制进入到登陆页面
			this.$router.push("/");
		},
		// 获取导航菜单数据
		async getMenuList() {
			const { data: res } = await this.$http.get("menus");
			// console.log(res);
			if (res.meta.status !== 200) {
				return this.$message.error("123" + res.meta.message);
			} else {
				this.menulist = res.data;
			}
		},
		// 控制导航菜单的收缩和扩展
		toggleCollapse() {
			this.isCollapse = !this.isCollapse;
		},
		// 设置激活菜单
		setActiveIndex(activeIndex) {
			this.activeIndex = activeIndex;
			// 将激活菜单的index保存到sessionStorage中
			window.sessionStorage.setItem("activeIndex", activeIndex);
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
.el-submenu span {
	margin-right: 10px;
}

.toggle-button {
	background-color: #4a5064;
	font-size: 10px;
	line-height: 24px;
	color: #fff;
	text-align: center;
	letter-spacing: 0.2rem;
	cursor: pointer;
}
</style>
