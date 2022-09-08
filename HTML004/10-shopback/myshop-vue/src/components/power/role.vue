<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/home' }"
				>首页</el-breadcrumb-item
			>
			<el-breadcrumb-item>权限管理</el-breadcrumb-item>
			<el-breadcrumb-item>角色列表</el-breadcrumb-item>
		</el-breadcrumb>

		<el-card class="box-card">
			<!-- 按钮区域 -->
			<el-row :gutter="20">
				<el-col :span="4">
					<el-button type="primary" @click="addDialogVisible = true"
						>添加角色</el-button
					>
				</el-col>
			</el-row>
			<!-- 数据表格区域 -->
			<el-table :data="roleList" style="width: 100%" border stripe>
				<el-table-column type="expand">
					<template v-slot="scope">
						<el-row
							:class="[
								i1 === 0 ? 'bd-top' : '',
								'bd-bottom',
								'v-center',
							]"
							v-for="(item1, i1) in scope.row.children"
							:key="item1.id"
						>
							<!-- 渲染一级权限 -->
							<el-col :span="5" :class="['']">
								<el-tag
									closable
									@close="
										removeRightById(scope.row, item1.id)
									"
									>{{ item1.authName }}</el-tag
								>
								<i class="el-icon-caret-right"></i>
							</el-col>

							<!-- 渲染二级和三级权限 -->
							<el-col :span="19">
								<!-- 通过for循环嵌套来渲染二级权限 -->
								<el-row
									:class="[
										i2 === 0 ? '' : 'bd-top',
										'v-center',
									]"
									v-for="(item2, i2) in item1.children"
									:key="item2.id"
								>
									<el-col :span="6">
										<el-tag
											type="success"
											closable
											@close="
												removeRightById(
													scope.row,
													item2.id
												)
											"
											>{{ item2.authName }}</el-tag
										>
										<i class="el-icon-caret-right"></i>
									</el-col>

									<!-- 三级 -->
									<el-col :span="18">
										<el-tag
											closable
											@close="
												removeRightById(
													scope.row,
													item3.id
												)
											"
											type="warning"
											v-for="item3 in item2.children"
											:key="item3.id"
										>
											{{ item3.authName }}
										</el-tag>
									</el-col>
								</el-row>
							</el-col>
						</el-row>
					</template>
				</el-table-column>

				<el-table-column type="index" width="50"></el-table-column>

				<el-table-column prop="roleName" label="角色名称" width="180">
				</el-table-column>

				<el-table-column prop="roleDesc" label="角色描述" width="360">
				</el-table-column>

				<el-table-column label="操作">
					<template slot-scope="scope">
						<!-- {{scope.row}} -->
						<el-button
							type="primary"
							icon="el-icon-edit"
							size="small"
							@click="showUser(scope.row)"
							>编辑</el-button
						>
						<el-button
							type="danger"
							icon="el-icon-delete"
							size="small"
							@click="open(scope.row.id)"
							>删除</el-button
						>

						<el-button
							type="warning"
							icon="el-icon-s-tools"
							size="small"
							@click="showSetRightDialog(scope.row)"
							>分配权限</el-button
						>
					</template>
				</el-table-column>
			</el-table>
		</el-card>

		<!-- 分配权限对话框 -->
		<el-dialog title="分配权限" :visible.sync="setRightVisible" width="50%">
			<!-- 显示权限的树形控件 -->
			<el-tree
				ref="treeRef"
				:data="rightList"
				:props="defaultProps"
				default-expand-all
				show-checkbox
				:default-checked-keys="defaultKeys"
				node-key="id"
			></el-tree>

			<span slot="footer" class="dialog-footer">
				<el-button @click="setRightVisible = false">取 消</el-button>
				<el-button type="primary" @click="setRole">确 定</el-button>
			</span>
		</el-dialog>

		<!-- 添加角色的对话框 -->
		<el-dialog
			title="添加角色"
			:visible.sync="addDialogVisible"
			width="50%"
			@close="handleAddClose"
		>
			<!-- 对话框的主要内容 -->
			<el-form
				ref="addForm"
				:model="addForm"
				label-width="80px"
				:rules="FormRules"
			>
				<el-form-item label="角色名称" prop="roleName">
					<el-input v-model="addForm.roleName"></el-input>
				</el-form-item>
				<el-form-item label="角色描述" prop="roleDesc">
					<el-input v-model="addForm.roleDesc"></el-input>
				</el-form-item>
			</el-form>
			<!-- 脚部两个按钮 -->
			<span slot="footer" class="dialog-footer">
				<el-button @click="addDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="addRoleInfo">确 定</el-button>
			</span>
		</el-dialog>

		<!-- 编辑角色的对话框 -->
		<el-dialog
			title="编辑角色"
			:visible.sync="editDialogVisible"
			width="50%"
			@close="handleEditClose"
		>
			<!-- 对话框的主要内容 -->
			<el-form
				ref="editForm"
				:model="editForm"
				label-width="80px"
				:rules="FormRules"
			>
				<el-form-item label="角色名称">
					<el-input v-model="editForm.roleName"></el-input>
				</el-form-item>
				<el-form-item label="角色描述">
					<el-input v-model="editForm.roleDesc"></el-input>
				</el-form-item>
			</el-form>
			<!-- 脚部两个按钮 -->
			<span slot="footer" class="dialog-footer">
				<el-button @click="editDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="editRoleInfo"
					>确 定</el-button
				>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			roleList: [],
			// 控制分配权限对话框的显示和隐藏的
			setRightVisible: false,
			// 所有权限数据的数组
			rightList: [],
			// 控制树形控件显示数据的来源的格式
			defaultProps: {
				// 权限属性在哪个属性中
				children: "children",
				// 需要显示的数据的属性名
				label: "authName",
			},
			// 树节点默认选中的id节点数组
			defaultKeys: [],
			// 当前即将分配权限的角色id
			roleId: "",

			addDialogVisible: false, // 控制新增角色对话框
			addForm: {
				roleName: "",
				roleDesc: "",
			},

			editDialogVisible: false, // 控制新增角色对话框
			editForm: {
				id: "",
				roleName: "",
				roleDesc: "",
			},

			// 添加角色和编辑角色的的验证规则
			FormRules: {
				roleName: [
					{
						required: true,
						message: "请输入角色名称",
						trigger: "blur",
					},
				],
				roleDesc: [
					{
						required: true,
						message: "请输入角色描述",
						trigger: "blur",
					},
				],
			},
		};
	},
	created() {
		this.getRole();
	},
	methods: {
		async getRole() {
			const { data: res } = await this.$http.get("roles");
			// console.log(res);
			if (res.meta.status !== 200) {
				this.$message.error(res.meta.msg);
			} else {
				this.$message.success(res.meta.msg);
				this.roleList = res.data;
			}
		},
		async showSetRightDialog(role) {
			// 保存当前角色ID
			this.roleId = role.id;
			// 获取所有的权限数据
			const { data: res } = await this.$http.get("rights/tree");
			if (res.meta.status !== 200) {
				this.$message.error(res.meta.msg);
			} else {
				this.$message.success(res.meta.msg);
				this.rightList = res.data;
				// console.log(this.roleList);
			}

			// 将角色现在的所有权限添加到defaultKeys
			this.getRightFromRole(role.children);
			// 显示对话框
			this.setRightVisible = true;
		},
		getRightFromRole(rights) {
			// console.log("rights"+rights);
			// 清空defaultKeys 数组
			// this.defaultKeys = [];
			// console.log(role);
			// console.log(role.children);
			// 从roles中获取权限id, 添加到defaultKeys 数组中

			// role中的权限有三级 , 一级二级不能加入 , 只能加三级
			rights.forEach((right, index) => {
				if (!right.children) {
					// 如果没有children 就是第三级权限 , 就加入到defaultKeys 数组中
					this.defaultKeys.push(right.id);
					// console.log(right.authName);
				} else {
					this.getRightFromRole(right.children);
					// console.log( index , right.children);
				}
			});

			// 第一层循环 遍历 角色的一级权限
			// for (var i = 0; i < role.children.length; i++) {
			// 	var p1 = role.children[i];
			// 	// this.defaultKeys.push(p1.id);
			// 	// 第二层循环 遍历角色的二级权限
			// 	for (var j = 0; j < p1.children.length; j++) {
			// 		var p2 = p1.children[j];
			// 		// this.defaultKeys.push(p2.id);
			// 		for (var k = 0; k < p2.children.length; k++) {
			// 			var p3 = p2.children[k];
			// 			this.defaultKeys.push(p3.id);
			// 		}
			// 	}
			// }
		},
		// 编辑角色对话框关闭前
		handleEditClose() {
			// 将编辑角色的表单清除
			// this.$refs.editForm.resetFields();
			this.editDialogVisible = false;
		},
		// 添加角色对话框关闭前
		handleAddClose() {
			// 将添加角色的表单清除
			this.$refs.addForm.resetFields();
			this.AddDialogVisible = false;
		},
		// 编辑按钮
		showUser(role) {
			// console.log(role);
			this.editForm.id = role.id;
			this.editForm.roleName = role.roleName;
			this.editForm.roleDesc = role.roleDesc;
			this.editDialogVisible = true;
		},
		// 添加确认按钮
		addRoleInfo() {
			// 验证
			this.$refs.addForm.validate(async (result) => {
				if (result) {
					const { data: res } = await this.$http.post(
						"roles",
						this.addForm
					);
					if (res.meta.status !== 201) {
						return this.$message.error(res.meta.msg);
					}
					this.$message.success(res.meta.msg);
					this.$refs.addForm.resetFields();
					this.addDialogVisible = false;

					this.getRole();
				}
			});
		},
		// 编辑确认按钮
		editRoleInfo() {
			// 验证
			this.$refs.editForm.validate(async (result) => {
				console.log(result);
				if (result) {
					const { data: res } = await this.$http.put(
						`roles/${this.editForm.id}`,
						{
							roleName: this.editForm.roleName,
							roleDesc: this.editForm.roleDesc,
						}
					);
					if (res.meta.status !== 200) {
						console.log(res.meta);
						return this.$message.error(res.meta.msg);
					}
					this.$message.success(res.meta.msg);
					// this.$refs.editForm.resetFields();
					this.editDialogVisible = false;

					this.getRole();
				}
			});
		},
		// 打开确认删除框
		open(id) {
			// console.log(id);
			this.$confirm("此操作将永久删除该角色, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(async () => {
					const { data: res } = await this.$http.delete(
						`roles/${id}`
					);
					if (res.meta.status !== 200) {
						this.$message.error(res.meta.msg);
					} else {
						this.$message.success(res.meta.msg);
						this.getRole();
						// this.$router.go(0)
					}
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "那就不删了奥",
					});
				});
		},
		// 设置权限
		async setRole() {
			const keys = [
				...this.$refs.treeRef.getCheckedKeys(), //返回目前被选中的节点的 key 所组成的数组
				...this.$refs.treeRef.getHalfCheckedKeys(), //则返回目前半选中的节点的 key 所组成的数组
			];
			// console.log(keys);
			// 指定一个字符串来分隔数组的每个元素。返回分割后的字符串
			const idStr = keys.join(",");
			// console.log(idStr);

			const { data: res } = await this.$http.post(
				`roles/${this.roleId}/rights`,
				{ rids: idStr }
			);
			// 分配权限失败
			if (res.meta.status !== 200) {
				return this.$message.error({
					message: res.meta.msg,
					duration: 1500,
				});
			}

			this.$message.success({
				message: "分配权限成功",
				duration: 1000,
			});
			// 刷新列表
			this.getRole();
			// 隐藏对话框
			this.setRightVisible = false;
		},

		// 根据ID删除对应的权限
		async removeRightById(role, rightId) {
			// 弹框提示是否删除
			const result = await this.$confirm(
				"此操作将永久该权限, 是否继续?",
				"提示",
				{
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning",
				}
			).catch((err) => err);

			//取消删除
			if (result === "cancel") {
				return this.$message.info({
					message: "那就不删了奥",
					duration: 1500,
				});
			}

			const { data: res } = await this.$http.delete(
				`roles/${role.id}/rights/${rightId}`
			);
			if (res.meta.status !== 200) {
				return this.$message.error({
					message: res.meta.msg,
					duration: 1500,
				});
			}

			this.$message.success({
				message: "删除成功!",
				duration: 1500,
			});
			// 由于返回的data, 是当前角色下最新的权限数据，可以不重新获取数据列表，避免table表格刷新
			// role是传进来的scope.row,由于是双向绑定所以页面也会同步。
			role.children = res.data;
		},
	},
};
</script>

<style scoped>
.el-tag {
	margin: 7px;
}
.bd-top {
	border-top: 1px solid #eee;
}
.bd-bottom {
	border-bottom: 1px solid #eee;
}
.v-center {
	display: flex;
	align-items: center;
}
.el-table__expanded-cell[class*="cell"] {
	padding: 20px 50px;
}
</style>
