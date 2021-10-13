import Link from 'next/link';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useLanyard } from 'react-use-lanyard';

import { Status } from '..';
import { DiscordStatus } from '~/types';

import type { LanyardData } from 'react-use-lanyard';

const Container = styled.div(tw`
	ml-3 mt-3 \
	cursor-pointer
`);

export function StatusWrapper() {
	const userId = process.env.NEXT_PUBLIC_DISCORD_ID;
	const { loading, status } = useLanyard({
		userId,
		socket: true,
	});

	if (!userId || loading || status.discord_status === DiscordStatus.OFFLINE) return null;

	function statusColor(status: LanyardData) {
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

	return (
		<Link href="/status">
			<Container>
				<Status.Indicator
					color={statusColor(status)}
					pulse={status.discord_status !== DiscordStatus.OFFLINE}
				/>
			</Container>
		</Link>
	);
}
