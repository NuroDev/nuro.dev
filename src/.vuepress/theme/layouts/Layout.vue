<template>
	<div class="flex flex-col h-full">
		<Navbar />

		<main class="container max-w-3xl mx-auto mt-16 flex flex-wrap items-center justify-around">

		</main>
	</div>
</template>

<script>
import AOS from 'aos';

import Navbar from '@theme/components/Navbar.vue';

// TODO: Move to theme.styl
import 'aos/dist/aos.css';

export default {
	components: {
		Navbar,
	},
	mounted() {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out-sin',
			once: true,
		});
	}
}
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>
