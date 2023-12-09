<template>
	<form @submit.prevent="onSubmit">
		<!-- Main form -->
		<div class="row mt-8">
			<div class="bg-white rounded-lg py-4">
				<div class="container mx-auto px-8">
					<div class="row">
						<label for="total" class="flex items-end pb-1">
							<div class="w-10 leading-10 mr-4">
								<span
									class="inline-block px-1 text-dark border-dark border rounded text-sm font-bold"
									>USD</span
								>
							</div>
							<div
								class="flex-1 flex flex-col border-b border-gray-100 pb-1"
							>
								<span class="font-semibold text-xs text-dark"
									>Total</span
								>
								<input
									class="text-4xl text-dark w-full outline-none mt-1"
									type="text"
									placeholder="0"
									id="total"
									v-model="total"
								/>
							</div>
						</label>
					</div>
					<div class="row">
						<label for="category" class="flex items-center pb-1">
							<div class="flex w-10 leading-10 mr-4">
								<span
									class="inline-block ml-auto bg-blue-300 w-8 h-8 rounded-full"
								>
								</span>
							</div>
							<div class="flex-1 border-b border-gray-100 py-3">
								<input
									class="text-xl text-dark w-full outline-none"
									type="text"
									placeholder="Select a category"
									id="category"
									v-model="category"
								/>
							</div>
						</label>
					</div>
					<div class="row">
						<label for="note" class="flex items-center pb-1">
							<div class="flex w-10 leading-10 mr-4">
								<span
									class="inline-block ml-auto w-8 h-8 rounded-full"
								>
									<DocumentIcon />
								</span>
							</div>
							<div class="flex-1 border-b border-gray-100 py-3">
								<input
									class="text-dark w-full outline-none"
									type="text"
									placeholder="Note"
									id="note"
									v-model="note"
								/>
							</div>
						</label>
					</div>
					<div class="row">
						<label for="time" class="flex items-center pb-1">
							<div class="flex w-10 leading-10 mr-4">
								<span
									class="inline-block ml-auto w-8 h-8 rounded-full"
								>
									<ClockIcon />
								</span>
							</div>
							<div class="flex-1 border-b border-gray-100 py-3">
								<input
									class="text-dark w-full outline-none"
									type="date"
									id="time"
									v-model="time"
								/>
							</div>
						</label>
					</div>
					<div class="row">
						<label for="wallet" class="flex items-center pb-1">
							<div class="flex w-10 leading-10 mr-4">
								<span
									class="inline-block ml-auto w-8 h-8 rounded-full"
								>
									<WalletIcon />
								</span>
							</div>
							<div class="flex-1 py-3">
								<div class="text-dark w-full">My Wallet</div>
							</div>
						</label>
					</div>
				</div>
			</div>
		</div>
		<!-- More detail -->
		<div class="row mt-8" v-if="!isMoreDetails">
			<button
				@click="isMoreDetails = !isMoreDetails"
				class="bg-white rounded-lg py-3 text-primary font-semibold w-full"
			>
				More Details
			</button>
		</div>
		<!-- Advanced form -->
		<div class="row mt-8" v-if="isMoreDetails">
			<div class="bg-white rounded-lg py-4">
				<div class="container mx-auto px-8">
					<div class="row">
						<label for="location" class="flex items-center pb-1">
							<div class="flex w-10 leading-10 mr-4">
								<span
									class="inline-block ml-auto w-8 h-8 rounded-full"
								>
									<MapIcon />
								</span>
							</div>

							<div class="flex-1 border-b border-gray-100 py-3">
								<input
									class="text-dark w-full outline-none"
									type="text"
									placeholder="Location"
									id="location"
									v-model="location"
								/>
							</div>
						</label>
					</div>
					<div class="person">
						<label for="location" class="flex items-center pb-1">
							<div class="flex w-10 leading-10 mr-4">
								<span
									class="inline-block ml-auto w-8 h-8 rounded-full"
								>
									<UserGroupIcon />
								</span>
							</div>

							<div class="flex-1 border-b border-gray-100 py-3">
								<input
									class="text-dark w-full outline-none"
									type="text"
									placeholder="With person"
									id="person"
									v-model="person"
								/>
							</div>
						</label>
					</div>
				</div>
			</div>
		</div>
		<!-- Upload photo -->
		<div class="row mt-8" v-if="isMoreDetails">
			<div class="bg-white rounded-lg py-4">
				<div class="container mx-auto px-8">
					<div class="row">
						<label
							for="photo"
							class="text-primary flex items-center pb-1 cursor-pointer"
						>
							<div class="flex w-10 leading-10 mr-4">
								<span
									class="inline-block ml-auto w-8 h-8 rounded-full"
								>
									<CameraIcon />
								</span>
							</div>

							<div class="flex-1 py-3">
								<div class="w-full font-semibold">
									Upload photo
								</div>
								<input
									type="file"
									id="photo"
									class="hidden"
									@change="onFileChange"
								/>
							</div>
							<div
								class="text-xs text-red font-semibold"
								v-if="errorFile"
							>
								{{ errorFile }}
							</div>
						</label>
					</div>
				</div>
			</div>
		</div>
		<div class="row mt-8 p-8">
			<button
				type="submit"
				class="w-full bg-primary text-white rounded-lg py-3 font-semibold"
			>
				Add transaction
			</button>
		</div>
	</form>
</template>

<script setup>
import {
	CameraIcon,
	ClockIcon,
	DocumentIcon,
	MapIcon,
	UserGroupIcon,
	WalletIcon,
} from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import { useUser } from '@/composables/useUser'
import useCollection from '@/composables/useCollection'
import useStorage from '@/composables/useStorage'
import { useRouter } from 'vue-router'

const router = useRouter()

const isMoreDetails = ref(false)

const total = ref(0)
const category = ref('')
const note = ref('')
const time = ref(new Date().toISOString().substring(0, 10))
const location = ref('')
const person = ref('')
const { getUser } = useUser()
const { user } = getUser()
const { error, addRecord } = useCollection('transactions')
const file = ref(null)
const errorFile = ref(null)
const { uploadFile, url } = useStorage('transactions')

const onFileChange = (e) => {
	const selected = e.target.files[0]
	const types = ['image/png', 'image/jpeg', 'image/jpg']

	if (selected && types.includes(selected.type)) {
		file.value = selected
		errorFile.value = null
	} else {
		file.value = null
		errorFile.value = 'Please select an image file (png or jpg)'
	}
}

const onSubmit = async () => {
	const transactionInfo = {
		total: total.value,
		category: category.value,
		note: note.value,
		time: time.value,
		userId: user.value.uid,
	}

	if (isMoreDetails.value) {
		transactionInfo.location = location.value
		transactionInfo.person = person.value

		if (file.value) {
			await uploadFile(file.value)
		}

		transactionInfo.photo = url.value
	}

	await addRecord(transactionInfo)

	router.push('/')
}
</script>
