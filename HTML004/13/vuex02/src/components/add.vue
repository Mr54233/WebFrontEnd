<template>
	<div>
        <h3>当前计数器的值:{{this.$store.state.count}}</h3>
        <button @click="add">+1</button>
    </div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
        add(){
            // 调用vuex数据仓库中的mutations中的add方法
            this.$store.commit('add',2)
        }
    },
};
</script>

<style></style>
