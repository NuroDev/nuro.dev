<template>
	<v-toolbar app flat fixed class="transparent">
		<v-spacer />
		<v-btn large flat round to="/">
			<v-icon left v-html="$vuetify.icons.home" />
			<span>Home</span>
		</v-btn>
		<v-btn large flat round to="/portfolio">
			<v-icon left v-html="$vuetify.icons.portfolio" />
			<span>Portfolio</span>
		</v-btn>
		<v-spacer />
	</v-toolbar>
</template>

