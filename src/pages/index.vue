<template>
	<img alt="Vue logo" src="../assets/logo.png" class="mx-auto" />
	<div class="my-8">
		<h1 class="mb-4">Toggle Hello World</h1>
		<Switch
			v-model="showHelloWorld"
			:class="showHelloWorld ? 'bg-green-500' : 'bg-gray-200'"
			class="relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
		>
			<span class="sr-only">Use setting</span>
			<span
				aria-hidden="true"
				:class="showHelloWorld ? 'translate-x-9' : 'translate-x-0'"
				class="pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
			/>
		</Switch>
	</div>
	<HelloWorld v-if="showHelloWorld" msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Switch } from '@headlessui/vue';

import type { Ref } from 'vue';

const showHelloWorld: Ref<null | undefined> = ref(null);
</script>
