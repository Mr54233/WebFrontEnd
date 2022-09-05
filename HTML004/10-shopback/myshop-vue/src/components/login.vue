<template>
	<div id="app" class="login_container">
		<!-- 头部图像区域 -->
		<div class="login_box">
			<div class="img_box">
				<img src="../assets/logo.png" alt="" />
			</div>
			<!-- 脚部的表单区域 -->
			<el-form
				ref="loginFormRef"
				label-width="80px"
				:module="loginForm"
				:rules="loginFormRules"
			>
				<el-form-item prop="username">
					<el-input
						v-model="loginForm.username"
						prefix-icon="iconfont icon-user"
					></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						v-model="loginForm.password"
						prefix-icon="iconfont icon-3702mima"
						type="password"
					></el-input>
				</el-form-item>
				<el-form-item class="btns">
					<el-button type="primary" @click="login">登录</el-button>
					<el-button type="info" @click="resetLoginForm"
						>重置</el-button
					>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loginForm: {
				username: "admin",
				password: "123456",
			},
			loginFormRules: {
				username: [
					{
						required: true,
						message: "请输入用户名称",
						trigger: "blur",
					},
					{
						min: 3,
						max: 10,
						message: "长度是3到10个字符",
						trigger: "blur",
					},
				],
				password: [
					{
						required: true,
						message: "请输入登陆密码",
						trigger: "blur",
					},
					{
						min: 6,
						max: 20,
						message: "密码长度是6到20个字符",
						trigger: "blur",
					},
				],
			},
		};
	},
	methods: {
		resetLoginForm() {
			// 此处的this就是登录组件本身
			this.$refs.loginFormRef.resetFields();
		},
		async login() {
			// axios 向api服务器端发送请求
			const { data: res } = await this.$http.post(
				"login",
				this.loginForm
			);
			// 在页面上显示登陆成功的信息
			if (res.meta.status !== 200) return this.$message.error(res.meta.message);
			this.$message.success("登陆成功");
			// 将返回数据中的令牌保存到sessionStorage
			window.sessionStorage.setItem("token", res.data.token);
			// 进入后台管理子系统的首页中去
			this.$router.push("/home");
		},
	},
};
</script>

<style scoped>
.login_container {
	height: 100%;
	background-color: #2b4b6b;
}

.login_box {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 450px;
	height: 300px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 0 10px #ccc;
	margin: 0 auto;
}

.img_box {
	position: absolute;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 130px;
	height: 130px;
	padding: 10px;
	border: 1px solid #eee;
	border-radius: 50%;
	background-color: #fff;
}

.img_box img {
	width: 130px;
	height: 130px;
	border-radius: 50%;
	background-color: #ccc;
}
.el-form {
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	/* margin: 0 auto; */
}
.el-input {
	width: 100%;
}

.btns {
	float: right;
}
</style>
