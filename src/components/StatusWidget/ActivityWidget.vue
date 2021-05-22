<template>
	<template v-if="!data">
		<LoadingWidget />
	</template>
	<template v-else>
		<div class="w-full max-w-sm mx-auto">
			<div class="flex space-x-4 my-auto">
				<div class="w-12 h-12 my-auto bg-gray-100 dark:bg-gray-600 rounded-full">
					<!-- <img
						v-if="activity"
						:src="activity.url"
						:alt="activity.title"
						class="
							pointer-events-none
							select-none
							ring-4 ring-gray-100
							dark:ring-gray-500
							rounded
						"
					/> -->
					<img
						src="../../assets/avatar.png"
						alt="Avatar"
						class="
							pointer-events-none
							select-none
							ring-4 ring-gray-100
							dark:ring-gray-500
							rounded-full
						"
					/>
				</div>

				<div class="flex-1">
					<h1
						class="text-xl font-extrabold tracking-wide overflow-ellipsis text-gray-900 dark:text-white"
					>
						Title
					</h1>
					<div class="mt-1 text-xs text-gray-500 dark:text-gray-400">
						<p class="tracking-wide">Description</p>
					</div>
				</div>

				<div class="flex justify-end my-auto" v-if="status">
					<span class="relative inline-flex rounded-md shadow-sm">
						<span class="flex absolute w-3 h-3 top-0 right-0 -mt-1.5 mr-2">
							<span
								:class="[
									'animate-ping absolute inline-flex w-full h-full rounded-full opacity-75',
									`bg-${status.color}-400`,
								]"
							/>
							<span
								:class="[
									'relative inline-flex rounded-full w-3 h-3',
									`bg-${status.color}-500`,
								]"
							/>
						</span>
					</span>
				</div>
			</div>
		</div>
	</template>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';

import { StatusColor } from '../../types/status';

import type { ComputedRef, PropType, Ref } from 'vue';

import type { Activity, DiscordData, IActivity, IStatus } from '../../types';

const { data } = defineProps({
	data: {
		required: true,
		type: Object as PropType<Ref<DiscordData>>,
	},
});

const isOnline: ComputedRef<boolean> = computed(() =>
	data.value?.discord_status === 'offline' || data.value?.discord_status === 'idle'
		? false
		: true,
);

const status: ComputedRef<IStatus | null> = computed((): IStatus | null => {
	if (!data || !data.value)
		return null

	switch (data.value.discord_status) {
		case 'online':
			return {
				color: StatusColor.ONLINE,
				title: 'Online',
				text: "I'm online & doing stuff",
			};
		case 'idle':
			return {
				color: StatusColor.AWAY,
				title: 'Away',
				text: "BRB, I'm AFK right now",
			};
		case 'dnd':
			return {
				color: StatusColor.DND,
				title: 'Do Not Disturb',
				text: "I'm busy doing stuff right now",
			};
		default:
		case 'offline':
			return {
				color: StatusColor.OFFLINE,
				title: 'Offline',
				text: "I'm not online right now",
			};
	}
});

const activity: ComputedRef<IActivity | null> = computed((): IActivity | null => {
	if (!data) return null;

	const { application_id, assets }: Activity = data.value.activities[data.value.activities.length - 1];

	if (!assets) return null;
	const { large_image, large_text, small_text } = assets;

	return {
		title: small_text,
		description: large_text,
		url: `https://cdn.discordapp.com/app-assets/${application_id}/${large_image}.png`,
	};
});
</script>
