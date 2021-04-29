<template>
	<div class="statusWidget">
		<code v-if="error" v-text="error" />
		<code v-if="data" v-text="data" />
	</div>
</template>

<script lang="ts" setup>
import useSWRV from 'swrv';

const fetcher = (request: RequestInfo) =>
	fetch(request, {
		method: 'GET',
		headers: {
			accept: 'application/json',
		},
	})
		.then((response: Response) => response && response.json())
		.catch((err: Error) => console.error(err));

const DISCORD_ID: string = import.meta.env[
	import.meta.env.DEV ? 'VITE_DISCORD_ID' : 'DISCORD_ID'
] as string;

const { data, error } = useSWRV(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`, fetcher);
</script>

<style lang="postcss" scoped>
.statusWidget {
	@apply whitespace-pre break-all rounded-lg \
		bg-gray-100 dark:bg-gray-700;
}
</style>
