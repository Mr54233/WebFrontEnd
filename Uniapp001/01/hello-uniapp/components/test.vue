<template>
	<view>这是test组件</view>
</template>

<script>
export default {
	name: 'test',
	data() {
		return {
			num: 3,
			intId: null
		};
	},
	props: ['title'],
	methods: {
		sendNum() {
			console.log('给父亲传值');
			this.$emit('myEven', this.num);
		}
	},
	beforeCreate() {
		console.log('实例已经开始初始化了');
		console.log(this.num);
	},
	created() {
		console.log('created', this.num);
		// this.intId = setInterval(()=>{
		// 	console.log('执行定时器')
		// },1000)
	},
	beforeMount() {
		// console.log('beforemount',document.getElementById('myView'))
	},
	mounted() {
		// console.log('mounted',document.getElementById('myView'))
	},
	destroyed() {
		console.log('组件销毁了');
		clearInterval(this.intId);
	}
};
</script>

<style></style>
