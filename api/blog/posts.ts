import { join } from 'path';
import { format } from 'date-fns';
import { readdirSync, readFileSync } from 'fs';
import { VercelRequest, VercelResponse } from '@vercel/node';
import Frontmatter from 'front-matter';

import { IFrontmatter, IPost } from '../../src/types';

const BLOG_CONTENT_PATH: string = join(__dirname, '../../src/content/blog/');

/**
 * Read a post from file & generate an `IPost` structure from it
 *
 * @param year - Year of the post
 * @param post - Name of the post file to read
 */
function GetPostFromFile(year: string, post: string): IPost {
	const name = post.split('.')[0];
	const {
		banner,
		banner_show,
		banner_alt,
		date,
		description,
		description_show,
		title_prefix,
		title,
	} = Frontmatter(
		readFileSync(join(BLOG_CONTENT_PATH, year, post), {
			encoding: 'utf-8',
		}),
	).attributes as IFrontmatter;

	return {
		banner: {
			alt: banner_alt,
			show: banner_show || true,
			url: banner,
		},
		date: {
			raw: new Date(date),
			readable: format(new Date(date), 'PPP'),
		},
		description: {
			show: description_show || false,
			raw: description,
		},
		name,
		title: {
			prefix: title_prefix,
			raw: title,
		},
		url: `/blog/${year}/${name}`,
	};
}

export default async function(_req: VercelRequest, res: VercelResponse) {
	try {
		const years = readdirSync(BLOG_CONTENT_PATH);

		const posts = years
			.map((year) =>
				readdirSync(join(BLOG_CONTENT_PATH, year)).map((post) =>
					GetPostFromFile(year, post),
				),
			)
			.flat()
			.sort((a, b) => b.date.raw - a.date.raw);

		res.status(200).send(posts);
	} catch (error) {
		res.status(500).send(error);
	}
}
