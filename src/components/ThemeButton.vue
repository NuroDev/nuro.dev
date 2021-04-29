<template>
	<div class="fixed top-0 right-0 m-8">
		<Clickable>
			<button
				@click="toggleDark"
				class="themeButton"
				aria-label="Theme Toggle"
				:alt="isDark ? 'Dark' : 'Light'"
			>
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
	@apply flex justify-center items-center w-12 h-12 p-2 rounded-lg \
		text-gray-300 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 \
		bg-gray-50 hover:bg-gray-100 hover:bg-opacity-50 dark:bg-gray-900 dark:hover:bg-gray-800 \
		transition ease-in-out duration-300 \
		focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-500;
	/* transform translate-y-0 hover:-translate-y-1 active:translate-y-1; */

	svg {
		@apply w-6 h-6;
	}
}
</style>
