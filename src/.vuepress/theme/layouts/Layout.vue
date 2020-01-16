<template>
	<div class="flex flex-col h-screen">
		<Navbar />

		<main
			class="container h-screen max-w-full mx-auto flex flex-wrap items-center justify-around"
		>
			<h1 class="title">
				Hi! 👋🏻
				<br />
				I'm Ben,
				<br />
				a <span>developer</span>
				<br />
				based in the UK
			</h1>
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
	},
};
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>
