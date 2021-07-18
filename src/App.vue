<template>
	<ThemeButton />
	<router-view />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useDark } from '@vueuse/core';
import { useHead } from '@vueuse/head';
import defaultColors from 'windicss/colors';
import splitbee from '@splitbee/web';

import { colors } from '~/utils';

const isDark = useDark();

useHead({
	title: computed(() => (isDark.value ? 'Dark' : 'light')),
	meta: [
		{
			name: 'theme-color',
			content: computed(() => (isDark.value ? colors.gray[900] : defaultColors.gray[50])),
		},
	],
});

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
