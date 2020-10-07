<template>
	<div data-aos="fade-up" :data-aos-delay="delay" data-aos-easing="ease-in-out-back">
		<a :href="url">
			<article
				class="flex flex-row flex-no-wrap max-w-md mx-8 md:mx-4 mb-8 md:mb-12 px-8 overflow-hidden rounded-lg cursor-pointer"
			>
				<slot />

				<div class="p-4 px-8">
					<h1
						class="text-xl md:text-2xl block font-bold uppercase tracking-widest"
						v-text="title"
					/>
				</div>
			</article>
		</a>
	</div>
</template>

<script>
export default {
	props: {
		delay: {
			type: Number,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
};
</script>
