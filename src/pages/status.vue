<template>
	<ThemeButton />
	<div
		class="min-h-screen flex flex-col justify-center items-center px-4 py-6 sm:p-6 pointer-events-none"
	>
		<StatusWidget />
	</div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head';

useHead({
	title: 'nuro ─ status',
});
</script>
