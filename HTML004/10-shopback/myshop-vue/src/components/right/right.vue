<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/home' }"
				>首页</el-breadcrumb-item
			>
			<el-breadcrumb-item>权限管理</el-breadcrumb-item>
			<el-breadcrumb-item>权限列表</el-breadcrumb-item>
		</el-breadcrumb>

		<!-- 卡片视图区域 -->
		<el-card>
			<el-table :data="rightsList" border stripe>
				<el-table-column type="index"></el-table-column>
				<el-table-column
					prop="authName"
					label="权限名称"
				></el-table-column>
				<el-table-column prop="path" label="路径"></el-table-column>
				<el-table-column label="权限等级">
					<template v-slot="scope">
						<el-tag v-if="scope.row.level === '0'">一级</el-tag>
						<el-tag
							v-else-if="scope.row.level === '1'"
							type="success"
							>二级</el-tag
						>
						<el-tag v-else type="warning">三级</el-tag>
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
			rightsList: [],
		};
	},
	async created() {
		const { data: res } = await this.$http.get("rights/list");
		if (res.meta.status !== 200) {
			this.$message.error(res.meta.msg);
		} else {
			this.$message.success(res.meta.msg);
			this.rightsList = res.data;
		}
	},
};
</script>

<style>
.el-card {
	margin-top: 15px;
}
.el-table {
	margin: 15px 0;
}
</style>
