export interface TimelineEvent {
	date: Date;
	title: string;
	description?: string;
	icon: string;
	link?: {
		text: string;
		url: string;
	};
}

export type Timeline = {
	[year in number]: Array<TimelineEvent>;
};
