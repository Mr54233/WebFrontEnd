<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/home' }"
				>首页</el-breadcrumb-item
			>
			<el-breadcrumb-item>商品管理</el-breadcrumb-item>
			<el-breadcrumb-item>商品分类</el-breadcrumb-item>
		</el-breadcrumb>

		<el-card>
			<!-- 添加分类区域 -->
			<el-row>
				<el-col>
					<el-button type="primary" @click="showAddCateDialog"
						>添加分类</el-button
					>
				</el-col>
			</el-row>
			<!-- 分类列表区域 -->
			<tree-table
				:data="cateList"
				:columns="columns"
				:selection-type="false"
				:expand-type="false"
				:show-row-hover="false"
				show-index
			>
				<template slot="isValid" slot-scope="scope">
					<!-- {{ scope.row}} -->
					<i
						class="el-icon-success"
						style="color: lightgreen"
						v-if="scope.row.cat_deleted === false"
					></i>
					<i class="el-icon-error" style="color: red" v-else></i>
				</template>
				<template slot="level" slot-scope="scope">
					<el-tag v-if="scope.row.cat_level === 0"> 一级 </el-tag>
					<el-tag
						type="success"
						v-else-if="scope.row.cat_level === 1"
					>
						二级
					</el-tag>
					<el-tag type="warning" v-else> 三级 </el-tag>
				</template>
				<template slot="button" slot-scope="scope">
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
						@click="open(scope.row)"
						>删除</el-button
					>
				</template>
			</tree-table>
			<!-- 分页导航区域 -->
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

		<!-- 添加分类的对话框 -->
		<el-dialog
			title="添加份额里"
			:visible.sync="addCateVisible"
			width="50%"
			@close="handleAddClose"
		>
			<!-- 对话框的主要内容 -->
			<el-form
				ref="addForm"
				:model="addForm"
				label-width="80px"
				:rules="addFormRules"
			>
				<el-form-item label="分类名称" prop="cat_name">
					<el-input v-model="addForm.cat_name"></el-input>
				</el-form-item>
				<el-form-item label="父分类">
					<el-cascader
						v-model="selectedCateIds"
						:options="parentCateList"
						:props="parentCateProps"
						@change="handleChange"
						clearable
						change-on-select
					></el-cascader>
				</el-form-item>
			</el-form>
			<!-- 脚部两个按钮 -->
			<span slot="footer" class="dialog-footer">
				<el-button @click="addCateVisible = false">取 消</el-button>
				<el-button type="primary" @click="addCate">确 定</el-button>
			</span>
		</el-dialog>

		<!-- 编辑类别的对话框 -->
		<el-dialog
			title="编辑类别"
			:visible.sync="editCateVisible"
			width="50%"
			@close="handleEditClose"
		>
			<!-- 对话框的主要内容 -->
			<el-form
				ref="editForm"
				:model="editForm"
				label-width="80px"
				:rules="editFormRules"
			>
				<el-form-item label="分类名称" prop="cat_name">
					<el-input v-model="editForm.cat_name"></el-input>
				</el-form-item>
			</el-form>
			<!-- 脚部两个按钮 -->
			<span slot="footer" class="dialog-footer">
				<el-button @click="editCateVisible = false">取 消</el-button>
				<el-button
					type="primary"
					@click="editCatesInfo(editForm.cat_id)"
					>确 定</el-button
				>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			// 商品分类的数据列表，默认为空
			cateList: [],
			// 查询条件
			queryInfo: {
				type: 3,
				pagenum: 1, //页码
				pagesize: 5, //每页显示多少条数据
			},
			// 总数
			total: 0,
			// tree-table 表格中的列的定义
			columns: [
				{
					label: "分类名称",
					prop: "cat_name",
					width: "200px",
				},
				{
					label: "是否有效",
					// 列是模板列
					type: "template",
					// 给模板列取名 , 名称是自己定义的
					template: "isValid",
				},
				{
					label: "级别",
					// 列是模板列
					type: "template",
					// 给模板列取名 , 名称是自己定义的
					template: "level",
				},
				{
					label: "按钮",
					// 列是模板列
					type: "template",
					// 给模板列取名 , 名称是自己定义的
					template: "button",
				},
			],
			// 控制添加分类对话框的显示和隐藏
			addCateVisible: false,
			// 添加分类表单
			addForm: {
				cat_name: "",
				cat_pid: 0,
				cat_level: 0,
			},
			// 添加分类表单验证规则
			addFormRules: {
				cat_name: [
					{
						required: true,
						message: "请输入分类名称",
						trigger: "blur",
					},
				],
			},
			// 父分类列表
			parentCateList: [],
			// 选择的类型id数组
			selectedCateIds: [],
			// 父分类级联选择器的配置对象
			parentCateProps: {
				expandTrigger: "hover",
				label: "cat_name",
				value: "cat_id",
				children: "children",
				// checkStrictly:'true'
			},
            // 控制编辑分类对话框的显示和隐藏
			editCateVisible: false,
			// 添加分类表单
			editForm: {
				cat_name: "",
			},
			// 添加分类表单验证规则
			editFormRules: {
				cat_name: [
					{
						required: true,
						message: "请输入分类名称",
						trigger: "blur",
					},
				],
			},
		};
	},
	created() {
		this.getCategoryList();
	},
	methods: {
		// 获取商品分类列表
		async getCategoryList() {
			const { data: res } = await this.$http.get("categories", {
				params: this.queryInfo,
			});
			if (res.meta.status !== 200) {
				return this.$message.error(res.meta.msg);
			}

			this.cateList = res.data.result;
			this.total = res.data.total;
			console.log(this.cateList);
		},
		// 监听 pagesize(一页多少条记录) 该变的事件
		pageSizeChange(newSize) {
			this.queryInfo.pagesize = newSize;
			this.getCategoryList();
		},
		// 监听 pagenum 页码的改变
		pageNumChange(newPage) {
			this.queryInfo.pagenum = newPage;
			this.getCategoryList();
		},
		// 显示添加分类
		async showAddCateDialog() {
			// 获取父分类数据
			const { data: res } = await this.$http.get(`categories`, {
				params: { type: 2 },
			});
			if (res.meta.status !== 200) {
				return this.$message.error(res.meta.msg);
			}
			this.parentCateList = res.data;
			// 打开对话框
			this.addCateVisible = true;
		},
		// 关闭添加分类对话框
		handleAddClose() {
			this.$refs.addForm.resetFields();
			this.addCateVisible = false;
		},
		// 添加分类确认
		async addCate() {
			// console.log(this.addForm);
			const { data: res } = await this.$http.post(
				"categories",
				this.addForm
			);
			if (res.meta.status !== 201) {
				return this.$message.error(res.meta.msg);
			}

			this.$message.success(res.meta.msg);
			this.addCateVisible = false;
			this.getCategoryList();
		},

		// 选择分类
		handleChange() {
			// 将选择中的父类型的id设置到addfrom 中的cate_pid
			// 还需要设置cate_level层级
			// [] [1] [1,3]
			if (this.selectedCateIds.length == 0) {
				// 没有选择父类别 , 表示添加的就是一级类别
				this.addForm.cat_level = 0;
				this.addForm.cat_pid = 0;
			} else {
				this.addForm.cat_level = this.selectedCateIds.length;
				this.addForm.cat_pid =
					this.selectedCateIds[this.selectedCateIds.length - 1];
			}
		},

		// 打开编辑对话框
		async showEdit(cates) {
            console.log(cates);
            this.editCateVisible = true

            const { data:res} = await this.$http.get(`categories/${cates.cat_id}`) 
            
            this.editForm = res.data
        },

		// 打开确认删除框
		open(cates) {
			// console.log(cates);
			this.$confirm(`此操作将永久删除该<span style="color:red;font-weight:bold;"> ${cates.cat_name} </span>分类, 是否继续?`, "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				dangerouslyUseHTMLString: true,
				type: "warning",
			})
				.then(async () => {
					const { data: res } = await this.$http.delete(
						`categories/${cates.cat_id}`
					);
					if (res.meta.status !== 200) {
						this.$message.error(res.meta.msg);
					} else {
						this.$message.success(res.meta.msg);
						this.getCategoryList();
					}
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "那就不删了奥",
					});
				});
		},

        // 打开编辑对话框
        editCatesInfo(id){
            // console.log(id);
            this.$refs.editForm.validate(async (result)=>{
                if (result) {
					const { data: res } = await this.$http.put(
						`categories/${id}`,
						this.editForm
					);
					// console.log(res);
					if (res.meta.status !== 200) {
						this.$message.error(res.meta.msg);
					} else {
						this.$message.success(res.meta.msg);
						this.getCategoryList();
						this.editCateVisible = false;
					}
				}
            })
        },
        // 关闭前编辑对话框
        handleEditClose(){
			this.$refs.editForm.resetFields();
			this.editCateVisible = false;
		},
	},
};
</script>

<style scoped>
.zk-table {
	margin: 15px 0;
}
</style>
