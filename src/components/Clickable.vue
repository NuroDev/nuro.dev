<template>
	<div @click="playSound">
		<slot />
	</div>
</template>

<script lang="ts" setup>
import { useSound } from '@vueuse/sound';
import { defineProps } from 'vue';

import soundClick from '../assets/click.ogg';

const { volume } = defineProps({
	volume: {
		default: 0.25,
		required: false,
		type: Number,
	},
});

const sound = useSound(soundClick, {
	volume,
});
const playSound = () => sound.play();
</script>
