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
						>添加用户</el-button
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
				:data="rightList"
				:props="defaultProps"
				default-expand-all
				show-checkbox
				:default-checked-keys="defaultKeys"
				node-key="id"
			></el-tree>

			<span slot="footer" class="dialog-footer">
				<el-button @click="setRightVisible = false">取 消</el-button>
				<el-button type="primary" @click="setRightVisible = false"
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
		};
	},
	async created() {
		const { data: res } = await this.$http.get("roles");
		console.log(res);
		if (res.meta.status !== 200) {
			this.$message.error(res.meta.msg);
		} else {
			this.$message.success(res.meta.msg);
			this.roleList = res.data;
		}
	},
	methods: {
		async showSetRightDialog(role) {
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
