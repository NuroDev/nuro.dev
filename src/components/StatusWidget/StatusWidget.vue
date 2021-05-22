<template>
	<transition
		enter-active-class="transitionActive"
		enter-from-class="opacity-0"
		enter-to-class="opacity-100"
		leave-active-class="transitionLeave"
		leave-from-class="opacity-100"
		leave-to-class="opacity-0"
	>
		<div class="container shadow-lg ring-1 ring-black ring-opacity-5">
			<div class="w-0 flex-1 p-4">
				<div class="flex flex-col justify-center items-start">
					<ErrorWidget v-if="error" />
					<LoadingWidget v-else-if="!data" />
					<template v-else>
						<ActivityWidget v-if="data" :data="data" />
						<SpotifyWidget v-if="data.spotify" :data="data" />
					</template>
				</div>
			</div>
		</div>
	</transition>
</template>

<script lang="ts" setup>
import useSWRV from 'swrv';

import type { DiscordData, LanyardResponse } from '../../types/lanyard';

const DISCORD_ID_ENV = import.meta.env.DEV ? 'VITE_DISCORD_ID' : 'DISCORD_ID';
const DISCORD_ID: string = import.meta.env[DISCORD_ID_ENV] as string;

// TODO: Convert to lambda/serverless function
const { data, error } = useSWRV<DiscordData>(
	`https://api.lanyard.rest/v1/users/${DISCORD_ID}`,
	async (req: RequestInfo): Promise<DiscordData> => {
		const response = await fetch(req);
		const body: LanyardResponse = await response.json();

		if ('error' in body) throw body.error;

		return body.data;
	},
);
</script>

<style lang="postcss" scoped>
.transitionActive {
	@apply transform transition duration-300 delay-100 ease-in-out;
}
.transitionLeave {
	@apply transition duration-300 ease-in-out;
}
.container {
	@apply max-w-xs w-full flex \
		rounded-lg pointer-events-auto \
		bg-white dark:bg-gray-700;
}
</style>
