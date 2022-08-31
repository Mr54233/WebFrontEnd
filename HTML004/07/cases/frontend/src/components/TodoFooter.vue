<template>
	<footer class="footer">
		<span class="todo-count"
			>剩余<strong>{{ total }}条待办</strong></span
		>

		<button class="clear-completed" @click="remove">清除已完成待办</button>
	</footer>
</template>

<script>
import axios from "../assets/lib/axios";
axios.defaults.baseURL = "http://localhost:3000/api/case";
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

export default {
	data() {
		return {
			total: "",
		};
	},
	mounted() {
		axios.get("/getTotal").then((ret) => {
			this.total = ret.data.data;
		});
	},
	methods: {
		remove() {
			axios.post("/clearCom").then((ret) => {
				alert(ret.data.message);
				location.reload();
			});
		},
	},
};
</script>
