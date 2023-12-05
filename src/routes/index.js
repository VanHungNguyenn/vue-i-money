import { createRouter, createWebHistory } from 'vue-router'
import { AUTH_LAYOUT } from '@/constants'
import NotFound from '../views/NotFound.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () =>
			import(/* webpackChunkName: "home" */ '../views/Home.vue'),
	},
	{
		path: '/register',
		name: 'Register',
		meta: {
			layout: AUTH_LAYOUT,
		},
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Register.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		meta: {
			layout: AUTH_LAYOUT,
		},
		component: () =>
			import(/* webpackChunkName: "login" */ '../views/Login.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		component: NotFound,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
