import { useLanyard } from 'react-use-lanyard';

import { DISCORD_STATUS_COLOR } from '~/types/lanyard';
import { env } from '~/env';
import { getProfile } from '~/data/profile';

import type { LanyardData } from 'react-use-lanyard';

import type { DiscordStatusColor } from '~/types/lanyard';
import { use } from 'react';

/**
 * Use Status
 *
 * @description A small wrapper around `react-use-lanyard`'s `useLanyard` hook to provide a color based on the user's Discord status
 */
export function useStatus(): {
	color: DiscordStatusColor | null;
	loading: boolean;
	websocket?: WebSocket;
	status: LanyardData | undefined;
} {
	const profile = use(getProfile());

	if (!profile.discordAccountId && env.NODE_ENV !== 'production')
		console.warn(
			'No Discord ID provided. Add one to `data/profile.ts` to enable status functionality.',
		);

	const { loading, status, ...rest } = useLanyard({
		userId: profile.discordAccountId || 'UNKNOWN',
		socket: true,
	});

	return {
		...rest,
		color: status && !loading ? DISCORD_STATUS_COLOR[status.discord_status] : null,
		loading,
		status,
	};
}
