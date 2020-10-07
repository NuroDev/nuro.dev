<template>
	<div class="flex flex-col h-screen">
		<Navbar />

		<main
			class="container h-screen max-w-full mx-auto flex flex-wrap items-center justify-around"
		>
			<h1
				class="title"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out-back"
			>
				Hi! 👋🏻
				<br />I'm Ben,
				<br />
				<vue-typed-js
					:strings="['gamer', 'nerd', 'developer']"
					cursorChar=" "
					:startDelay="800"
					class="title"
				>
					<h1>a <span class="typing"></span></h1>
				</vue-typed-js>
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
