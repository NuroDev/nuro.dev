<template>
	<div @click="play">
		<slot />
	</div>
</template>

<script lang="ts" setup>
import { useSound } from '@vueuse/sound';

import soundClick from '../assets/click.ogg';

const { play } = useSound(soundClick, {
	volume: 0.25,
});
</script>
