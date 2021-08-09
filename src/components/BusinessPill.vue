<template>
	<a class="pill" :href="url" target="_black" rel="noreferrer noopener">
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
		mt-0 my-2 px-3 \
		hover:bg-gray-500 hover:bg-opacity-15 \
		hover:backdrop-filter hover:backdrop-blur-sm hover:saturate-200 \
		hover:text-white \
		rounded-lg cursor-pointer \
		transition ease-in-out duration-300;
}
</style>
