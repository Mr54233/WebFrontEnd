<template>
	<div>
		<!-- 面包屑区域 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/home' }"
				>首页</el-breadcrumb-item
			>
			<el-breadcrumb-item>商品管理</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/goods' }">商品列表</el-breadcrumb-item>
			<el-breadcrumb-item>添加商品</el-breadcrumb-item>
		</el-breadcrumb>

		<!-- 卡片区域 -->
		<el-card>
			<el-form :model="addForm" :rules="addFormRules" ref="addFormRef">
				<el-form-item label="商品名称" prop="goods_name">
					<el-input v-model="addForm.goods_name"></el-input>
				</el-form-item>
				<el-form-item label="商品价格" prop="goods_price">
					<el-input
						v-model="addForm.goods_price"
						type="number"
					></el-input>
				</el-form-item>
				<el-form-item label="商品重量" prop="goods_weight">
					<el-input
						v-model="addForm.goods_weight"
						type="number"
					></el-input>
				</el-form-item>
				<el-form-item label="商品数量" prop="goods_number">
					<el-input
						v-model="addForm.goods_number"
						type="number"
					></el-input>
				</el-form-item>
				<el-form-item label="商品分类" prop="goods_cat">
					<el-cascader
						v-model="addForm.goods_cat"
						:options="cateList"
						:props="cateProps"
						@change="handleChange"
						clearable
					>
					</el-cascader>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			addForm: {
				goods_name: "",
				goods_price: null,
				goods_weight: null,
				goods_number: null,
				// 商品所属的分类数组
				goods_cat: [],
				// 图片数组
				pics: [],
				// 商品的详情描述
				goods_introduce: "",
				attrs: [],
			},
			// 表单验证规则对象
			addFormRules: {
				goods_name: [
					{
						required: true,
						message: "请输入商品名称",
						trigger: "blur",
					},
				],
				goods_price: [
					{
						required: true,
						message: "请输入商品价格",
						trigger: "blur",
					},
				],
				goods_weight: [
					{
						required: true,
						message: "请输入商品重量",
						trigger: "blur",
					},
				],
				goods_number: [
					{
						required: true,
						message: "请输入商品数量",
						trigger: "blur",
					},
				],
				goods_cat: [
					{
						required: true,
						message: "请选择商品分类",
						trigger: ["change", "blur"],
					},
				],
			},
		};
	},
};
</script>

<style></style>
