<template>
	<component :is="layout">
		<router-view></router-view>
	</component>
	<h1>Hahaaha</h1>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { PUBLIC_LAYOUT } from './constants'

const route = useRoute()

const layout = computed(() => {
	return route.meta.layout || PUBLIC_LAYOUT
})
</script>

<style scoped></style>
