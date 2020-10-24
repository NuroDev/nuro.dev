<template>
	<div>
		<Header id="header" />
		<Features id="features" />
		<Statistics id="statistics" />
		<Team id="team" />
		<Pricing id="pricing" />
		<Theme id="theme" />
		<Footer id="footer" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	async asyncData({ $http }) {
		try {
			const response: any = await $http.get(`/api/get_ip`);
			const ip: any = await response.json();
			console.log(ip);
		} catch (error) {
			console.error(`Fetch failed '/api/get_ip': ${error}`);
		}
	},
});
</script>
