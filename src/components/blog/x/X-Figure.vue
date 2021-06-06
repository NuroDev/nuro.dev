<template>
	<figure>
		<img
			class="w-full rounded-3xl object-cover select-none hover:shadow-xl"
			:src="src"
			:alt="alt ?? caption"
			:draggable="false"
		/>
		<figcaption v-if="caption">
			{{ caption }}
		</figcaption>
	</figure>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue-demi';

defineProps<{
	alt?: string;
	caption?: string;
	src: string;
}>();
</script>
