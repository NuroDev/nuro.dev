<template>
	<router-view />
</template>

<script lang="ts" setup>
import splitbee from '@splitbee/web';

if (import.meta.env.PROD)
	splitbee.init({
		disableCookie: true,
	});
</script>

<style lang="postcss">
#app {
	@apply antialiased text-gray-500 dark:text-gray-400;
	font-family: Avenir, Helvetica, Arial, sans-serif;
}

html {
	@apply bg-gray-50;
}
html.dark {
	@apply bg-gray-900;
}
</style>
