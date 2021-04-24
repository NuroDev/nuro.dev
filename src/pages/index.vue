<template>
	<ThemeButton />
	<div class="content">
		<div class="my-8">
			<Clickable>
				<Switch
					@click="toggle"
					:class="enabled ? 'bg-primary-500' : 'bg-gray-200 dark:bg-gray-700'"
					class="switch"
				>
					<span class="sr-only">Toggle Counter</span>
					<span
						aria-hidden="true"
						:class="[
							'dot',
							enabled ? 'transform translate-x-9' : 'transform translate-x-0',
						]"
					/>
				</Switch>
			</Clickable>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { Switch } from '@headlessui/vue';
import { useStorage, useToggle } from '@vueuse/core';

const enabled = useStorage('show-hello-world', true);
const toggle = useToggle(enabled);
</script>

<style lang="postcss" scoped>
.content {
	@apply h-screen flex flex-col justify-center items-center text-center;
}

.switch {
	@apply relative inline-flex flex-shrink-0 h-[38px] w-[74px] rounded-full cursor-pointer \
		border-2 border-transparent \
		transition-colors ease-in-out duration-300 \
		focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75;

	.dot {
		@apply inline-block h-[34px] w-[34px] \
		bg-white dark:bg-gray-800 \
		pointer-events-none rounded-full shadow-lg ring-0 \
		transition ease-in-out duration-300;
	}
}
</style>
