<template>
	<img alt="Vue logo" src="./assets/logo.png" class="mx-auto" />
	<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue';
</script>

<style lang="postcss">
#app {
	@apply antialiased mt-64 text-center;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: #2c3e50;
}
</style>
