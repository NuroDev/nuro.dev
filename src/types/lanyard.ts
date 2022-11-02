import type { LanyardData } from 'react-use-lanyard';

export type DiscordStatus = LanyardData['discord_status'];

export const READABLE_DISCORD_STATUS: {
	[S in DiscordStatus]: string;
} = {
	['dnd']: 'Do Not Disturb',
	['idle']: 'Away',
	['offline']: 'Offline',
	['online']: 'Online',
};

export const DISCORD_STATUS_COLOR: {
	[S in DiscordStatus]: string;
} = {
	['dnd']: 'red',
	['idle']: 'yellow',
	['offline']: 'gray',
	['online']: 'green',
};

export enum LanyardAvatarType {
	USER = 'user',
	MUSIC = 'music',
}
