<template>
	<h1>{{ msg }}</h1>

	<p>
		Recommended IDE setup:
		<a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
		+
		<a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">
			Vetur
		</a>
		or
		<a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
		(if using
		<code>&lt;script setup&gt;</code>)
	</p>

	<p>See <code>README.md</code> for more information.</p>

	<p>
		<a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
		|
		<a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
	</p>

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
	<p>
		Edit
		<code>components/HelloWorld.vue</code> to test hot module replacement.
	</p>
</template>

<script lang="ts" setup>
import { useStorage, useToggle } from '@vueuse/core';
import { defineProps, ref } from 'vue';

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
	@apply text-green-500;
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
		focus:outline-none focus:text-green-500 focus:border-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50;

	svg {
		@apply ml-2 mt-2;
	}
}
</style>
