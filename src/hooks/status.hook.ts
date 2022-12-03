import { useLanyard } from 'react-use-lanyard';

import { clientEnv } from '~/env/client';
import { DISCORD_STATUS_COLOR } from '~/types/lanyard';

import type { LanyardData } from 'react-use-lanyard';

import type { DiscordStatusColor } from '~/types/lanyard';

export function useStatus(): {
	color: DiscordStatusColor | null;
	loading: boolean;
	websocket?: WebSocket;
	status: LanyardData | undefined;
} {
	const { loading, status, ...rest } = useLanyard({
		userId: clientEnv.NEXT_PUBLIC_DISCORD_ID,
		socket: true,
	});

	return {
		...rest,
		color: status && !loading ? DISCORD_STATUS_COLOR[status.discord_status] : null,
		loading,
		status,
	};
}
