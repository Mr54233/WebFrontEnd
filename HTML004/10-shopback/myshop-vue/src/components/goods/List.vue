<template>
	<div>
		<!-- 面包屑区域 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/home' }"
				>首页</el-breadcrumb-item
			>
			<el-breadcrumb-item>商品管理</el-breadcrumb-item>
			<el-breadcrumb-item>商品列表</el-breadcrumb-item>
		</el-breadcrumb>

		<!-- 卡片区域 -->
		<el-card class="box-card">
			<!-- 搜索区域 -->
			<el-row :gutter="20">
				<el-col :span="8">
					<el-input
						placeholder="请输入内容"
						v-model="queryInfo.query"
						@keyup.enter="runQuery"
					>
						<el-button
							slot="append"
							icon="el-icon-search"
							@click="runQuery"
						></el-button>
					</el-input>
				</el-col>
				<el-col :span="4">
					<el-button type="primary" @click="addGoods">添加商品</el-button>
				</el-col>
			</el-row>
			<!-- 数据表格区域 -->
			<el-table :data="goodList" style="width: 100%" border stripe>
				<!-- <el-table-column type="expand" width="50">
					<template slot-scope="props">
						<el-form
							label-position="left"
							inline
							class="demo-table-expand"
						>
							<el-form-item label="商品名称">
								<span>{{ props.row.goods_name }}</span>
							</el-form-item>
							<el-form-item label="价格">
								<span>{{ props.row.goods_price + ".00" }}</span>
							</el-form-item>
							<el-form-item label="库存">
								<span>{{ props.row.goods_number }}</span>
							</el-form-item>
							<el-form-item label="重量">
								<span>{{ props.row.goods_weight }}</span>
							</el-form-item>
							<el-form-item label="商品状态">
								<span>{{ props.row.goods_state }}</span>
								<span>已审核</span>
							</el-form-item>
							<el-form-item label="添加时间">
								<span>{{
									props.row.add_time | dateFormat
								}}</span>
							</el-form-item>
							<el-form-item label="更新时间">
								<span>{{
									props.row.upd_time | dateFormat
								}}</span>
							</el-form-item>
							<el-form-item label="是否是热销品">
								<i
									style="color: green; font-size: 18px"
									v-if="props.row.is_promote"
									class="el-icon-success"
								></i>
								<i
									style="color: red; font-size: 18px"
									v-else
									class="el-icon-error"
								></i>
							</el-form-item>
							<el-form-item label="热销品数量">
								<span>{{ props.row.hot_mumber }}</span>
							</el-form-item>
						</el-form>
					</template>
				</el-table-column> -->
				<el-table-column type="index" width="50"></el-table-column>
				<el-table-column
					label="商品名称"
					prop="goods_name"
					width="500"
				></el-table-column>
				<el-table-column
					label="商品价格(元)"
					prop="goods_price"
				></el-table-column>
				<el-table-column
					label="商品重量(克)"
					prop="goods_weight"
				></el-table-column>
				<el-table-column label="创建时间" width="165"
					><template slot-scope="scope">{{
						scope.row.add_time | dateFormat
					}}</template></el-table-column
				>
				<el-table-column label="操作" width="180">
					<template slot-scope="scope">
						<!-- {{scope.row}} -->
						<el-button
							type="primary"
							icon="el-icon-edit"
							size="small"
							@click="showEdit(scope.row)"
							>编辑</el-button
						>
						<el-button
							type="danger"
							icon="el-icon-delete"
							size="small"
							@click="open(scope.row.goods_id)"
							>删除</el-button
						>
					</template>
				</el-table-column>
			</el-table>
			<!-- 分页区域 -->
			<el-pagination
				@size-change="pageSizeChange"
				@current-change="pageNumChange"
				:current-page="queryInfo.pagenum"
				:page-sizes="[5, 10, 15, 20]"
				:page-size="queryInfo.pagesize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total"
			>
			</el-pagination>
		</el-card>

		<!-- 编辑商品的对话框 -->
		<el-dialog
			title="编辑商品"
			:visible.sync="editDialogVisible"
			width="50%"
			@close="handleEditClose"
		>
			<!-- 对话框的主要内容 -->
			<el-form
				ref="editForm"
				:model="editForm"
				label-width="80px"
				:rules="FormRules"
			>
				<el-form-item label="商品名称" prop="goods_name">
					<el-input v-model="editForm.goods_name"></el-input>
				</el-form-item>
				<el-form-item label="商品价格" prop="goods_price">
					<el-input v-model="editForm.goods_price"></el-input>
				</el-form-item>
				<el-form-item label="商品库存" prop="goods_number">
					<el-input v-model="editForm.goods_number"></el-input>
				</el-form-item>
				<el-form-item label="商品重量" prop="goods_weight">
					<el-input v-model="editForm.goods_weight"></el-input>
				</el-form-item>
			</el-form>
			<!-- 脚部两个按钮 -->
			<span slot="footer" class="dialog-footer">
				<el-button @click="editDialogVisible = false">取 消</el-button>
				<el-button
					type="primary"
					@click="editGoodsInfo(editForm.goods_id)"
					>确 定</el-button
				>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	created() {
		// 获取当前页的用户数据
		this.getGoodList();
	},
	data() {
		return {
			goodList: [],
			total: 0,
			queryInfo: {
				query: "", // 层级分类
				pagenum: 1, // 页码
				pagesize: 5, // 每页条数
			},
			editDialogVisible: false,
			editForm: {},
			FormRules: {
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
				goods_number: [
					{
						required: true,
						message: "请输入商品库存",
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
			},
		};
	},
	methods: {
		// 每页条数改变了
		pageSizeChange(newSize) {
			this.queryInfo.pagesize = newSize;
			this.getGoodList();
		},
		// 当前页码改变了 , newPageNum 就是改变后的新页码
		pageNumChange(newPageNum) {
			// 修改模型数据 queryInfo.pagenum
			this.queryInfo.pagenum = newPageNum;
			// 重新获取数据
			this.getGoodList();
		},

		async getGoodList() {
			const { data: res } = await this.$http.get("goods", {
				params: this.queryInfo,
			});
			if (res.meta.status !== 200) {
				return this.$message.error(res.meta.msg);
			}

			this.goodList = res.data.goods;
			this.total = res.data.total;

			// console.log(this.total);
			// console.log(res.data);
		},

		// 执行搜索功能
		runQuery() {
			this.getGoodList();
		},

		// 编辑用户对话框关闭前
		handleEditClose() {
			this.$refs.editForm.resetFields();
			this.editDialogVisible = false;
		},
		// 显示编辑dialog
		async showEdit(goods) {
			this.editDialogVisible = true;
			// this.editForm = goods;
			const { data: res } = await this.$http.get(
				`goods/${goods.goods_id}`
			);
			this.editForm = res.data;
			// console.log(goods);
			// console.log(res.data);
		},

		// 打开确认删除框
		open(id) {
			// console.log(id);
			this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(async () => {
					const { data: res } = await this.$http.delete(
						`goods/${id}`
					);
					if (res.meta.status !== 200) {
						this.$message.error(res.meta.msg);
					} else {
						this.$message.success(res.meta.msg);
						this.getGoodList();
					}
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "那就不删了奥",
					});
				});
		},

		// 编辑确认
		editGoodsInfo(id) {
			// console.log(id);
			// console.log(this.editForm);
			this.$refs.editForm.validate(async (result) => {
				if (result) {
					const { data: res } = await this.$http.put(
						`goods/${id}`,
						this.editForm
					);
					// console.log(res);
					if (res.meta.status !== 200) {
						this.$message.error(res.meta.msg);
					} else {
						this.$message.success(res.meta.msg);
						this.getGoodList();
						this.editDialogVisible = false;
					}
				}
			});
		},

		// 添加商品
		addGoods(){
			this.$router.push('addGoods')
		}
	},
};
</script>

<style scoped>
.el-card {
	margin-top: 15px;
}
.demo-table-expand {
	font-size: 0;
}
.demo-table-expand label {
	width: 120px;
	color: #99a9bf;
}
.demo-table-expand .el-form-item {
	margin-right: 0;
	margin-bottom: 0;
	width: 80%;
}
</style>
