<template>
	<div class="w-full max-w-sm mx-auto">
		<div class="animatedContainer animate-pulse">
			<div :class="['avatar', type === 'music' ? 'rounded' : 'rounded-full']" />
			<div class="linesContainer">
				<div class="line w-3/4" />
				<div class="line" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

import type { PropType } from 'vue';

enum AvatarType {
	USER = 'user',
	MUSIC = 'music',
}

defineProps({
	type: {
		default: AvatarType.USER,
		required: false,
		type: String as PropType<AvatarType>,
	},
});
</script>

<style lang="postcss" scoped>
.animatedContainer {
	@apply flex space-x-4;
}
.avatar {
	@apply w-12 h-12 my-auto \
		bg-gray-100 dark:bg-gray-600;
}
.linesContainer {
	@apply flex-1 space-y-4 py-1;
}
.line {
	@apply h-4 bg-gray-100 dark:bg-gray-600 rounded;
}
</style>
