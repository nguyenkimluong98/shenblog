import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "../views/DashBoard.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
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
	},
	{
		path: "/updates",
		name: "Updates",
		component: () =>
			import(/* webpackChunkName: "updates" */ "../views/Updates.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
