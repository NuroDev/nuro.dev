<template>
	<v-app dark>
		<v-content>
			<v-layout fill-height>
				<v-flex xs12>
					<Snow
						:active="new Date().getMonth() === 11"
						color="#fff"
						:wind="1"
						speed="m"
					/>
					<nuxt />
				</v-flex>
			</v-layout>
		</v-content>
	</v-app>
</template>

<script>
import Snow from 'vue-niege';

export default {
	components: {
		Snow,
	},
	mounted: () => {
		if (new Date().getDate() === 7 && new Date().getMonth() === 9) {
			this.$confetti.start({
				shape: 'circle',
			});
		}
	},
};
</script>

<style>
::-webkit-scrollbar {
	display: none;
}

html,
body,
.application.theme--light,
.application.theme--dark {
	background: linear-gradient(180deg,#05a9f4 0%,#5e29de 100%) !important;
	margin: 0;
	font-family: 'Roboto', Arial, Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.container {
	padding: 0 !important;
}

.btn--large {
	font-size: 16px;
}

.iconLeft {
	margin-right: 16px;
}

.spacedLetters {
	letter-spacing: 0.2em !important;
}

.contentContainer {
	height: 100%;
	padding: 20px;
	font-family: 'Roboto', Arial, Helvetica, sans-serif;
	font-weight: 300;
	text-transform: uppercase;
	letter-spacing: 0.2em;
}
</style>
