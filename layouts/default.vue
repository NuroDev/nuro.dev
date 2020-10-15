<template>
	<Nuxt />
</template>

<style>
html {
	@apply antialiased box-border text-base;
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		'Helvetica Neue', Arial, sans-serif;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

*,
*::before,
*::after {
	@apply box-border m-0;
}

.dark body {
	@apply bg-gray-800 text-white;
}

.light .topography {
	background-image: url('/light-topography.svg');
}

.dark .topography {
	background-image: url('/dark-topography.svg');
}
</style>
