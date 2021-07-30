<template>
	<transition
		enter-active-class="transition duration-500 ease-in-out"
		enter-from-class="transform opacity-0"
		enter-to-class="transform opacity-100"
		leave-active-class="transition duration-500 ease-in-out"
		leave-from-class="transform opacity-100"
		leave-to-class="transform opacity-0"
	>
		<div v-if="commander.isOpen" class="overlay" aria-hidden="true" />
	</transition>
</template>

<script lang="ts" setup>
import { useCommanderStore } from '~/store';

const commander = useCommanderStore();
</script>

<style lang="postcss" scoped>
.overlay {
	@apply fixed inset-0 \
		bg-black bg-opacity-25 \
		transition ease-in-out duration-300;
}
</style>
