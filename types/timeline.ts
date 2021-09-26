export interface TimelineEvent {
	date: Date | string;
	title: string;
	description?: string;
	icon: string;
	link?: {
		text: string;
		url: string;
	};
}

export type Timeline = Array<TimelineEvent>;
