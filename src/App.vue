<template>
	<img alt="Vue logo" src="./assets/logo.png" class="mx-auto" />
	<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
	name: 'App',
	components: {
		HelloWorld,
	},
});
</script>

<style lang="postcss">
#app {
	@apply antialiased mt-64 text-center;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: #2c3e50;
}
</style>
