export interface OpenGraph {
	article?: OpenGraphArticle;
	audio?: Array<OpenGraphMedia>;
	defaultImageHeight?: number;
	defaultImageWidth?: number;
	description?: string;
	images?: Array<OpenGraphMedia>;
	locale?: string;
	profile?: OpenGraphProfile;
	siteName?: string;
	title?: string;
	type?: string;
	url?: string;
	video?: OpenGraphVideo;
	videos?: Array<OpenGraphMedia>;
}

interface OpenGraphArticle {
	authors?: Array<string>;
	expirationTime?: string;
	modifiedTime?: string;
	publishedTime?: string;
	section?: string;
	tags?: Array<string>;
}

interface OpenGraphMedia {
	alt?: string;
	height?: number | null;
	secureUrl?: string;
	type?: string;
	url: string;
	width?: number | null;
}

interface OpenGraphProfile {
	firstName?: string;
	gender?: string;
	lastName?: string;
	username?: string;
}

interface OpenGraphVideo {
	actors?: Array<OpenGraphVideoActors>;
	directors?: Array<string>;
	duration?: number;
	releaseDate?: string;
	series?: string;
	tags?: Array<string>;
	writers?: Array<string>;
}

interface OpenGraphVideoActors {
	profile: string;
	role?: string;
}

export interface Site {
	description: string;
	openGraph: OpenGraph;
	siteUrl: URL;
	themeColor: `#${string}`;
	title: string;
	twitter: Twitter;
}

type TwitterCardType = 'app' | 'summary_large_image';

export interface Twitter {
	cardType: TwitterCardType;
	handle: `@${string}`;
	site: `@${string}`;
}
