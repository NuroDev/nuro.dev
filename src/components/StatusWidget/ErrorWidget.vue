<template>
	<div class="w-full max-w-sm mx-auto">
		<div class="animatedContainer">
			<div class="icon">
				<i-feather-x class="w-8 h-8" />
			</div>
			<div class="linesContainer">
				<div class="line w-3/4" />
				<div class="line" />
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.animatedContainer {
	@apply flex space-x-4;
}
.icon {
	@apply w-12 h-12 flex justify-center items-center my-auto rounded-full \
		text-red-500 \
		ring-2 ring-red-500;
}
.linesContainer {
	@apply flex-1 space-y-4 py-1;
}
.line {
	@apply h-4 ring-2 ring-red-500 rounded;
}
</style>
