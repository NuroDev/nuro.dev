export interface ProjectSrc {
	type: 'orgs' | 'users';
	slug: string;
	ignore: Array<string>;
}

export interface Social {
	twitter?: string;
	github?: string;
}

export interface Profile {
	name: string;
	birthday: string;
	role: string;
	bio: string;
	alias: string;
	projectsSrcs: Array<ProjectSrc>;
	pagesIgnore: Array<string>;
	social: Social;
	domain: string;
}
