import type { LanyardData } from 'react-use-lanyard';

export type DiscordStatus = LanyardData['discord_status'];

export type DiscordStatusColor = 'red' | 'yellow' | 'gray' | 'green';

export const READABLE_DISCORD_STATUS: Record<
	DiscordStatus,
	{
		label: string;
		color: DiscordStatusColor;
	}
> = {
	dnd: {
		label: 'Do Not Disturb',
		color: 'red',
	},
	idle: {
		label: 'Away',
		color: 'yellow',
	},
	offline: {
		label: 'Offline',
		color: 'gray',
	},
	online: {
		label: 'Online',
		color: 'green',
	},
};
