import { format } from "date-fns";
import { useRouter } from "vue-router";

import type { IFrontmatter, IPost } from "~/types";

export function usePosts() {
	const router = useRouter();

	const routes = router.getRoutes();

	const filteredRoutes = routes.filter(({ meta, path }) => {
		if (!path.startsWith('//blog//') || !meta.frontmatter) return false;

		return true;
	});
	console.log(filteredRoutes);

	const posts = filteredRoutes.map(({ meta, path }) => {
		const {
			banner_show = true,
			description_show = false,
			...frontmatter
		} = meta.frontmatter as IFrontmatter;
		
		const date = new Date(frontmatter.date);

		return {
			banner: {
				alt: frontmatter.banner_alt,
				show: banner_show,
				url: frontmatter.banner,
			},
			date: {
				raw: date,
				readable: format(date, 'PPP'),
			},
			description: {
				show: description_show,
				raw: frontmatter.description,
			},
			title: {
				prefix: frontmatter.title_prefix,
				raw: frontmatter.title,
			},
			url: path.replaceAll('//', '/'),
		} as IPost;
	});

	const sortedPosts = posts.sort((a, b) => +new Date(b.date.raw) - +new Date(a.date.raw));

	return {
		latestPost: posts.shift(),
		posts: sortedPosts,
	}
}
