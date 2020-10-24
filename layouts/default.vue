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
	@apply bg-white bg-hero-topography;
}

.dark body {
	@apply bg-gray-900 bg-hero-topography-dark text-white;
}
</style>
