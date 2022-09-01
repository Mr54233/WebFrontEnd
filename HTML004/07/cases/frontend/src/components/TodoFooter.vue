<template>
	<footer class="footer">
		<span class="todo-count"
			>剩余<strong>{{ total }}条待办</strong></span
		>

		<button class="clear-completed" @click="remove">清除已完成待办</button>
	</footer>
</template>

<script>
export default {
	props: ["total"],
	methods: {
		remove() {
			this.$emit("remove");
		},
	},
};
</script>
