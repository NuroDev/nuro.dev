<template>
	<ThemeButton />
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
	@apply antialiased \
		bg-gray-50 text-gray-500 dark:text-gray-400 \
		transition ease-in-out duration-300;
	font-family: 'Inter', 'system-ui';
}
html.dark {
	@apply bg-gray-900;

	* {
		--tw-ring-offset-color: #0c0e10;
	}
}

@supports (font-variation-settings: normal) {
	html {
		font-family: 'Inter var', 'system-ui';
	}
}

#nprogress .bar {
	@apply h-1 bg-gray-800 dark:bg-white;
}

code[class*='language-'],
pre[class*='language-'] {
	text-shadow: none;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
	background: none;
}
</style>
