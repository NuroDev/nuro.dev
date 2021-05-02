<template>
	<transition
		enter-active-class="transform transition duration-300 delay-100 ease-in-out"
		enter-from-class="opacity-0"
		enter-to-class="opacity-100"
		leave-active-class="transition duration-300 ease-in-out"
		leave-from-class="opacity-100"
		leave-to-class="opacity-0"
	>
		<div
			class="max-w-xs w-full bg-white dark:bg-gray-700 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5"
		>
			<div class="w-0 flex-1 p-4">
				<div class="flex justify-center items-start">
					<div>
						<div
							v-if="spotify"
							class="rounded pointer-events-none select-none ring-4 ring-gray-100 dark:ring-gray-500"
						>
							<img
								class="w-full max-w-16 rounded"
								:src="spotify.album_art_url"
								:alt="`${spotify.song} - ${spotify.artist}`"
							/>
						</div>

						<div v-else class="flex-shrink-0 pt-0.5">
							<div class="w-12 rounded-full" />
						</div>

						<span
							:class="[
								'flex absolute h-3 w-3',
								spotify ? '-mt-14 ml-11' : 'mt-3 ml-4',
							]"
						>
							<span
								v-if="isOnline"
								:class="[
									'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
									`bg-${status.color}-400`,
								]"
							/>
							<span
								:class="[
									'relative inline-flex rounded-full h-3 w-3',
									`bg-${status.color}-500`,
								]"
							/>
						</span>
					</div>

					<div :class="['w-full ml-3 text-sm', spotify && 'mt-1']">
						<template v-if="error">
							<p class="font-extrabold text-gray-900 dark:text-white">
								Failed to fetch Discord status
							</p>
							<p
								class="mt-1 text-gray-500 dark:text-gray-400"
								v-text="error.message"
							/>
						</template>

						<template v-else-if="data">
							<template v-if="spotify">
								<p
									class="font-extrabold tracking-wide text-gray-900 dark:text-white"
									v-text="spotify.song"
								/>
								<div class="mt-1 text-gray-500 dark:text-gray-400">
									<p
										v-if="spotify.album === spotify.artist"
										v-text="spotify.album"
									/>
									<p class="tracking-wide" v-text="spotify.artist" />
								</div>
							</template>
							<template v-else>
								<p
									class="font-extrabold text-gray-900 dark:text-white"
									v-text="status.title"
								/>
								<p
									class="mt-1 text-gray-500 dark:text-gray-400"
									v-text="status.text"
								/>
							</template>
						</template>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script lang="ts" setup>
import useSWRV from 'swrv';
import { computed } from 'vue';

import type { Activity, DiscordData, LanyardResponse } from '../types/lanyard';

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

/**
 * The only status NOT marked as "online" is when "invisible" or actually offline
 * Used to toggle the ping animation effects on the indicator
 */
const isOnline = computed(() =>
	data.value?.discord_status === 'offline' || data.value?.discord_status === 'idle' || error.value
		? false
		: true,
);

/**
 * Generates render properites based on the current Discord
 * status returned by Lanyard
 */
const status = computed(() => {
	if (error.value)
		return {
			color: 'red',
			title: 'Lanyard fetch error',
			text: 'Looks like something went wrong trying to get my Discord status',
		};

	if (!data.value)
		return {
			color: 'red',
			title: 'Invalid Lanyard data',
			text: "Whoops! Looks like the data fetched wasn't valid",
		};

	switch (data.value?.discord_status) {
		case 'online':
			return {
				color: 'green',
				title: 'Online',
				text: "I'm online & doing stuff",
			};
		case 'idle':
			return {
				color: 'orange',
				title: 'Away',
				text: "BRB, I'm AFK right now",
			};
		case 'dnd':
			return {
				color: 'red',
				title: 'Do Not Disturb',
				text: "I'm busy doing stuff right now",
			};
		default:
		case 'offline':
			return {
				color: 'gray',
				title: 'Offline',
				text: "I'm not online right now",
			};
	}
});

const spotify = computed(() =>
	!data.value?.listening_to_spotify || !data.value.spotify ? null : data.value.spotify,
);
</script>
