<template>
	<div>
        <h3>当前计数器的值:{{this.$store.getters.showCount}}</h3>
        <button @click="sub">-1</button>
    </div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
        sub(){
            // 调用vuex数据仓库中的actions里边的subAsync方法
            this.$store.dispatch('subAsync',1)
        }
    },
};
</script>

<style></style>
