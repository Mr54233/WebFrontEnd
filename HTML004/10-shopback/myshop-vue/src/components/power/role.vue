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
			<!-- 搜索区域 -->
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
							>分配权限</el-button
						>
					</template>
				</el-table-column>
			</el-table>
		</el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			roleList: [],
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
