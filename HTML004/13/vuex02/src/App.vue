<template>
	<div id="app">
    <my-add></my-add>
    <hr>
    <my-sub></my-sub>
  </div>
</template>

<script>
// 1. 导入add.vue 和 sub.vue
import add from "./components/add.vue";
import sub from "./components/sub.vue";

export default {
	data() {
		return {};
	},
  components:{
    'my-add':add,
    'my-sub':sub,

  },
	methods: {},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
