<template>
	<NavigationHeader />
	<slot />

	<NavigationBottom v-if="meta.isShowFooter" />
</template>

<script setup>
import NavigationBottom from '@/components/NavigationBottom.vue'
import NavigationHeader from '@/components/NavigationHeader.vue'

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const meta = computed(() => route.meta)
</script>
