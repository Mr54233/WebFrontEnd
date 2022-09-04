<template>
	<div>
		<form>
			<div class="formitem">
				<span>类型名称</span>
				<el-input placeholder="请输入内容" v-model.trim="cname" />
			</div>
			<div class="formitem">
				<span></span>
				<el-button type="success" @click.prevent="save">新增</el-button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return { cname: "" };
	},
	methods: {
		save() {
			var info = `cname=${this.cname}`;
			if (this.cname) {
				this.$axios
					.post("http://127.0.0.1:3000/api/category/save", info)
					.then((result) => {
						console.log(result.data);
						this.$router.go(-1);
						this.$message({
							type: "success",
							message: result.data.message,
						});
					});
			} else {
				this.$message({
					type: "warning",
					message: "类型名称不能为空",
				});
			}
			// console.log(info);
		},
	},
};
</script>
