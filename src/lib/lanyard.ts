import { useLanyard } from 'react-use-lanyard';

import { DISCORD_STATUS_COLOR } from '~/types';

import type { LanyardData } from 'react-use-lanyard';

export function useStatus(): {
	color: string;
	loading: boolean;
	status?: LanyardData;
	websocket?: WebSocket;
} {
	const userId = process.env.NEXT_PUBLIC_DISCORD_ID;
	const result = useLanyard({
		userId,
		socket: true,
	});

	return {
		...result,
		color:
			result.status && !result.loading
				? DISCORD_STATUS_COLOR[result.status.discord_status]
				: null,
	};
}
