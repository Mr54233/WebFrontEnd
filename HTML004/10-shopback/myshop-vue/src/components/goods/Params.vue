<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/home' }"
				>首页</el-breadcrumb-item
			>
			<el-breadcrumb-item>商品管理</el-breadcrumb-item>
			<el-breadcrumb-item>分类参数</el-breadcrumb-item>
		</el-breadcrumb>

		<el-card>
			<!-- 注意区域 -->
			<el-row>
				<el-alert
					title="注意:只允许为第三级分类设置相关参数!"
					type="warning"
					:closable="false"
					show-icon
				>
				</el-alert>
			</el-row>
			<!-- 选择分类区域 -->
			<el-row>
				<el-col>
					<span>选择商品分类：</span>
					<!-- 选择商品分类的级联选择框 -->
					<!-- options 指定数据源 -->
					<!-- props 用来配置级联选择框 -->
					<el-cascader
						v-model="selectedCateKeys"
						:options="cateList"
						:props="cateProps"
						@change="handleChange"
					></el-cascader>
				</el-col>
			</el-row>
			<!-- 动态参数静态属性区域 -->
		</el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		};
	},
    methods: {
        handleChange(){}
    },
};
</script>

<style></style>
