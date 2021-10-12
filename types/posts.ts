export interface RawPost {
	banner_alt: string;
	banner_show?: boolean;
	banner: string;
	date: Date;
	description_show?: boolean;
	description: string;
	title_prefix?: string;
	title: string;
}

export interface Post {
	banner: {
		alt?: string;
		show?: boolean;
		url: string;
	};
	date: {
		raw: Date | string;
		readable?: string;
	};
	description: {
		show?: boolean;
		raw?: string;
	};
	title: {
		prefix?: string;
		raw: string;
	};
	url?: string;
	slug: string;
}

export type Posts = Array<Post>;

export interface Frontmatter {
	banner_alt?: string;
	banner_show?: boolean;
	banner?: Array<string> | string;
	date: Date;
	description_show?: boolean;
	description: string;
	// meta?: Array<HeadAttrs>;
	title_prefix?: string;
	title: string;
}
