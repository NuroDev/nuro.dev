export interface RawFrontMatter {
	banner_alt?: string;
	banner_show?: boolean;
	banner?: string;
	date: Date;
	description_show?: boolean;
	description?: string;
	title_prefix?: string;
	title: string;
}

export interface FrontMatter {
	banner?: {
		alt?: string;
		show?: boolean;
		url: string;
	};
	date: {
		value: Date;
		readable: string;
	};
	description?: {
		show?: boolean;
		value?: string;
	};
	slug: string;
	title: {
		prefix?: string;
		value: string;
	};
	url: string;
}

export type FrontMatters = Array<FrontMatter>;

export interface Post {
	code: string;
	frontmatter: FrontMatter;
}

export type Posts = Array<Post>;
