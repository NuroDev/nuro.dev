<template>
	<template v-if="!data.spotify">
		<LoadingWidget type="music" />
	</template>
	<template v-else>
		<span class="w-full h-0.25 mt-3 mb-4 rounded-md bg-gray-200 dark:bg-gray-600" />
		<div class="container">
			<div class="artworkContainer">
				<img
					class="artwork"
					:src="data.spotify.album_art_url"
					:alt="`${data.spotify.song} - ${data.spotify.artist}`"
				/>
			</div>

			<div class="song">
				<h1 class="title" v-text="data.spotify.song" />
				<div class="artist">
					<p
						v-if="data.spotify.album === data.spotify.artist"
						v-text="data.spotify.album"
					/>
					<p class="tracking-wide" v-text="data.spotify.artist" />
				</div>
			</div>
		</div>
	</template>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

import type { PropType, ComputedRef } from 'vue';

import type { DiscordData } from '../../types/lanyard';

const { data } = defineProps({
	data: {
		required: true,
		type: Object as PropType<ComputedRef<DiscordData>>,
	},
});
</script>

<style lang="postcss" scoped>
.container {
	@apply max-w-sm w-full mx-auto flex space-x-4;
}
.artworkContainer {
	@apply max-w-12 max-h-12 my-auto rounded pointer-events-none select-none ring-4 ring-gray-100 dark:ring-gray-500;

	.artwork {
		@apply w-full rounded;
	}
}
.song {
	@apply flex-1 space-y-4 my-auto;

	.title {
		@apply text-xl font-extrabold tracking-wide overflow-ellipsis text-gray-900 dark:text-white;
	}
	.artist {
		@apply mt-1 text-xs text-gray-500 dark:text-gray-400;
	}
}
</style>
