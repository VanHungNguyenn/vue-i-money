import { defineAsyncComponent } from 'vue'
import { AUTH_LAYOUT, PUBLIC_LAYOUT } from '@/constants'

export function registerGlobalComponent(app) {
	app.component(
		AUTH_LAYOUT,
		defineAsyncComponent(() => import('@/layouts/Auth.vue'))
	)
	app.component(
		PUBLIC_LAYOUT,
		defineAsyncComponent(() => import('@/layouts/Default.vue'))
	)
}
