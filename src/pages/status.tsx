import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { motion } from '@motionone/react';

import { ActivityType } from '~/types/lanyard';
import { Background } from '~/components/Background';
import { BaseLayout } from '~/layouts/Base.layout';
import { defaultTransition } from '~/utils/animate';
import { Icon } from '~/components/Icon';
import { useStatus } from '~/hooks/status.hook';

import type { AccountActivityProps } from '~/components/Status/Activity/Account';
import type { SpotifyActivityProps } from '~/components/Status/Activity/Spotify';
import type { CodeActivityProps } from '~/components/Status/Activity/Code';

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

	const activities: Array<AccountActivityProps | CodeActivityProps | SpotifyActivityProps> = [
		{
			avatar: {
				alt: 'Discord Avatar',
				src: `https://cdn.discordapp.com/avatars/${lanyard.status.discord_user.id}/${lanyard.status.discord_user.avatar}.webp?size=256`,
			},
			description: `#${lanyard.status.discord_user.discriminator}`,
			title: lanyard.status.discord_user.username,
			type: ActivityType.ACCOUNT,
		} satisfies AccountActivityProps,

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
					} satisfies SpotifyActivityProps,
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
							} satisfies CodeActivityProps),
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
						}}>
						{activities.map((activity, index) => {
							const Divider = (): JSX.Element | null =>
								index + 1 !== activities.length ? (
									<hr className="h-0.5 rounded-full border-none bg-gray-100 dark:bg-gray-600" />
								) : null;

							switch (activity.type) {
								case ActivityType.ACCOUNT:
									const AccountActivity = dynamic(
										import('~/components/Status/Activity/Account').then(
											({ AccountActivity }) => AccountActivity,
										),
										{
											ssr: false,
										},
									);

									return (
										<Fragment key={index}>
											<AccountActivity {...activity} />
											<Divider />
										</Fragment>
									);
								case ActivityType.CODE:
									const CodeActivity = dynamic(
										import('~/components/Status/Activity/Code').then(
											({ CodeActivity }) => CodeActivity,
										),
										{
											ssr: false,
										},
									);

									return (
										<Fragment key={index}>
											<CodeActivity {...activity} />
											<Divider />
										</Fragment>
									);
								case ActivityType.SPOTIFY:
									const SpotifyActivity = dynamic(
										import('~/components/Status/Activity/Spotify').then(
											({ SpotifyActivity }) => SpotifyActivity,
										),
										{
											ssr: false,
										},
									);

									return (
										<Fragment key={index}>
											<SpotifyActivity {...activity} />
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
