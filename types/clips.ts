export interface Clip {
	game?: string;
	id: string;
	thumbnail_url: string;
	title: string;
	url: string;
}

export interface StreamableGetResponse {
	audio_channels: number;
	embed_code: string;
	files: {
		mp4: StreamableFile;
		'mp4-mobile': StreamableFile;
		original: StreamableFile;
	};
	message: unknown;
	percent: number;
	source: unknown;
	status: number;
	thumbnail_url: string;
	title: string;
	url: string;
}

interface StreamableFile {
	bitrate: number;
	duration: number;
	framerate: number;
	height: number;
	size: number;
	status: number;
	url?: string;
	width: number;
}
