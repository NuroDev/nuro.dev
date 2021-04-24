<template>
	<div class="counter">
		<Clickable class="inline-flex">
			<button @click="decrement" class="button">
				<i-feather-arrow-down class="mr-2 w-4" />
			</button>
		</Clickable>

		<span>count is: {{ count }}</span>

		<Clickable class="inline-flex">
			<button @click="increment" class="button">
				<i-feather-arrow-up class="mr-2 w-4" />
			</button>
		</Clickable>
	</div>
</template>

<script lang="ts" setup>
import { useStorage } from '@vueuse/core';
import { defineProps } from 'vue';

defineProps({
	msg: {
		type: String,
		required: true,
	},
});

const count = useStorage('count', 0);
const decrement = () => count.value--;
const increment = () => count.value++;
</script>

<style lang="postcss" scoped>
a {
	@apply text-primary-500;
}

label {
	@apply font-bold m-1;
}

code {
	@apply m-2 px-1 py-1 rounded \
		text-gray-800 dark:text-gray-300 bg-gray-200  dark:bg-gray-700 bg-opacity-75;
}

.button {
	@apply w-11 h-11 m-8 px-1 rounded-full \
		text-white text-gray-400 \
		border border-gray-400 dark:border-gray-500 \
		transition ease-in-out duration-300 \
		focus:outline-none focus:text-primary-500 focus:ring-4 focus:ring-primary-500;

	svg {
		@apply ml-2 mt-2;
	}
}

.counter {
	@apply flex flex-row justify-center items-center;
}
</style>
