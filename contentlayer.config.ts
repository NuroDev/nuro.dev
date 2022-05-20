import RehypeAutolinkHeadings from 'rehype-autolink-headings';
// import RemarkCodeTitles from 'remark-code-titles';
import RemarkEmoji from 'remark-emoji';
import RemarkPrism from 'remark-prism';
import RemarkSlug from 'remark-slug';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `posts/**/*.md`,
	contentType: 'mdx',
	fields: {
		banner_alt: {
			type: 'string',
			description: 'Alt tag for a image banner',
			required: false,
		},
		banner: {
			type: 'string',
			description: 'URL to a banner image for the post',
			required: false,
		},
		date: {
			type: 'date',
			description: 'The date of the post',
			required: true,
		},
		description: {
			type: 'string',
			description: 'Brief summary of what the post is about',
			required: true,
		},
		title_prefix: {
			type: 'string',
			description: 'Prefix title to show above the main post title',
			required: false,
		},
		title: {
			type: 'string',
			description: 'The title of the post',
			required: true,
		},
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: ({ _raw }) => `/blog/${_raw.sourceFileName.split('.').at(0)}`,
		},
	},
}));

export default makeSource({
	contentDirPath: 'content',
	documentTypes: [Post],
	mdx: {
		rehypePlugins: [RehypeAutolinkHeadings],
		remarkPlugins: [
			// RemarkCodeTitles,
			RemarkEmoji,
			RemarkPrism,
			RemarkSlug,
		],
	},
});
