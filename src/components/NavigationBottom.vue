<template>
	<footer
		id="footer"
		class="fixed w-full bottom-0 left-0 bg-white py-4 pb-safe-4"
	>
		<router-link
			:to="{ name: 'NewTransaction', params: {} }"
			class="absolute w-[60px] h-[60px] bg-primary top-0 left-[50%] rounded-[60px] -ml-[30px] -mt-[30px] flex items-center justify-center"
		>
			<PlusIcon class="w-8 h-8 text-white" />
		</router-link>
		<div class="container mx-auto px-8 h-full">
			<ul class="w-full flex justify-between h-full items-center">
				<li v-for="navItem in navItems" :key="navItem.name">
					<router-link :to="{ name: navItem.name, params: {} }">
						<component :is="navItem.icon" class="w-6 h-6" />
					</router-link>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script setup>
import { NAV_ITEMS } from '@/constants'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { reactive } from 'vue'

const navItems = reactive(NAV_ITEMS)
</script>

<style scoped>
footer#footer ul li:nth-child(2) {
	margin-right: 15%;
}

footer#footer ul li:nth-child(3) {
	margin-left: 15%;
}
</style>
