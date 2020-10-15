<template>
	<div>
		<Header id="header" />
		<Statistics id="statistics" />
		<Features id="features" />
		<Pricing id="pricing" />
		<Theme id="theme" />
		<Footer id="footer" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

// TODO: Convert to use Vue3 composition API + useFetch
export default Vue.extend({
	async fetch() {
		const ip: any = await this.$http.$get(`${window.location.origin}/api/get_ip`);
		console.log(ip);
	},
});
</script>
