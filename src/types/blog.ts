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
	banner:
		| string
		| {
				alt?: string;
				show?: boolean;
				url: string | null;
		  };
	date: Date | null;
	description:
		| string
		| {
				show?: boolean;
				text: string | null;
		  };
	meta?: Array<HeadAttrs>;
	title:
		| string
		| {
				prefix?: string;
				text: string | null;
		  };
}
