<template>
	<ThemeButton />
	<div class="content">
		<div class="sm:mx-auto sm:w-full sm:max-w-md">
			<StatusWidget />
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.content {
	@apply min-h-screen flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 \
		text-sm text-gray-600 dark:text-gray-100;
}
</style>
