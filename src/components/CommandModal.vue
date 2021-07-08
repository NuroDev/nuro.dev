<template>
	<div class="fixed inset-0 m-8">
		<Clickable>
			<button
				@click="openModal"
				class="commandModalButton"
				aria-label="Theme Toggle"
				alt="Command Modal"
			>
				<i-feather-command />
			</button>
		</Clickable>
	</div>

	<div
		v-if="isOpen"
		class="fixed inset-0 bg-black bg-opacity-25 transition ease-in-out duration-300"
		aria-hidden="true"
	/>

	<TransitionRoot appear :show="isOpen" as="template">
		<Dialog as="div" static :open="isOpen" @close="closeModal">
			<div class="fixed inset-0 z-10 overflow-y-auto">
				<div class="min-h-screen px-4 text-center">
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0"
						enter-to="opacity-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100"
						leave-to="opacity-0"
					>
						<DialogOverlay class="fixed inset-0" />
					</TransitionChild>

					<span class="inline-block h-screen align-middle" aria-hidden="true">
						&#8203;
					</span>

					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<div
							class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl"
						>
							<DialogTitle
								as="h3"
								class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
							>
								Payment successful
							</DialogTitle>
							<div class="my-4">
								<p class="text-sm text-gray-500 dark:text-gray-400">
									Your payment has been successfully submitted. We’ve sent your an
									email with all of the details of your order.
								</p>
							</div>

							<div class="mt-4">
								<button
									type="button"
									class="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 transition ease-in-out duration-300"
									@click="closeModal"
								>
									<i-feather-check class="w-5 h-5 mr-4" />
									<span>Got it, thanks!</span>
								</button>
							</div>
						</div>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
	TransitionRoot,
	TransitionChild,
	Dialog,
	DialogOverlay,
	DialogTitle,
} from '@headlessui/vue';

const isOpen = ref(false);
const closeModal = () => (isOpen.value = false);
const openModal = () => (isOpen.value = true);
</script>

<style lang="postcss" scoped>
.commandModalButton {
	@apply flex justify-center items-center w-12 h-12 p-2 rounded-lg \
		text-gray-300 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 \
		bg-gray-50 hover:bg-gray-100 hover:bg-opacity-50 dark:bg-gray-900 dark:hover:bg-gray-800 \
		transition ease-in-out duration-300 \
		focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-500;

	svg {
		@apply w-6 h-6;
	}
}
</style>
