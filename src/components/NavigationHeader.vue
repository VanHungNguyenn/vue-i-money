<template>
	<header id="header" class="py-8">
		<div class="container mx-auto px-8">
			<div class="flex justify-between items-center">
				<div class="flex items-center gap-2">
					<div
						v-if="meta.leading"
						class="w-10 h-10 rounded-full overflow-hidden"
					>
						<img
							class="w-full h-auto object-cover"
							src="https://mcdn.coolmate.me/image/October2023/nhan-vat-doraemon-3012_329.jpg"
							alt="avatar"
							size="xs"
						/>
					</div>
					<h1 class="text-xl font-bold text-dark">
						{{ meta.text }}
					</h1>
				</div>
				<div>
					<ul>
						<li class="cursor-pointer">
							<BellIcon class="w-6 h-6" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
import { BellIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const meta = computed(() => {
	return route.meta
})
</script>
