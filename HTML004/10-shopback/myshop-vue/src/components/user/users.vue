<template>
	<div>
		<!-- 面包屑区域 -->
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/home1' }"
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
						class="input-with-select"
					>
						<el-button
							slot="append"
							icon="el-icon-search"
						></el-button>
					</el-input>
				</el-col>
				<el-col :span="4">
					<el-button type="primary">添加用户</el-button>
				</el-col>
			</el-row>
			<!-- 数据表格区域 -->
			<el-table :data="userList" style="width: 100%" border stripe>
				<el-table-column prop="username" label="姓名" width="180">
				</el-table-column>
				<el-table-column prop="email" label="邮箱" width="180">
				</el-table-column>
				<el-table-column prop="mobile" label="电话"> </el-table-column>
				<el-table-column prop="role_name" label="角色">
				</el-table-column>
				<el-table-column prop="mg_state" label="状态">
					<template slot-scope="scope">
						<el-switch v-model="scope.row.mg_state"> </el-switch>
					</template>
				</el-table-column>
				<el-table-column label="操作"> </el-table-column>
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
	</div>
</template>

<script>
export default {
	created() {
		// 获取当前页的用户数据
		this.getUserList();
	},
	data() {
		return {
			userList: [],
			total: 0,
			queryInfo: {
				query: "",
				pagenum: 1,
				pagesize: 2,
			},
		};
	},
	methods: {
		// 每页条数改变了
		pageSizeChange(newSize) {
			this.queryInfo.pagesize = newSize
			this.getUserList()
		},
		// 当前页码改变了
		pageNumChange(newPageNum) {
			this.queryInfo.pagenum = newPageNum
			this.getUserList()
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

			console.log(this.total);
			console.log(res.data);
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
