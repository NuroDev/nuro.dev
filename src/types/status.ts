export enum StatusColor {
	ONLINE = 'green',
	AWAY = 'orange',
	DND = 'red',
	OFFLINE = 'gray',
}

export interface IStatus {
	color: StatusColor;
	title: string;
	text: string;
}

export interface IActivity {
	title: string | undefined;
	description: string | undefined;
	url: string;
}
