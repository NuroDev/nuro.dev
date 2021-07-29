<template>
	<div class="content h-screen">
		<div class="error">
			<div class="content">
				<div class="icon">
					<i-feather-alert-triangle class="h-12 text-primary-500 w-auto" />
				</div>
				<div class="py-4">
					<div class="text-center">
						<h1 class="title">
							Whoops!
						</h1>
						<p class="subtitle">
							Looks like you took a wrong turn.<br />
							The page you're looking for couldn't be found.
						</p>
						<div class="actions">
							<Clickable>
								<button @click="back" class="button">
									<i-feather-arrow-left class="mr-2" />
									<span>Back</span>
								</button>
							</Clickable>
							<Clickable>
								<router-link to="/" class="button">
									<i-feather-home class="mr-2" />
									<span>Home</span>
								</router-link>
							</Clickable>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';

const { back } = useRouter();

useHead({
	title: `nuro ─ whoops!`,
});
</script>

<style lang="postcss" scoped>
.content {
	@apply relative \
		pt-24 sm:pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8;

	.error {
		@apply flex flex-grow min-h-full \
		pt-16 pb-12;

		.content {
			@apply flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8;

			.icon {
				@apply flex-shrink-0 flex justify-center;
			}

			.title {
				@apply mt-2 \
				text-4xl font-extrabold text-gray-500 dark:text-white tracking-tight sm:text-5xl;
			}

			.subtitle {
				@apply mt-8 \
				text-sm font-medium text-gray-300 dark:text-gray-400;
			}

			.actions {
				@apply mt-6 flex justify-center items-center space-x-4;

				.button {
					@apply flex justify-center items-center h-12 px-8 py-4 \
					rounded-lg \
					text-base font-bold text-primary-300 hover:text-primary-400 \
					bg-gray-50 hover:bg-gray-100 hover:bg-opacity-50 dark:bg-gray-900 dark:hover:bg-gray-800 \
					transition ease-in-out duration-300 \
					focus:outline-none focus:ring-4 focus:ring-primary-500;
				}
			}
		}
	}
}
</style>
