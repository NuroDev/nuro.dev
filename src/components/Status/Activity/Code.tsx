import Image from 'next/image';

import type { ActivityType, BaseActivityProps } from '~/types/lanyard';

export interface CodeActivityProps extends BaseActivityProps {
	type: ActivityType.CODE;
}

export function CodeActivity({ avatar, description, title }: CodeActivityProps): JSX.Element {
	return (
		<div className="inline-flex items-center">
			<div className="pointer-events-none my-auto max-h-12 max-w-md rounded ring-2 ring-gray-200 dark:ring-gray-500">
				<Image
					alt={avatar.alt}
					className="max-h-12 w-full rounded"
					height={48}
					src={avatar.src}
					width={48}
				/>
			</div>

			<div className="ml-4 flex-1">
				<h1 className="overflow-ellipsis text-base font-extrabold tracking-wide text-gray-900 line-clamp-1 dark:text-white">
					{title}
				</h1>

				{Array.isArray(description) ? (
					description.map((description, descriptionIndex) => (
						<p
							className="mt-1 text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400"
							key={descriptionIndex}
						>
							{description}
						</p>
					))
				) : (
					<p className="mt-1 text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">
						{description}
					</p>
				)}
			</div>
		</div>
	);
}
