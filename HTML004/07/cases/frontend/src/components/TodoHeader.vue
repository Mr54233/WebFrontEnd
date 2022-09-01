<template>
	<header class="header">
		<h1>Todos</h1>
		<input
			id="toggle-all"
			class="toggle-all"
			type="checkbox"
			v-model="areAll"
		/>
		<label for="toggle-all" @click="selectAll"></label>

		<input
			class="new-todo"
			placeholder="输入待办事项"
			autofocus
			v-model="title"
			@keyup.enter="submitTitle(title)"
		/>
	</header>
</template>

<script>
export default {
	props: ["isAll"],
	data() {
		return {
			title: "",
			// isAll: "",
			areAll: "",
		};
	},

	methods: {
		selectAll() {
			console.log("header" + this.isAll);
			// console.log(Number(this.areAll));
			this.$emit("selectAll", Number(this.areAll));
		},
		submitTitle(title) {
			this.$emit("submitTitle", title);
			this.title = "";
		},
	},
	watch: {
		isAll(nval, oval) {
			this.areAll = nval === 1 ? 1 : 0;
		},
	},
};
</script>
