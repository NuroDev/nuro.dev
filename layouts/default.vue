<template>
	<div>
		<Nuxt />
		<Background />
	</div>
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

body {
	@apply bg-fixed bg-center;
}

.light body {
	@apply bg-white;
	/* TODO: Find a better way to set this */
	background-image: url('/light-topography.svg');
}

.dark body {
	@apply bg-gray-900 text-white;
	/* TODO: Find a better way to set this */
	background-image: url('/dark-topography.svg');
}

canvas {
	@apply fixed inset-0;
}
</style>
