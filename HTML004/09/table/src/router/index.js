import Vue from "vue";
import VueRouter from "vue-router";
import Table from "../components/Table.vue";
import AddCate from "../components/AddCategory.vue";
import EditCate from '../components/EditCategory.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Table,
	},
	{
		path: "/addCategory",
		name: "ac",
		component: AddCate,
		props: true,
	},
	{
		path: "/editCategory/:cid",
		name: "ec",
		component: EditCate,
		props: true,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
