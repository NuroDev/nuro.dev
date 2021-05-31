<template>
	<slot />
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { defineProps } from 'vue';

const { frontmatter } = defineProps<{
	frontmatter: any;
}>();

useHead({
	title: `nuro ─ ${frontmatter.title}`,
});
</script>
