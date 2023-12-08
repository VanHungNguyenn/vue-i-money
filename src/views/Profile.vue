<template>
	<!-- start: Info -->
	<div class="row" v-if="user">
		<div class="container mx-auto p-8">
			<div class="text-center">
				<div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
					<img
						class="w-full h-auto object-cover"
						src="https://mcdn.coolmate.me/image/October2023/nhan-vat-doraemon-3012_329.jpg"
						alt="avatar"
						size="xs"
					/>
				</div>
				<div class="font-bold text-2xl text-primary mt-3">
					{{ user.displayName }}
				</div>
				<div class="font-semibold text-gray-400 mt-1">
					{{ user.email }}
				</div>
			</div>
		</div>
	</div>
	<!-- start: profile -->
	<div class="row">
		<div class="container mx-auto px-8">
			<div class="grid grid-cols-1">
				<div class="col-span-1">
					<h3 class="font-bold text-xl text-primary mb-2">General</h3>
				</div>
			</div>
			<div class="grid grid-cols-1">
				<div class="col-span-1">
					<ul>
						<li
							v-for="option in profileOptions"
							:key="option.name"
							class="text-dark last:text-red"
						>
							<router-link
								class="flex items-center justify-between py-4"
								:to="option.route"
							>
								<div class="flex items-center text-left">
									<component
										:is="option.icon"
										class="w-6 h-6"
									/>
									<h5
										class="font-semibold ml-3 whitespace-nowrap"
									>
										{{ option.name }}
									</h5>
								</div>
								<ChevronRightIcon class="w-6 h-6" />
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { PROFILE_OPTIONS } from '@/constants'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import { reactive } from 'vue'
import { useUser } from '@/composables/useUser'
const { getUser } = useUser()

const profileOptions = reactive(PROFILE_OPTIONS)

const { user } = getUser()
</script>

<style scoped></style>
