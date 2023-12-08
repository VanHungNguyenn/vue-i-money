import { createRouter, createWebHistory } from 'vue-router'
import { AUTH_LAYOUT } from '@/constants'
import NotFound from '../views/NotFound.vue'
import { auth } from '@/configs/firebase'

// auth guards
const requireAuth = (to, from, next) => {
	const user = auth.currentUser

	if (!user) {
		next({
			name: 'Login',
			params: {},
		})
	} else {
		next()
	}
}

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () =>
			import(/* webpackChunkName: "home" */ '../views/Home.vue'),
		beforeEnter: requireAuth,
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
		path: '/profile',
		name: 'Profile',
		component: () =>
			import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
		beforeEnter: requireAuth,
	},
	{
		path: '/logout',
		name: 'Logout',
		component: () =>
			import(/* webpackChunkName: "logout" */ '../views/Logout.vue'),
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
