<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>编号</th>
          <th>类型名称</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.cid }}</td>
          <td>{{ category.cname }}</td>
          <el-row>
            <el-button href="JavaScript:;" @click="goEdit(category.cid)" class="primary">编辑</el-button>
            <el-button href="JavaScript:;" @click="remove(category.cid)" class="danger">删除</el-button>
          </el-row>
        </tr>
      </tbody>
    </table>
    <router-view></router-view>
    <br />
    <button @click.prevent="goAdd">新增</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: [],
      total:''
    };
  },
  methods: {},
  mounted () {
    this.$axios.get("http://localhost:3000/api/category/page").then(ret => {
      // console.log(ret.data)
      this.category = ret.data.data
      this.total = ret.data.total
    })
  }
};
</script>
