<template>
	<CommanderButton />
	<CommanderModal />
</template>

<script lang="ts" setup>
import { onKeyDown } from '@vueuse/core';

import { useCommanderStore } from '~/store';

const commander = useCommanderStore();

onKeyDown('/', () => commander.toggle());
</script>
