<template>
	<div>
		<h1>这是app组件</h1>
		<h3 @click="change">{{ msg }}</h3>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: "Hello , Component",
		};
	},
    methods: {
        change(){
            this.msg = 'Are you ok?'
        }
    },
};
</script>

<style scoped>
    h1{
        color: red;
    }
</style>
