import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "../views/DashBoard.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		alias: "/home",
		name: "DashBoard",
		component: DashBoard
	},
	{
		path: "/posts",
		name: "Posts",
		component: () =>
			import(/* webpackChunkName: "posts" */ "../views/Posts.vue")
	},
	{
		path: "/questions",
		name: "Questions",
		component: () =>
			import(/* webpackChunkName: "questions" */ "../views/Questions.vue")
	},
	{
		path: "/discussions",
		name: "Discussions",
		component: () =>
			import(
				/* webpackChunkName: "discussions" */ "../views/Discussions.vue"
			)
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
