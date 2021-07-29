<template>
	<div class="content">
		<Clickable>
			<button
				@click="toggle()"
				class="button"
				aria-label="Toggle Theme"
				:alt="isDark ? 'Dark' : 'Light'"
			>
				<i-feather-moon v-if="isDark" />
				<i-feather-sun v-else-if="!isDark" />
				<i-feather-droplet v-else />
			</button>
		</Clickable>
	</div>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
	storageKey: 'theme',
});
const toggle = useToggle(isDark);
</script>

<style lang="postcss" scoped>
.content {
	@apply fixed top-0 left-0 \
		m-8 z-10;

	.button {
		@apply flex justify-center items-center \
			w-12 h-12 \
			p-2 \
			rounded-lg \
			text-gray-300 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 \
			bg-gray-50 hover:bg-gray-100 hover:bg-opacity-50 dark:bg-gray-900 dark:hover:bg-gray-800 \
			transition ease-in-out duration-300 \
			focus:outline-none focus:ring-4 focus:ring-primary-500;

		svg {
			@apply w-6 h-6;
		}
	}
}
</style>
