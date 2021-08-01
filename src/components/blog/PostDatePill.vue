<template>
	<div class="pill">
		<i-feather-calendar class="-mb-1 mr-3" />
		<span v-text="formattedDate" />
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { format } from 'date-fns';

const { date, pattern = 'PPP' } = defineProps<{
	date: Date;
	pattern?: string;
}>();

const formattedDate = computed(() => format(new Date(date), pattern));
</script>

<style lang="postcss" scoped>
.pill {
	@apply px-4 py-2 \
		bg-primary-500 bg-opacity-15 \
		rounded-lg \
		text-sm text-primary-800;
}
</style>
