<template>
	<div>
		<form>
			<div class="formitem">
				<span>类型名称</span>
				<input type="text" v-model="cname" />
			</div>
			<div class="formitem">
				<span></span>
				<input type="button" value="新增" @click="save" />
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
			console.log(info);
			this.$axios
				.post("http://127.0.0.1:3000/api/category/save", info)
				.then((result) => {
					console.log(result.data);
					this.$router.go(-1);
				});
		},
	},
};
</script>
