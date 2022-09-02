<template>
	<div>
		<table>
			<thead>
				<tr>
					<th>编号</th>
					<th>类型名称</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="category in categories" :key="category.cid">
					<td>{{ category.cid }}</td>
					<td>{{ category.cname }}</td>
					<td>
						<a href="JavaScript:;" @click="goEdit(category.cid)"
							>编辑</a
						>
						<a href="JavaScript:;" @click="remove(category.cid)"
							>删除</a
						>
					</td>
				</tr>
			</tbody>
		</table>
		<br />
		<button @click.prevent="goAdd">新增</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			categories: [],
		};
	},
	methods: {
		goEdit(id) {
			this.$router.push({ name: "ec", params: { cid: id } });
		},
		remove(cid) {
			if (confirm("确认删除?")) {
				this.$axios
					.get(`http://localhost:3000/api/category/remove?cid=${cid}`)
					.then((result) => {
						if (!result.data.status) {
							alert("删除成功");
							this.$router.go(0);
						} else {
							alert("删除失败");
						}
					});
			}
		},
		goAdd() {
			this.$router.push({ name: "ac" });
		},
	},
	mounted() {
		// 在mounted 钩子函数中进行模型数据的初始化
		this.$axios
			.get("http://127.0.0.1:3000/api/category/page")
			.then((result) => {
				this.categories = result.data.data;
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
