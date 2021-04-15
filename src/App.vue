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
	@apply antialiased mt-64 text-center;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: #2c3e50;
}
</style>
