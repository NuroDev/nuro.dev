<template>
	<a class="pill" :href="url" target="_black" rel="noreferrer noopener">
		<img :src="logo" alt="Attio Logo" :draggable="false" />
		<span class="content">
			<slot />
		</span>
	</a>
</template>

<script lang="ts" setup>
import logo from '~/assets/attio.svg';

defineProps<{
	url: string;
}>();
</script>

<style lang="postcss" scoped>
.pill {
	@apply inline-flex justify-center items-center \
		px-2 pb-0.5 \
		hover:bg-gray-300 dark:hover:bg-gray-500 hover:bg-opacity-15 \
		hover:backdrop-filter hover:backdrop-blur-sm hover:saturate-200 \
		rounded-lg cursor-pointer \
		transition ease-in-out duration-300;

	img {
		@apply w-4 h-4 \
			mr-1 \
			select-none;
	}
}
</style>
