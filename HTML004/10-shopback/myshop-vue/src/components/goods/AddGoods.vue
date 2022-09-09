<template>
	<div>
		<!-- 面包屑区域 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/home' }"
				>首页</el-breadcrumb-item
			>
			<el-breadcrumb-item>商品管理</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/goods' }"
				>商品列表</el-breadcrumb-item
			>
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
			// 所有分类
			cateList: [],
			// 级联选择器的 配置选项
			cateProps: {
				expandTrigger: "hover", // 展开方式 , 默认click 改为hover
				label: "cat_name", //表示看到的是那个属性
				value: "cat_id", //代表选中的是那个值
			},
		};
	},
	created() {
		this.getCateList();
	},
	methods: {
		// 获取所有商品的分类数据
		async getCateList() {
			const { data: res } = await this.$http.get("categories");
			// console.log(res);
			if (res.meta.status != 200) {
				return this.$message.error(
					"获取商品分类数据失败：" + res.meta.msg
				);
			}

			this.cateList = res.data;
		},
		// 改变打印
		handleChange(value) {
			console.log(value);
		},
	},
};
</script>

<style></style>
