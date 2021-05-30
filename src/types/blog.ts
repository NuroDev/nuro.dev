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
