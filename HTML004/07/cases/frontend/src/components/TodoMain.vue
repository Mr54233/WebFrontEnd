<template>
	<ul class="todo-list">
		<!-- completed: 完成的类名 -->
		<li
			v-for="(caseResult,index) in cases"
			:key="caseResult.id"
			:class="{ completed: caseResult.completed }"
		>
			<input type="hidden" v-model="caseResult.id" class="hidden" />
			<div class="view">
				<input
					class="toggle"
					type="checkbox"
					:checked="caseResult.completed"
					@click="select(caseResult.id,index)"
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
export default {
	props: ["cases"],
	methods: {
		select(id,index) {
			this.$emit("select",id, index);
		},
		destroy(id) {
			this.$emit("destroy", id);
		},
	},
};
</script>
