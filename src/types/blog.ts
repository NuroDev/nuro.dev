import { HeadAttrs } from '@vueuse/head';

export interface IPost {
	banner: {
		alt?: string;
		show?: boolean;
		url: string;
	};
	date: {
		raw: Date;
		readable: string;
	};
	description: {
		show?: boolean;
		raw?: string;
	};
	title: {
		prefix?: string;
		raw: string;
	};
	url: string;
}

export interface IFrontmatter {
	banner_alt?: string;
	banner_show?: boolean;
	banner?: Array<string> | string;
	date: Date;
	description_show?: boolean;
	description: string;
	meta?: Array<HeadAttrs>;
	title_prefix?: string;
	title: string;
}
