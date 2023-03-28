'use client';

import Link from 'next/link';
import { useLanyard } from 'react-use-lanyard/dist';

import { StatusIndicator } from './Indicator.client';
import { READABLE_DISCORD_STATUS } from '~/types/lanyard';

import type { WithClassName } from '~/types/react';
import { cn } from '~/utils/cn';

interface StatusPillProps extends WithClassName {
	userId: string;
}

export function StatusPill({ className, userId }: StatusPillProps): JSX.Element | null {
	const lanyard = useLanyard({
		userId,
		socket: true,
	});

	if (lanyard.loading || lanyard.status?.discord_status === 'offline') return null;

	return (
		<Link
			className={cn(
				'inline-flex items-center space-x-2 px-4 py-1',
				'bg-gray-100/25 backdrop-blur-md dark:bg-gray-900/25 dark:hover:bg-gray-700/50',
				'text-sm font-medium text-gray-900 dark:text-white',
				'rounded-full',
				'border border-gray-100/50 hover:border-gray-200/50 dark:border-gray-800 dark:hover:border-gray-700',
				'animate-in motion-safe:zoom-in duration-1000',
				'default-transition default-focus',
				className,
			)}
			href="/status"
		>
			<span className="font-bold uppercase">Live</span>
			<StatusIndicator
				color={
					lanyard && lanyard.status && !lanyard.loading
						? READABLE_DISCORD_STATUS[lanyard.status.discord_status].color
						: null
				}
				pulse={!lanyard.loading}
			/>
		</Link>
	);
}
