import { HeadAttrs } from '@vueuse/head';

export interface IPost {
	author?: {
		imageUrl: string;
		name: string;
	};
	date: string;
	datetime: string;
	description?: string;
	url: string;
	imageUrl?: string;
	readingTime: string;
	title: string;
}

export interface IPosts {
	all: Array<IPost>;
	latest: IPost;
}

export interface IFrontmatter {
	banner_alt?: string;
	banner_show?: boolean;
	banner?: string;
	date: Date | null;
	description_show?: boolean;
	description: string;
	meta?: Array<HeadAttrs>;
	title_prefix?: string;
	title?: string;
}
