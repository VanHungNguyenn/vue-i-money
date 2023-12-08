<template>
	<NavigationHeader />
	<slot />

	<NavigationBottom />
</template>

<script setup>
import NavigationBottom from '@/components/NavigationBottom.vue'
import NavigationHeader from '@/components/NavigationHeader.vue'
</script>
