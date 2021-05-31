<template>
	<div @click="playSound">
		<slot />
	</div>
</template>

<script lang="ts" setup>
import { useSound } from '@vueuse/sound';
import { defineProps } from 'vue';

import soundClick from '../assets/click.ogg';

const { volume = 0.25 } = defineProps<{
	volume?: number;
}>();

const sound = useSound(soundClick, {
	volume,
});
const playSound = () => sound.play();
</script>
