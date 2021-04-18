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
@use "~inter-ui/default" with (
  $inter-font-display: swap,
  $inter-font-path: '~inter-ui/Inter (web)'
);
@use "~inter-ui/variable" with (
  $inter-font-display: swap,
  $inter-font-path: '~inter-ui/Inter (web)'
);
@include default.all;
@include variable.all;

html {
	@apply antialiased bg-gray-50 text-gray-500 dark:text-gray-400;
	font-family: 'Inter', 'system-ui';
}
html.dark {
	@apply bg-gray-900;
}

@supports (font-variation-settings: normal) {
	html {
		font-family: 'Inter var', 'system-ui';
	}
}
</style>
