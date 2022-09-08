<template>
	<div>
		<!-- 面包屑区域 -->
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/home' }"
				>首页</el-breadcrumb-item
			>
			<el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
			<el-breadcrumb-item>用户列表</el-breadcrumb-item>
		</el-breadcrumb>

		<!-- 卡片区域 -->
		<el-card class="box-card">
			<!-- 搜索区域 -->
			<el-row :gutter="20">
				<el-col :span="8">
					<el-input
						placeholder="请输入内容"
						v-model="queryInfo.query"
						@keyup.enter="runQuery"
					>
						<el-button
							slot="append"
							icon="el-icon-search"
							@click="runQuery"
						></el-button>
					</el-input>
				</el-col>
				<el-col :span="4">
					<el-button type="primary" @click="addDialogVisible = true"
						>添加用户</el-button
					>
				</el-col>
			</el-row>
			<!-- 数据表格区域 -->
			<el-table :data="userList" style="width: 100%" border stripe>
				<el-table-column type="index" width="50"></el-table-column>
				<el-table-column prop="username" label="姓名" width="180">
				</el-table-column>
				<el-table-column prop="email" label="邮箱" width="180">
				</el-table-column>
				<el-table-column prop="mobile" label="电话"> </el-table-column>
				<el-table-column prop="role_name" label="角色">
				</el-table-column>
				<el-table-column prop="mg_state" label="状态">
					<template slot-scope="scope">
						<!-- scope.row就是本行的用户对象 -->
						<el-switch
							v-model="scope.row.mg_state"
							@change="setUserState(scope.row)"
						>
						</el-switch>
					</template>
				</el-table-column>
				<el-table-column label="操作" width="180">
					<template slot-scope="scope">
						<!-- {{scope.row}} -->
						<el-button
							type="primary"
							icon="el-icon-edit"
							circle
							size="small"
							@click="showUser(scope.row)"
						></el-button>
						<el-button
							type="danger"
							icon="el-icon-delete"
							circle
							size="small"
							@click="open(scope.row.id)"
						></el-button>
						<el-tooltip
							class="item"
							effect="dark"
							content="分配角色"
							placement="top"
						>
							<el-button
								type="warning"
								icon="el-icon-s-tools"
								circle
								size="small"
								@click="showSetRoleDialog(scope.row)"
							></el-button>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
			<!-- 分页区域 -->
			<el-pagination
				@size-change="pageSizeChange"
				@current-change="pageNumChange"
				:current-page="queryInfo.pagenum"
				:page-sizes="[2, 3, 5, 10]"
				:page-size="queryInfo.pagesize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total"
			>
			</el-pagination>
		</el-card>
		<!-- 添加用户的对话框 -->
		<el-dialog
			title="新增用户"
			:visible.sync="addDialogVisible"
			width="50%"
			@close="handleAddClose"
		>
			<!-- 对话框的主要内容 -->
			<el-form
				ref="addForm"
				:model="addForm"
				label-width="80px"
				:rules="addFormRules"
			>
				<el-form-item label="用户名" prop="username">
					<el-input v-model="addForm.username"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input
						v-model="addForm.password"
						type="password"
					></el-input>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
					<el-input v-model="addForm.email"></el-input>
				</el-form-item>
				<el-form-item label="手机" prop="mobile">
					<el-input v-model="addForm.mobile"></el-input>
				</el-form-item>
			</el-form>
			<!-- 脚部两个按钮 -->
			<span slot="footer" class="dialog-footer">
				<el-button @click="addDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="addUser">确 定</el-button>
			</span>
		</el-dialog>

		<!-- 编辑用户的对话框 -->
		<el-dialog
			title="编辑用户"
			:visible.sync="editDialogVisible"
			width="50%"
			@close="handleEditClose"
		>
			<!-- 对话框的主要内容 -->
			<el-form
				ref="editForm"
				:model="editForm"
				label-width="80px"
				:rules="editFormRules"
			>
				<el-form-item label="用户名">
					<el-input v-model="editForm.username" disabled></el-input>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
					<el-input v-model="editForm.email"></el-input>
				</el-form-item>
				<el-form-item label="手机" prop="mobile">
					<el-input v-model="editForm.mobile"></el-input>
				</el-form-item>
			</el-form>
			<!-- 脚部两个按钮 -->
			<span slot="footer" class="dialog-footer">
				<el-button @click="editDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="editUser">确 定</el-button>
			</span>
		</el-dialog>

		<!-- 分配角色的对话框 -->
		<el-dialog
			title="分配角色"
			:visible.sync="setRoleDialogVisible"
			width="50%"
			@close="setRoleDialogClose"
		>
			<div>
				<p>当前的用户：{{ userInfo.username }}</p>
				<p>当前的角色：{{ userInfo.role_name }}</p>
				<p>
					分配新角色:
					<el-select v-model="selectedRoleId" placeholder="请选择">
						<el-option
							v-for="item in rolesList"
							:key="item.id"
							:label="item.roleName"
							:value="item.id"
						></el-option>
					</el-select>
				</p>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="setRoleDialogVisible = false"
					>取 消</el-button
				>
				<el-button type="primary" @click="saveRoleInfo"
					>确 定</el-button
				>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	created() {
		// 获取当前页的用户数据
		this.getUserList();
	},
	data() {
		// value就是需要验证的数据 , callback就是回调函数
		var checkEmail = (rule, value, callback) => {
			var reg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
			if (reg.test(value)) {
				callback();
			} else {
				callback(new Error("请输入合法的邮箱地址"));
			}
		};
		var checkMobile = (rule, value, callback) => {
			var reg =
				/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
			if (reg.test(value)) {
				callback();
			} else {
				callback(new Error("请输入合法的手机号码"));
			}
		};
		return {
			userList: [],
			total: 0,
			queryInfo: {
				query: "", // 查询条件
				pagenum: 1, // 页码
				pagesize: 2, // 每页条数
			},
			addDialogVisible: false, // 控制新增用户对话框
			addForm: {
				username: "",
				password: "",
				email: "",
				mobile: "",
			},
			addFormRules: {
				username: [
					{
						required: true,
						message: "请输入用户名",
						trigger: "blur",
					},
					{
						min: 3,
						max: 10,
						message: "用户名的长度在3到10个字符之间",
						trigger: "blur",
					},
				],
				password: [
					{
						required: true,
						message: "请输入密码",
						trigger: "blur",
					},
					{
						min: 6,
						max: 20,
						message: "密码的长度在6到20个字符之间",
						trigger: "blur",
					},
				],
				email: [
					{
						required: true,
						message: "请输入邮箱",
						trigger: "blur",
					},
					{
						validator: checkEmail,
						trigger: "blur",
					},
				],
				mobile: [
					{
						required: true,
						message: "请输入手机",
						trigger: "blur",
					},
					{
						validator: checkMobile,
						trigger: "blur",
					},
				],
			},
			editDialogVisible: false, // 控制新增用户对话框
			editForm: {
				id: "",
				username: "",
				email: "",
				mobile: "",
			},
			editFormRules: {
				email: [
					{
						required: true,
						message: "请输入邮箱",
						trigger: "blur",
					},
					{
						validator: checkEmail,
						trigger: "blur",
					},
				],
				mobile: [
					{
						required: true,
						message: "请输入手机",
						trigger: "blur",
					},
					{
						validator: checkMobile,
						trigger: "blur",
					},
				],
			},
			userInfo: {}, // 需要承担角色的对象
			setRoleDialogVisible: false, // 控制角色对话框的显示和隐藏
			selectedRoleId: {}, // 选中角色的id
			rolesList: [], // 全部角色的列表
		};
	},
	methods: {
		// 每页条数改变了
		pageSizeChange(newSize) {
			this.queryInfo.pagesize = newSize;
			this.getUserList();
		},
		// 当前页码改变了 , newPageNum 就是改变后的新页码
		pageNumChange(newPageNum) {
			// 修改模型数据 queryInfo.pagenum
			this.queryInfo.pagenum = newPageNum;
			// 重新获取数据
			this.getUserList();
		},

		async getUserList() {
			const { data: res } = await this.$http.get("users", {
				params: this.queryInfo,
			});
			if (res.meta.status !== 200) {
				return this.$message.error(res.meta.msg);
			}

			this.userList = res.data.users;
			this.total = res.data.total;

			// console.log(this.total);
			// console.log(res.data);
		},

		// 执行搜索功能
		runQuery() {
			this.getUserList();
		},

		// 设置用户状态
		async setUserState(user) {
			const { data: res } = await this.$http.put(
				`users/${user.id}/state/${user.mg_state}`
			);
			if (res.meta.status !== 200) {
				user.mg_state = !user.mg_state; // 用户状态修改不成功 , 则页面上的状态要还原
				return this.$message.error(res.meta.msgs);
			} else {
				return this.$message.success(res.meta.msg);
			}
		},
		// 新增用户对话框关闭前
		handleAddClose() {
			// 将新增用户的表单清除
			this.$refs.addForm.resetFields();
		},
		// 新增用户
		addUser() {
			// 在通知api服务器新增用户之前 , 要进行表单验证 , 如果验证不合法就不提交
			this.$refs.addForm.validate(async (result) => {
				if (result) {
					const { data: res } = await this.$http.post(
						"users",
						this.addForm
					);
					if (res.meta.status !== 201) {
						return this.$message.error(res.meta.msg);
					}
					this.$message.success(res.meta.msg);
					this.$refs.addForm.resetFields();
					this.addDialogVisible = false;

					this.getUserList();
				}
			});
		},
		// 编辑用户对话框关闭前
		handleEditClose() {
			// 将编辑用户的表单清除
			// this.$refs.editForm.resetFields();
			this.editDialogVisible = false;
		},
		// 展示用户
		showUser(user) {
			this.editDialogVisible = true;
			// console.log(user);

			this.editForm.id = user.id;
			this.editForm.username = user.username;
			this.editForm.email = user.email;
			this.editForm.mobile = user.mobile;
		},
		// 编辑用户
		editUser() {
			// 在通知api服务器更新用户之前 , 要进行表单验证 , 如果验证不合法就不提交
			this.$refs.editForm.validate(async (result) => {
				console.log(result);
				if (result) {
					const { data: res } = await this.$http.put(
						`users/${this.editForm.id}`,
						{
							email: this.editForm.email,
							mobile: this.editForm.mobile,
						}
					);
					if (res.meta.status !== 200) {
						console.log(res.meta);
						return this.$message.error(res.meta.msg);
					}
					this.$message.success(res.meta.msg);
					// this.$refs.editForm.resetFields();
					this.editDialogVisible = false;

					this.getUserList();
				}
			});
		},

		// 打开确认删除框
		open(id) {
			// console.log(id);
			this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(async () => {
					const { data: res } = await this.$http.delete(
						`users/${id}`
					);
					if (res.meta.status !== 200) {
						this.$message.error(res.meta.msg);
					} else {
						this.$message.success(res.meta.msg);
						this.getUserList();
						this.$router.go(0);
					}
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "那就不删了奥",
					});
				});
		},

		// 显示承担角色对话框
		async showSetRoleDialog(userInfo) {
			// 记录需要承担角色的用户对象
			this.userInfo = userInfo;

			// 获取全部角色的列表
			const { data: res } = await this.$http.get("roles");
			if (res.meta.status !== 200) {
				this.$message.error(res.meta.msg);
			} else {
				this.$message.success(res.meta.msg);
				this.rolesList = res.data;
				// console.log(this.rolesList);
			}

			// 显示对话框
			this.setRoleDialogVisible = true;
		},
		// 点击按钮 分配角色
		async saveRoleInfo() {
			if (!this.selectedRoleId === true) {
				return this.$message.info({
					message: "请选则要分配的角色",
					duration: 1500,
				});
			}

			const { data: res } = await this.$http.put(
				`users/${this.userInfo.id}/role`,
				{
					rid: this.selectedRoleId,
				}
			);
			if (res.meta.status !== 200) {
				return this.$message.error({
					message: res.meta.msg,
					duration: 1500,
				});
			}
			this.$message.success({
				message: "更新角色成功!",
				duration: 1500,
			});
			this.getUserList();
			this.setRoleDialogVisible = false;
		},
		// 监听分配角色对话框关闭
		setRoleDialogClose() {
			// 相当于清空当前选中项
			this.selectedRoleId = "";
			// 清空当前分配角色的数据列表
			this.userInfo = {};
		},
	},
};
</script>

<style scoped>
.el-card {
	margin-top: 15px;
}
.el-table {
	margin: 15px 0;
}
</style>
