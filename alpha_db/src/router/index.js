import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Board from "../views/Board.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "login",
		component: Login,
	},
	{
		path: "/signUp",
		name: "signup",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),
	},
	{
		path: "/board/:id",
		name: "Board",
		component: Board,
	},
	{
		path: "/home",
		name: "Home",
		component: Home,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
