<template>
	<section class="todoapp">
		<!-- 除了驼峰, 还可以使用-转换链接 -->
		<TodoHeader
			:isAll="isAll"
			@selectAll="selectAll"
			@submitTitle="submitTitle"
		></TodoHeader>
		<TodoMain :cases="cases" @select="select" @destroy="destroy"></TodoMain>
		<TodoFooter :total="total" @remove="remove"></TodoFooter>
	</section>
</template>

<script>
// 1.0 样式引入
import "./assets/css/base.css";
import "./assets/css/index.css";

import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";

import axios from "./assets/lib/axios";
axios.defaults.baseURL = "http://localhost:3000/api/case";
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

export default {
	data() {
		return {
			cases: "",
			total: "",
			isAll: "",
		};
	},
	components: {
		TodoHeader,
		TodoMain,
		TodoFooter,
	},
	mounted() {
		axios.get("/getList").then((ret) => {
			this.cases = ret.data;
			// console.log(this.cases);

			var n = 0;
			this.cases.forEach((c) => {
				if (c.completed == 1) {
					n++;
				}
			});

			if (n === this.cases.length) {
				this.isAll = 1;
			} else {
				this.isAll = 0;
			}
		});
		axios.get("/getTotal").then((ret) => {
			this.total = ret.data.data;
		});
	},
	methods: {
		selectAll(areAll) {
			this.isAll = areAll;
			// console.log("APP" + areAll);
			if (areAll === 1) {
				// console.log("markAllNot");
				axios.post("/markAllNot").then((ret) => {
					// console.log(ret.data);
					this.cases.forEach((c) => {
						c.completed = 0;
					});
				});
			} else {
				// console.log("markAll");
				axios.post("/markAll").then((ret) => {
					// console.log(ret.data);
					this.cases.forEach((c) => {
						c.completed = 1;
					});
				});
			}
		},
		select(id, index) {
			// console.log(this.cases[index].completed);
			axios
				.post("/markAsCom", {
					id,
				})
				.then((ret) => {
					// this.cases[index].completed = Number(
					// 	!this.cases[index].completed
					// );
					if (this.cases[index].completed) {
						this.total++;
						this.cases[index].completed = Number(
							!this.cases[index].completed
						);
					} else {
						this.total--;
						this.cases[index].completed = Number(
							!this.cases[index].completed
						);
					}
					// console.log(this.cases[index].completed);
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
		remove() {
			axios.post("/clearCom").then((ret) => {
				alert(ret.data.message);
				location.reload();
			});
		},
		submitTitle(title) {
			if (title.trim()) {
				axios.post("/addList", { title }).then((ret) => {
					if (ret.data.status) {
						axios.get("/getList").then((ret) => {
							this.cases = ret.data;
							// console.log(this.cases);
						});
						axios.get("/getTotal").then((ret) => {
							this.total = ret.data.data;
						});
					} else {
						alert(ret.data.message);
					}
				});
			} else {
				alert("待办不能为空");
			}
		},
	},
	watch: {
		isAll(newVal, oldVal) {
			// console.log(newVal);
			// console.log(oldVal);
			// var total = this.total
			if (newVal) {
				// console.log("isall");
				axios.get("/getTotal").then((ret) => {
					this.total = ret.data.data;
				});
				// this.total = total
			} else {
				this.total = 0;
			}
		},
		total(newVal, oldVal) {
			if (newVal === 0) {
				// console.log("全选了");
				this.isAll = 1;
				// console.log(this.isAll);
			} else {
				// console.log("非全选了");
				// this.isAll = 0;
				// console.log(this.isAll);
			}
		},
	},
};
</script>
