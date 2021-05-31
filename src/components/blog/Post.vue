<template>
	<slot />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { frontmatter } = defineProps<{
	frontmatter: any;
}>();
</script>
