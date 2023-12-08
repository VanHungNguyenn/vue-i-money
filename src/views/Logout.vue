<template></template>

<script setup>
import { useLogout } from '@/composables/useLogout'
import { useRouter } from 'vue-router'

const router = useRouter()

const { error, logout } = useLogout()

const onLogout = async () => {
	await logout()

	if (!error.value) {
		router.push({ name: 'Login', params: {} })
	}
}

onLogout()
</script>
