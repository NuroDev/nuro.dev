<template>
	<v-app>
		<AppToolbar />

		<v-content>
			<router-view />
		</v-content>
	</v-app>
</template>

<script>
import AppToolbar from './components/AppToolbar.vue';

export default {
	name: 'App',
	components: {
		AppToolbar,
	},
};
</script>

<style>
::-webkit-scrollbar {
	display: none;
}
html,
body,
.theme--light.application {
	background-color: #fafcff !important;
	margin: 0;
	font-family: 'Work Sans', Arial, Helvetica, sans-serif !important;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-transition: all 0.5s !important;
	transition: all 0.5s !important;
}
</style>
