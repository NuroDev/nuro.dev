import Image from 'next/image';

import { StatusIndicator } from '../Indicator';
import { useStatus } from '~/hooks/status.hook';

import type { ActivityType, BaseActivityProps } from '~/types/lanyard';

export interface AccountActivityProps extends BaseActivityProps {
	type: ActivityType.ACCOUNT;
}

export function AccountActivity(activity: AccountActivityProps): JSX.Element {
	const { color, status } = useStatus();

	return (
		<div className="inline-flex items-center">
			<div className="pointer-events-none my-auto max-h-12 max-w-md rounded ring-2 ring-gray-200 dark:ring-gray-500">
				<Image
					alt={activity.avatar.alt}
					className="max-h-12 w-full rounded"
					height={48}
					src={activity.avatar.src}
					width={48}
				/>
			</div>

			<div className="ml-4 flex-1">
				<h1 className="overflow-ellipsis text-base font-extrabold tracking-wide text-gray-900 line-clamp-1 dark:text-white">
					{activity.title}
				</h1>

				{Array.isArray(activity.description) ? (
					activity.description.map((description, descriptionIndex) => (
						<p
							className="mt-1 text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400"
							key={descriptionIndex}>
							{description}
						</p>
					))
				) : (
					<p className="mt-1 text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">
						{activity.description}
					</p>
				)}
			</div>

			<StatusIndicator
				className="mx-3"
				color={color}
				pulse={status?.discord_status !== 'offline'}
			/>
		</div>
	);
}
