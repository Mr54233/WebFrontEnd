<template>
	<view>
		<button type="primary" @click="chooseimg">上传图片</button>
		<image v-for="item in imgArr" :src="item" @click="perviewImg(item)"></image>

		<!-- #ifdef H5 -->
		<view>h5兼容</view>
		<!-- #endif  -->
		<!-- #ifdef MP-WEIXIN -->
		<view>微信小程序兼容</view>
		<!-- #endif  -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			imgArr: []
		};
	},
	methods: {
		chooseimg() {
			// console.log('上传图片');
			uni.chooseImage({
				count: 5,
				success: res => {
					// console.log(res);
					this.imgArr = res.tempFilePaths;
				}
			});
		},
		perviewImg(current) {
			uni.previewImage({
				current,
				urls: this.imgArr,
				loop: true,
				indicator: 'number'
			});
		}
	},
	onLoad() {
		// #ifdef H5
		console.log('h5打印');
		// #endif

		// #ifdef MP-WEIXIN
		console.log('微信小程序打印');
		// #endif
	}
};
</script>

<style>
/* #ifdef H5 */
view {
	color: blue;
}
/* #endif */

/* #ifdef MP-WEIXIN */
view {
	color: red;
}
/* #endif */
</style>
