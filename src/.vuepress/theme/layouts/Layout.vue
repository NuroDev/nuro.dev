<template>
	<div class="flex flex-col h-full">
		<Navbar />

		<main class="container max-w-3xl mx-auto mt-16 flex flex-wrap items-center justify-around">

		</main>
	</div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue';

export default {
	components: {
		Navbar,
	},
}
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>
