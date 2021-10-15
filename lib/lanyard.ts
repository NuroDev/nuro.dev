import { useLanyard } from 'react-use-lanyard';

import type { LanyardData } from 'react-use-lanyard';

import { DiscordStatus } from '~/types';

function getColorFromStatus(status: LanyardData) {
	switch (status.discord_status as DiscordStatus) {
		case DiscordStatus.ONLINE:
			return 'green';
		case DiscordStatus.IDLE:
			return 'yellow';
		case DiscordStatus.DND:
			return 'red';
		default:
		case DiscordStatus.OFFLINE:
			return 'gray';
	}
}

export function useStatus() {
	const userId = process.env.NEXT_PUBLIC_DISCORD_ID;
	const { loading, status } = useLanyard({
		userId,
		socket: true,
	});

	if (!userId || !status) return null;

	const color = getColorFromStatus(status);

	return {
		color,
		loading,
		data: status,
	};
}
