export interface PostFrontmatter {
	banner?: {
		alt: string;
		url: string;
	};
	date: Date;
	description: string;
	layout: `~/layouts/${string}.layout.astro`;
	title:
		| string
		| {
				prefix: string;
				text: string;
		  };
}
