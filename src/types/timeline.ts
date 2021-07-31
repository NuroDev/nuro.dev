export interface TimelineEvent {
	title: string;
	description: string;
	date: Date;
	icon: TimelineIcon;
	action?: TimelineAction;
}

export interface TimelineAction {
	text: string;
	url: URL;
}

export interface TimelineIcon {
	name: string;
	color?: string;
}

export interface FullTimeline {
	[year: string]: Array<TimelineEvent>;
}

export type Timeline = Array<TimelineEvent>;
