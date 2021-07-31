<template>
	<div class="content">
		<h1>Hello World</h1>
	</div>

	<client-only>
		<transition
			enter-active-class="transition duration-1000 delay-250 ease-in-out"
			enter-from-class="transform opacity-0"
			enter-to-class="transform opacity-100"
			leave-active-class="transition duration-500 delay-250 ease-in-out"
			leave-from-class="transform opacity-100"
			leave-to-class="transform opacity-0"
		>
			<Background />
		</transition>
	</client-only>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useTimeline } from '~/hooks';

const { year } = defineProps<{
	year: string;
}>();

onMounted(async () => {
	const events = await useTimeline(year);
	console.log(events);
});
</script>

<style lang="postcss" scoped>
.content {
	@apply h-screen flex flex-col justify-center items-center text-center;
}
</style>
