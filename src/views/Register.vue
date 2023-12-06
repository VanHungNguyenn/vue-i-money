<template>
	<div class="mt-8">
		<div class="container mx-auto px-8">
			<form @submit.prevent="onSubmit" class="flex flex-col gap-6">
				<div class="row">
					<label for="fullName" class="flex flex-col">
						<span class="font-semibold">Fullname</span>
						<input
							type="text"
							id="fullName"
							placeholder="iMoney..."
							class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
							v-model="fullName"
						/>
					</label>
				</div>
				<div class="row">
					<label for="email" class="flex flex-col">
						<span class="font-semibold">Email Address</span>
						<input
							type="text"
							id="email"
							placeholder="example@gmail.com"
							class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
							v-model="email"
						/>
					</label>
				</div>
				<div class="row">
					<label for="password" class="flex flex-col">
						<span class="font-semibold">Password</span>
						<input
							type="password"
							id="password"
							placeholder="********"
							class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
							v-model="password"
						/>
					</label>
				</div>
				<div class="row">
					<button
						type="submit"
						class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
					>
						Sign Up
					</button>
				</div>
			</form>
			<!-- Start: Direction -->
			<div class="text-center w-full mt-6">
				<span class="font-semibold">I'm already a member.</span>
				<span class="ml-1">
					<router-link
						:to="{ name: 'Login', params: {} }"
						class="text-primary font-bold hover:underline"
						>Sign in</router-link
					>
				</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const fullName = ref('')
const email = ref('')
const password = ref('')

const onSubmit = () => {
	console.log({ fullName, email, password })
}
</script>
