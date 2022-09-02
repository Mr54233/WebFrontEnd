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
          <td>
            <a href="JavaScript:;" @click="goEdit(category.cid)">编辑</a>
            <a href="JavaScript:;" @click="remove(category.cid)">删除</a>
          </td>
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
