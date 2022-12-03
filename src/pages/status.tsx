import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { motion } from '@motionone/react';

import { ActivityTitleAndDescription } from '~/components/Status/TitleAndDescription';
import { Background } from '~/components/Background';
import { BaseLayout } from '~/layouts/Base.layout';
import { defaultTransition } from '~/utils/animate';
import { Icon } from '~/components/Icon';
import { StatusIndicator } from '~/components/Status/Indicator';
import { useStatus } from '~/hooks/status.hook';

enum ActivityType {
	ACCOUNT = 'account',
	SPOTIFY = 'spotify',
	CODE = 'code',
}

interface ActivityAvatar {
	alt: string;
	src: string;
}

interface BaseActivity {
	avatar: ActivityAvatar;
	description: string | Array<string>;
	title: string;
}

interface AccountActivity extends BaseActivity {
	type: ActivityType.ACCOUNT;
}

interface SpotifyActivity extends BaseActivity {
	href: string;
	type: ActivityType.SPOTIFY;
}

interface CodeActivity extends BaseActivity {
	type: ActivityType.CODE;
}

export default function StatusPage(): JSX.Element | null {
	const lanyard = useStatus();

	if (lanyard.loading) return null;

	if (!lanyard.status || Object.keys(lanyard.status).length === 0 || !lanyard.status)
		return (
			<BaseLayout title="status">
				<main className="flex min-h-screen flex-grow pt-16 pb-12">
					<div className="mx-auto flex w-full max-w-sm flex-grow flex-col justify-center px-0 sm:max-w-lg sm:px-16">
						<div className="default-transition mx-auto flex w-full max-w-sm space-x-4 rounded-lg border-2 border-red-500 bg-red-900 px-4 py-4 backdrop-blur-sm backdrop-filter hover:shadow-lg motion-safe:animate-pulse">
							<div className="my-auto flex h-12 w-12 items-center justify-center text-red-500">
								<Icon className="h-8 w-8" name="AlertTriangle" />
							</div>
							<div className="flex-1 space-y-4 py-1">
								<div className="h-4 w-3/4 rounded ring-2 ring-red-500" />
								<div className="h-4 rounded ring-2 ring-red-500" />
							</div>
						</div>
					</div>
				</main>
			</BaseLayout>
		);

	const activities: Array<AccountActivity | SpotifyActivity | CodeActivity> = [
		{
			avatar: {
				alt: 'Discord Avatar',
				src: `https://cdn.discordapp.com/avatars/${lanyard.status.discord_user.id}/${lanyard.status.discord_user.avatar}.webp?size=256`,
			},
			description: `#${lanyard.status.discord_user.discriminator}`,
			title: lanyard.status.discord_user.username,
			type: ActivityType.ACCOUNT,
		} satisfies AccountActivity,

		...(lanyard.status.spotify && lanyard.status.listening_to_spotify
			? [
					{
						avatar: {
							alt: `${lanyard.status.spotify.song} - ${lanyard.status.spotify.artist}`,
							src: lanyard.status.spotify.album_art_url,
						},
						title: lanyard.status.spotify.song,
						description: lanyard.status.spotify.artist,
						href: `https://open.spotify.com/track/${lanyard.status.spotify.track_id}`,
						type: ActivityType.SPOTIFY,
					} satisfies SpotifyActivity,
			  ]
			: []),

		...(lanyard.status.activities.length > 0
			? lanyard.status.activities
					.filter(
						(activity) => activity.id !== 'custom' && !activity.id.includes('spotify'),
					)
					.map(
						(activity) =>
							({
								avatar: {
									alt: activity.details as string,
									src: `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets?.large_image}.webp`,
								},
								title: activity.name,
								description: [
									...(activity.state ? [activity.state] : []),
									...(activity.details ? [activity.details] : []),
								],
								type: ActivityType.CODE,
							} satisfies CodeActivity),
					)
			: []),
	].filter(Boolean);

	return (
		<BaseLayout title="status">
			<Background />
			<main className="flex min-h-screen flex-grow pt-16 pb-12">
				<div className="mx-auto flex w-full max-w-sm flex-grow flex-col justify-center px-0 sm:max-w-lg sm:px-16">
					<motion.div
						animate={{
							opacity: [0, 1],
							y: [100, 0],
						}}
						className="default-transition mx-auto flex w-full max-w-sm flex-col space-y-5 rounded-lg border-2 border-gray-200 bg-white/50 px-4 py-4 backdrop-blur-sm backdrop-filter hover:shadow-lg dark:border-gray-600 dark:bg-gray-900/50"
						transition={{
							...defaultTransition,
							delay: 0.3,
						}}
					>
						{activities.map((activity, index) => {
							const Divider = (): JSX.Element | null =>
								index + 1 !== activities.length ? (
									<hr className="h-0.5 rounded-full border-none bg-gray-100 dark:bg-gray-600" />
								) : null;

							switch (activity.type) {
								case ActivityType.ACCOUNT:
									return (
										<Fragment key={index}>
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
													<ActivityTitleAndDescription
														description={activity.description}
														title={activity.title}
													/>
												</div>

												<StatusIndicator
													className="mx-3"
													color={lanyard.color}
													pulse={
														lanyard.status?.discord_status !== 'offline'
													}
												/>
											</div>
											<Divider />
										</Fragment>
									);

								case ActivityType.SPOTIFY:
									return (
										<Fragment key={index}>
											<Link
												className="default-transition default-focus inline-flex items-center rounded-md"
												href={activity.href}
												rel="noreferrer noopener"
												target="_blank"
											>
												<div className="pointer-events-none my-auto max-h-12 max-w-md select-none rounded ring-2 ring-gray-200 dark:ring-gray-500">
													<Image
														alt={activity.avatar.alt}
														className="max-h-12 w-full rounded"
														height={48}
														src={activity.avatar.src}
														width={48}
													/>
												</div>

												<div className="ml-4 flex-1">
													<ActivityTitleAndDescription
														description={activity.description}
														title={activity.title}
													/>
												</div>

												<svg
													className="mx-3 h-6 w-6"
													viewBox="0 0 496 512"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fill="#1ed760"
														d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"
													/>
													<path d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z" />
												</svg>
											</Link>
											<Divider />
										</Fragment>
									);
								case ActivityType.CODE:
									return (
										<Fragment key={index}>
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
													<ActivityTitleAndDescription
														description={activity.description}
														title={activity.title}
													/>
												</div>
											</div>
											<Divider />
										</Fragment>
									);
								default:
									// TODO: Add default activity type for games
									// return (
									// 	<Fragment key={index}>
									// 		<div className="inline-flex items-center">
									// 			<div className="pointer-events-none my-auto max-h-12 max-w-md rounded ring-2 ring-gray-200 dark:ring-gray-500">
									// 				<Icon
									// 					className="h-12 w-12 p-1 text-gray-200 dark:text-gray-400"
									// 					name="Gamepad2"
									// 				/>
									// 			</div>

									// 			<div className="ml-4 flex-1">
									// 				<p className="mt-0 mb-1 text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">
									// 					Playing
									// 				</p>
									// 				<h1 className="overflow-ellipsis text-base font-extrabold tracking-wide text-gray-900 line-clamp-1 dark:text-white">
									// 					{activity?.title}
									// 				</h1>
									// 			</div>
									// 		</div>
									// 		<Divider />
									// 	</Fragment>
									// );
									return null;
							}
						})}
					</motion.div>
				</div>
			</main>
		</BaseLayout>
	);
}
