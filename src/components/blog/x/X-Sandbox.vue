<template>
	<iframe
		:src="src"
		:class="`frame h-[${height ?? 32}rem]`"
		allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
		sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
	></iframe>
</template>

<script lang="ts" setup>
defineProps<{
	src: string;
	height?: number;
}>();
</script>

<style lang="postcss" scoped>
.frame {
	@apply w-full border-none rounded overflow-hidden;
}
</style>
