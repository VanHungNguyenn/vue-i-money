<template>
	<div class="mt-8">
		<div class="container mx-auto px-8">
			<form @submit.prevent="onSubmit" class="flex flex-col gap-6">
				<div class="row">
					<label for="email" class="flex flex-col">
						<span class="font-semibold">Email Address</span>
						<input
							type="text"
							id="email"
							placeholder="example@gmail.com"
							class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
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
						/>
					</label>
				</div>
				<div class="row">
					<button
						type="submit"
						class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
					>
						Sign In
					</button>
				</div>
			</form>
			<!-- Start: Direction -->
			<div class="text-center w-full mt-6">
				<span class="font-semibold">I'm a new user.</span>
				<span class="ml-1">
					<router-link
						:to="{ name: 'Register', params: {} }"
						class="text-primary font-bold hover:underline"
						>Sign Up</router-link
					>
				</span>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped></style>
