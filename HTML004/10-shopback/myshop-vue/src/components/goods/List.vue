<template>
	<div>
		<!-- 面包屑区域 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/home' }"
				>首页</el-breadcrumb-item
			>
			<el-breadcrumb-item>商品管理</el-breadcrumb-item>
			<el-breadcrumb-item>商品列表</el-breadcrumb-item>
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
					<el-button type="primary"
						>添加商品</el-button
					>
				</el-col>
			</el-row>
			<!-- 数据表格区域 -->
			<el-table :data="goodList" style="width: 100%" border stripe>
				<el-table-column type="expand" width="50"></el-table-column>
				<el-table-column type="index" width="50"></el-table-column>
				<el-table-column label="商品名称" prop="goods_name"></el-table-column>
				<el-table-column label="商品价格(元)" prop="goods_price"></el-table-column>
				<el-table-column label="商品重量(克)" prop="goods_weight"></el-table-column>
				<el-table-column label="创建时间" prop="add_time"></el-table-column>
				<el-table-column label="操作" width="180">
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
					</template>
				</el-table-column>
			</el-table>
			<!-- 分页区域 -->
			<el-pagination
				@size-change="pageSizeChange"
				@current-change="pageNumChange"
				:current-page="queryInfo.pagenum"
				:page-sizes="[5,10,15,20]"
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
		this.getGoodList();
	},
	data() {
		return {
			goodList: [],
			total: 0,
			queryInfo: {
				query: "", // 层级分类
				pagenum: 1, // 页码
				pagesize: 5, // 每页条数
			},
			
		};
	},
	methods: {
		// 每页条数改变了
		pageSizeChange(newSize) {
			this.queryInfo.pagesize = newSize;
			this.getGoodList();
		},
		// 当前页码改变了 , newPageNum 就是改变后的新页码
		pageNumChange(newPageNum) {
			// 修改模型数据 queryInfo.pagenum
			this.queryInfo.pagenum = newPageNum;
			// 重新获取数据
			this.getGoodList();
		},

		async getGoodList() {
			const { data: res } = await this.$http.get("goods", {
				params: this.queryInfo,
			});
			if (res.meta.status !== 200) {
				return this.$message.error(res.meta.msg);
			}

			this.goodList = res.data.goods;
			this.total = res.data.total;

			// console.log(this.total);
			// console.log(res.data);
		},

		// 执行搜索功能
		runQuery() {
			this.getGoodList();
		},

		// 设置用户状态
		async setUserState(user) {

		},
		// 新增用户对话框关闭前
		handleAddClose() {

		},
		// 新增用户
		addUser() {

		},
		// 编辑用户对话框关闭前
		handleEditClose() {
			
		},
		// 展示用户
		showUser(user) {
			
		},
		// 编辑用户
		editUser() {
			
		},

		// 打开确认删除框
		open(id) {
			
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
