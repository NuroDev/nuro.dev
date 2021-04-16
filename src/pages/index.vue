<template>
	<ThemeButton />
	<div class="content">
		<img alt="Vue logo" src="../assets/logo.png" class="mx-auto" />
		<div class="my-8">
			<Switch
				@click="toggle"
				:class="enabled ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'"
				class="switch"
			>
				<span class="sr-only">Use setting</span>
				<span
					aria-hidden="true"
					:class="enabled ? 'translate-x-9' : 'translate-x-0'"
					class="pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white dark:bg-gray-800 shadow-lg transform ring-0 transition ease-in-out duration-200"
				/>
			</Switch>
		</div>
		<HelloWorld v-if="enabled" msg="Hello Vue 3 + TypeScript + Vite" />
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Switch } from '@headlessui/vue';
import { useStorage, useToggle } from '@vueuse/core';

import type { Ref } from 'vue';

const enabled: Ref<boolean> = useStorage('show-hello-world', true);
const toggle = useToggle(enabled);
</script>

<style lang="postcss" scoped>
.content {
	@apply text-center;
}

.switch {
	@apply relative inline-flex flex-shrink-0 h-[38px] w-[74px] rounded-full cursor-pointer \
		border-2 border-transparent \
		transition-colors ease-in-out duration-300 \
		focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75;
}
</style>
