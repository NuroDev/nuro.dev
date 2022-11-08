import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
	name: 'Post',
	description: 'A single blog post',
	filePathPattern: `**/*.md`,
	fields: {
		banner: {
			description: 'A url to the banner image',
			required: true,
			type: 'string',
		},
		banner_alt: {
			description: 'The alt text for the banner image',
			required: true,
			type: 'string',
		},
		date: {
			description: 'The date the post was published',
			required: true,
			type: 'date',
		},
		description: {
			description: 'A short description of the post',
			required: true,
			type: 'string',
		},
		title: {
			description: 'The title of the post',
			required: true,
			type: 'string',
		},
		title_prefix: {
			description: 'The prefix before the title of the post',
			required: false,
			type: 'string',
		},
	},
	computedFields: {
		url: {
			description: 'The absolute URL of the post',
			resolve: (post): string => `/blog/${post._raw.flattenedPath}`,
			type: 'string',
		},
	},
}));

export default makeSource({
	contentDirPath: 'src/data/',
	documentTypes: [Post],
});
