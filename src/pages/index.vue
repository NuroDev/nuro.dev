<template>
	<div class="content">
		<transition
			enter-active-class="transition duration-1000 delay-500 ease-in-out"
			enter-from-class="transform opacity-0"
			enter-to-class="transform opacity-100"
			leave-active-class="transition duration-1000 delay-500 ease-in-out"
			leave-from-class="transform opacity-100"
			leave-to-class="transform opacity-0"
		>
			<div v-show="title">
				<h1 class="title">
					<span class="text">
						Hey <span class="wave">👋</span> I'm Ben,
						<br />
						a
						<a
							class="pill"
							href="https://twitter.com/nurodev"
							target="_blank"
							rel="noreferrer noopener"
						>
							developer
						</a>
					</span>
				</h1>
				<p class="description">
					I am a {{ age }} year old full-stack developer, games developer & enthusiast.
					<br />
					Working @ <BusinessPill url="https://attio.com">Attio</BusinessPill> to help
					build the next-generation CRM.
				</p>
			</div>
		</transition>
	</div>

	<client-only>
		<transition
			enter-active-class="transition duration-2000 ease-in-out"
			enter-from-class="transform opacity-0"
			enter-to-class="transform opacity-100"
			leave-active-class="transition duration-1000 ease-in-out"
			leave-from-class="transform opacity-100"
			leave-to-class="transform opacity-0"
		>
			<Background v-show="background" />
		</transition>
	</client-only>
</template>

<script lang="ts" setup>
import { differenceInYears } from 'date-fns';
import { onMounted, ref } from 'vue';
import { onKeyDown, useStorage } from '@vueuse/core';

const title = ref(false);
const background = ref(false);
const isAnimated = useStorage('animated-background', true);
onKeyDown('b', () => (background.value = !background.value));

onMounted(() => {
	title.value = true;
	setTimeout(() => {
		if (isAnimated) background.value = true;
	}, 1000);
});

const age = differenceInYears(new Date(), new Date('1997-08-09'));
</script>

<style lang="postcss" scoped>
.content {
	@apply h-screen flex flex-col justify-center items-center \
		text-center;

	.title {
		@apply text-gray-500 dark:text-white \
			text-5xl sm:text-6xl md:text-6xl lg:text-8xl \
			tracking-tight font-extrabold;

		.text {
			@apply block xl:inline \
				lg:mr-4;
		}

		.pill {
			@apply inline-flex \
				mt-8 lg:ml-2 px-3 lg:px-5 py-2 md:-pb-4 \
				bg-primary-500 bg-opacity-15 hover:bg-primary-800 hover:bg-opacity-15 \
				backdrop-filter backdrop-blur-sm saturate-200 \
				transition ease-in-out duration-300 \
				text-primary-200 hover:text-primary-400 \
				rounded-2xl;
		}
	}

	.description {
		@apply max-w-xs \
			mt-4 md:mt-8 mx-auto \
			text-base text-gray-300 sm:text-lg md:text-xl md:max-w-3xl;
	}
}

/* Credit to: https://jarv.is/notes/css-waving-hand-emoji/ */
.wave:hover {
	@apply inline-block \
		transition ease-in-out duration-300;
	animation: wave 2.25s ease-in-out infinite;
	transform-origin: 70% 70%;
}
@keyframes wave {
	0% {
		transform: rotate(0deg);
	}
	10% {
		transform: rotate(14deg);
	}
	20% {
		transform: rotate(-8deg);
	}
	30% {
		transform: rotate(14deg);
	}
	40% {
		transform: rotate(-4deg);
	}
	50% {
		transform: rotate(10deg);
	}
	60% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(0deg);
	}
}
</style>
