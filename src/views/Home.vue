<template>
	<div class="container mx-auto px-8">
		<!-- list records title -->
		<h1 class="text-2xl font-semibold text-primary mt-8 mb-4">
			List records
		</h1>
		<!-- list records -->
		<div
			class="bg-white rounded-lg py-4 mt-4"
			v-for="record in recentRecords"
			:key="record.id"
		>
			<div class="container mx-auto px-8">
				<div class="row">
					<div class="flex-1 py-3">
						<div class="w-full font-semibold">
							<div class="flex items-center">
								<div class="flex-1">
									<div class="text-sm text-gray-500">
										{{ record.category }}
									</div>
									<div class="text-lg text-gray-800">
										{{ record.total }}
									</div>
								</div>

								<div class="flex-1">
									<div class="text-sm text-gray-500">
										{{ record.time }}
									</div>
									<div class="text-lg text-gray-800">
										{{ record.userId }}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import useCollection from '@/composables/useCollection'
import { computed } from 'vue'
const { getAllRecords, allRecords } = useCollection('transactions')

getAllRecords()

// get 5 records from a transaction
const recentRecords = computed(() => {
	return allRecords.value.slice(0, 5)
})
</script>

<style scoped></style>
