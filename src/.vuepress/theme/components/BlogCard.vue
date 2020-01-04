<template>
	<!-- <article class="md:rounded-lg shadow-md hover:shadow-2xl defaultTransition p-8 md:p-16 mb-0 md:mb-12 -mt-1 md:-mt-0 bg-white">
		<div class="py-4">
			<span v-if="tag != undefined" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-gray-700 mr-2 mb-5 uppercase tracking-widest text-xs tag-notes" v-text="`#${tag}`" />
			<a :href="url" class="text-2xl md:text-4xl mb-4 block font-semibold leading-tight text-gray-800 hover:text-gray-700">
                Do less but focus
            </a>
			<p class="text-gray-500" v-text="date" />
			<p class="text-gray-700 text-base"></p>
			<a :href="url" class="mt-6 block text-gray-600 hover:text-gray-700 hover:underline">
				Read more
				<i class="pl-2 fas fa-arrow-right"></i>
			</a>
		</div>
	</article> -->
    <article class="flex-1 mx-auto leading-normal container">
      <h2>{{$page.frontmatter.title}}</h2>
      <label class="text-grey-dark">
        <span>{{$page.readingTime.text}}</span> •
        <span>{{formateDate($page.frontmatter.date)}}</span>
      </label>

      <Content/>
    </article>
</template>

<script>
export default {
	props: {
		date: {
            type: Date,
			// required: true,
		},
		description: {
			type: String,
			// required: true,
		},
		tag: {
			type: String,
			// required: true,
		},
		title: {
			type: String,
			// required: true,
		},
		url: {
			type: String,
			default: '/',
			// required: true,
		},
    },
    mounted () {
        console.log(this.$page);
    }
};
</script>

