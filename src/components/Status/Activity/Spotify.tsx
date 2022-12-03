import Image from 'next/image';
import Link from 'next/link';

import type { ActivityType, BaseActivityProps } from '~/types/lanyard';

export interface SpotifyActivityProps extends BaseActivityProps {
	href: string;
	type: ActivityType.SPOTIFY;
}

export function SpotifyActivity({
	avatar,
	description,
	href,
	title,
}: SpotifyActivityProps): JSX.Element {
	return (
		<Link
			className="default-transition default-focus inline-flex items-center rounded-md"
			href={href}
			rel="noreferrer noopener"
			target="_blank">
			<div className="pointer-events-none my-auto max-h-12 max-w-md select-none rounded ring-2 ring-gray-200 dark:ring-gray-500">
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
							key={descriptionIndex}>
							{description}
						</p>
					))
				) : (
					<p className="mt-1 text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">
						{description}
					</p>
				)}
			</div>

			<svg className="mx-3 h-6 w-6" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
				<path
					fill="#1ed760"
					d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"
				/>
				<path d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z" />
			</svg>
		</Link>
	);
}
