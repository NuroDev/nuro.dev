export type LanyardResponse = {
	success: boolean;
} & LanyardResponseErrorOrData;

type LanyardResponseErrorOrData =
	| {
			data: DiscordData;
	  }
	| {
			error: {
				message: string;
				code: string;
			};
	  };

export interface DiscordData {
	active_on_discord_desktop: boolean;
	active_on_discord_mobile: boolean;
	activities: Array<Activity>;
	discord_status: 'online' | 'idle' | 'dnd' | 'offline';
	discord_user: DiscordUser;
	listening_to_spotify: boolean;
	spotify: Spotify | null;
}

export interface Activity {
	application_id?: number;
	assets?: Assets;
	created_at: number;
	details?: string;
	emoji?: Emoji;
	flags?: number;
	id: string;
	name: string;
	party?: Party;
	session_id?: string;
	state: string;
	sync_id?: string;
	timestamps?: Timestamps;
	type: number;
}

export interface Assets {
	large_image: string;
	large_text: string;
	small_image: string;
	small_text: string;
}

export interface Emoji {
	animated: boolean;
	id: number;
	name: string;
}

export interface Party {
	id: string;
}

export interface Timestamps {
	start: number;
	end: number;
}

export interface DiscordUser {
	avatar: string;
	discriminator: string;
	id: number;
	public_flags: number;
	username: string;
}

export interface Spotify {
	album_art_url: string;
	album: string;
	artist: string;
	song: string;
	timestamps: Timestamps;
}
