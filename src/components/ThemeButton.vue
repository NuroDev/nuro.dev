<template>
	<div class="fixed top-0 right-0 m-8">
		<Clickable>
			<button @click="toggleDark" class="themeButton" :alt="isDark ? 'Dark' : 'Light'">
				<i-feather-moon v-if="isDark" />
				<i-feather-sun v-else-if="!isDark" />
				<i-heroicons-outline-color-swatch v-else />
			</button>
		</Clickable>
	</div>
</template>

<script lang="ts" setup>
import { useSound } from '@vueuse/sound';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="postcss" scoped>
.themeButton {
	@apply w-11 h-11 p-4 rounded-full \
		text-gray-500 dark:text-gray-200 \
		border border-gray-300 dark:border-gray-500 \
		transition ease-in-out duration-300 \
		focus:outline-none focus:ring-4 focus:ring-primary-500 focus:text-primary-500;
	svg {
		@apply relative -top-1 -left-1;
	}
}
</style>
