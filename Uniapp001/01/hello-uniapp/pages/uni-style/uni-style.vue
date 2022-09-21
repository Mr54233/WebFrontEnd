<template>
	<view>
		<view>
			样式的学习
		</view>
		<view class="box1">
			测试文字
			<text>123</text>
		</view>
		<view class="iconfont icon-tupian">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import url("./a.css");
.box1{
	width: 350rpx;
	height: 375rpx;
	/* background-color: blue; */
	font-size: 30rpx;
	color: white;
	text{
		background-color: red;
	}
}

</style>
