import { format } from 'date-fns';
import { useRouter } from 'vue-router';

import type { IFrontmatter, IPost } from '~/types';

/**
 * Fetch posts either from the beginning of time or from a select year if a year is provided.
 * Posts are fetched from the SSG routes.
 *
 * @param {string} [year] - The year to fetch posts from
 */
export function usePosts(year?: string) {
	const router = useRouter();

	const routes = router.getRoutes();

	const filteredRoutes = routes.filter(({ meta, path }) => {
		if (!path.startsWith('/blog/') || '/blog/:year'.includes(path) || !meta.frontmatter)
			return false;

		// If a year is provided, get the year from the route path
		// and make sure it matches the year parameter provided
		// (Always assumes that the 2nd element will be the year)
		if (year && year !== path.split('/').filter((el) => el)[1]) return false;

		return true;
	});

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
			url: path,
		} as IPost;
	});

	const sortedPosts = posts.sort((a, b) => +new Date(b.date.raw) - +new Date(a.date.raw));

	const latestPost = posts.shift();

	if (!latestPost && sortedPosts.length === 0) return null;

	return {
		latestPost,
		posts: sortedPosts,
	};
}
