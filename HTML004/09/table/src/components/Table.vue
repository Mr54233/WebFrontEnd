<template>
	<div>
		<br />
		<el-table :data="categories" border style="width: 100%">
			<el-table-column prop="cid" label="编号" width="180">
			</el-table-column>
			<el-table-column prop="cname" label="类型名称" width="540">
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="primary" @click="goEdit(scope.row.cid)"
						>编辑</el-button
					>
					<el-button type="danger" @click="remove(scope.row.cid)"
						>删除</el-button
					>
					<!-- <el-button type=
					"danger" @click="open">删除</el-button> -->
				</template>
			</el-table-column>
		</el-table>
		<el-button type="success" @click.prevent="goAdd">新增</el-button>
		<el-pagination
			background
			layout="prev, pager, next"
			:total="total"
			:page-size="pageSize"
			@current-change="HandleCurrChange"
		>
		</el-pagination>
	</div>
</template>

<script>
export default {
	data() {
		return {
			categories: [],
			pageIndex: 1,
			pageSize: 5,
			total: 0,
		};
	},
	methods: {
		HandleCurrChange(index) {
			// console.log(index);
			this.pageIndex = index;
			this.$axios
				.get(
					`http://127.0.0.1:3000/api/category/page?curr=${index}&limit=${this.pageSize}`
				)
				.then((result) => {
					this.categories = result.data.data;
					// console.log(this.categories);
				});
		},
		goEdit(cid) {
			// console.log(cid);
			this.$router.push({ name: "ec", params: { cid: cid } });
		},
		remove(cid) {
			this.$confirm("此操作将永久删除该类型, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(() => {
					this.$axios
						.get(
							`http://localhost:3000/api/category/remove?cid=${cid}`
						)
						.then((result) => {
							if (!result.data.status) {
								this.$message({
									type: "success",
									message: "删除成功!",
								});
								this.$router.go(0);
							} else {
								this.$message({
									type: "warning",
									message: "删除失败",
								});
							}
						});
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消删除",
					});
				});
		},
		goAdd() {
			this.$router.push({ name: "ac" });
		},
	},
	mounted() {
		// 在mounted 钩子函数中进行模型数据的初始化
		this.$axios
			.get(`http://127.0.0.1:3000/api/category/page`)
			.then((result) => {
				// console.log(result.data);
				this.total = result.data.total;
				this.categories = result.data.data;
				// console.log(this.categories);
			});
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
table {
	width: 100%;
	border-collapse: collapse;
}
</style>
