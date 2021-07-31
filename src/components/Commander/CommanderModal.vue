<template>
	<TransitionRoot appear :show="commander.isOpen" as="template">
		<Dialog as="div" static :open="commander.isOpen" @close="commander.close()">
			<div class="content">
				<div class="container">
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0"
						enter-to="opacity-100"
						leave="duration-300 ease-in"
						leave-from="opacity-100"
						leave-to="opacity-0"
					>
						<DialogOverlay class="overlay" />
					</TransitionChild>

					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-300 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<div class="modal">
							<div class="modalContainer">
								<input
									name="commander"
									placeholder="Type a command or search"
									type="text"
								/>
								<div class="shortcut">
									<kbd>/</kbd>
								</div>
							</div>
						</div>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script lang="ts" setup>
import {
	TransitionRoot,
	TransitionChild,
	Dialog,
	DialogOverlay,
	DialogTitle,
} from '@headlessui/vue';

import { useCommanderStore } from '~/store';

const commander = useCommanderStore();
</script>

<style lang="postcss" scoped>
.content {
	@apply fixed inset-0 z-10 overflow-y-auto;

	.container {
		@apply min-h-screen flex items-center justify-center \
			px-4 \
			text-center;

		.modal {
			@apply inline-block w-full max-w-md overflow-hidden \
				p-4 my-8 \
				text-left align-middle \
				transition-all transform 
				bg-white dark:bg-gray-800 \
				shadow-xl rounded-2xl;

			.modalContainer {
				@apply relative \
					mt-1 \
					rounded-md shadow-sm;

				input {
					@apply block w-full \
						bg-white dark:bg-gray-800 \
						border-none \
						sm:text-sm \
						rounded-md \
						focus:outline-none focus:border-none;

					&::placeholder {
						@apply text-white dark:text-gray-400;
					}
				}

				.shortcut {
					@apply absolute inset-y-0 right-0 flex \
						py-1.25 pr-1.5;

					kbd {
						@apply inline-flex items-center \
							px-2 \
							text-sm text-gray-400 font-sans font-medium \
							rounded-md select-none \
							border border-gray-200 dark:border-gray-600;
					}
				}
			}
		}

		.overlay {
			@apply fixed inset-0 \
				bg-black bg-opacity-50;
		}
	}
}
</style>
