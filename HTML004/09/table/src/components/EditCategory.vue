<template>
	<div>
		<form>
			<div class="formitem">
				<span>类型编号</span>
				<input type="text" v-model="category.cid" />
			</div>
			<div class="formitem">
				<span>类型名称</span>
				<input
					type="text"
					v-model="category.cname"
					@keyup.enter="save"
				/>
			</div>
			<div class="formitem">
				<span></span>
				<input type="button" value="保存" @click="save" />
			</div>
		</form>
	</div>
</template>

<script>
export default {
	props: ["cid"],
	data() {
		return {
			category: [],
		};
	},
	mounted() {
		// 根据cid获取到需要修改的类型数据
		this.$axios
			.get("http://127.0.0.1:3000/api/category/getSingle?cid=" + this.cid)
			.then((result) => {
				console.log(result.data);
				if (result.data.statu === 0) {
					this.category = result.data.data;
				}
				console.log(this.category.cid);
			});
	},
	methods: {
		save() {
			var info = `cid=${this.category.cid}&cname=${this.category.cname}`;
			console.log(info);
			this.$axios
				.post("http://127.0.0.1:3000/api/category/save", info)
				.then((result) => {
					if (result.data.statu) {
						alert(result.data.message);
					} else {
						alert(result.data.message);
						this.$router.go(-1);
					}
				});
		},
	},
};
</script>
