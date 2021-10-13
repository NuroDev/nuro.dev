export enum DiscordStatus {
	/**
	 * DND / Do not disturb
	 */
	DND = 'dnd',
	/**
	 * Idle / Away
	 */
	IDLE = 'idle',
	/**
	 * Offline
	 */
	OFFLINE = 'offline',
	/**
	 * Online
	 */
	ONLINE = 'online',
}

export const READABLE_DISCORD_STATUS: {
	[S in DiscordStatus]: string;
} = {
	[DiscordStatus.DND]: 'Do Not Disturb',
	[DiscordStatus.IDLE]: 'Away',
	[DiscordStatus.OFFLINE]: 'Offline',
	[DiscordStatus.ONLINE]: 'Online',
};

export enum LanyardAvatarType {
	USER = 'user',
	MUSIC = 'music',
}
