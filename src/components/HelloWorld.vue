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

	<button @click="increment" class="button">count is: {{ count }}</button>
	<p>
		Edit
		<code>components/HelloWorld.vue</code> to test hot module replacement.
	</p>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';

defineProps({
	msg: {
		type: String,
		required: true,
	},
});

const count = ref(0);
const increment = () => count.value++;
</script>

<style lang="postcss" scoped>
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}

.button {
	@apply m-8 px-8 py-2 rounded-md \
  text-white bg-green-500 hover:bg-green-600 \
  transition ease-in-out duration-300 \
  focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50;
}
</style>
