<template>
	<ul class="todo-list">
		<!-- completed: 完成的类名 -->
		<li
			v-for="caseResult in cases"
			:key="caseResult.id"
			:class="{ completed: caseResult.completed }"
		>
			<input type="hidden" v-model="caseResult.id" class="hidden" />
			<div class="view">
				<input
					class="toggle"
					type="checkbox"
					:checked="caseResult.completed"
					@click="select(caseResult.id)"
				/>
				<label>{{ caseResult.title }}</label>
				<button
					class="destroy"
					@click="destroy(caseResult.id)"
				></button>
			</div>
		</li>
	</ul>
</template>

<script>
import axios from "../assets/lib/axios";
axios.defaults.baseURL = "http://localhost:3000/api/case";
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

export default {
	data() {
		return {
			cases: "",
		};
	},
	mounted() {
		axios.get("/getList").then((ret) => {
			this.cases = ret.data;
			// console.log(this.cases);
		});
	},
	methods: {
		select(id) {
			axios
				.post("/markAsCom", {
					id,
				})
				.then((ret) => {
					this.cases[id - 1].completed =
						!this.cases[id - 1].completed;
				});
		},
		destroy(id) {
			if (confirm(`确认删除id为${id}的待办?`)) {
				axios.post("/clearSelect", { id }).then((ret) => {
					alert(ret.data.message);
					location.reload();
				});
			} else {
				alert("那就不删了");
			}
		},
	},
};
</script>
