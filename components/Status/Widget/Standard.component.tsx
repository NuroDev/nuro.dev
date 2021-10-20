import Image from 'next/image';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';

import { DiscordStatus } from '~/types';
import { Error, Loading } from '..';
import { Status } from '~/components';
import { useStatus } from '~/lib';

import type { ReactNode } from 'react';

interface Activity {
	avatar: {
		alt: string;
		icon?: boolean;
		href?: string;
		url: string;
	};
	title: string;
	description: string | Array<string>;
	icon?: string | ReactNode;
}

const Container = styled.div(tw`
	flex flex-col space-y-5 w-full max-w-sm \
	mx-auto px-4 py-4 \
	bg-white bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 \
	backdrop-filter backdrop-blur-sm \
	border-2 border-gray-200 dark:border-gray-600 \
	rounded-lg hover:shadow-lg \
	transition ease-in-out duration-300
`);

const ActivityContainer = styled.div(tw`
	inline-flex items-center
`);

const AssetContainer = styled.div(tw`
	max-w-md max-h-12 \
	my-auto \
	rounded pointer-events-none select-none \
	ring-2 ring-gray-200 dark:ring-gray-500
`);

const Asset = styled(Image)(tw`
	w-full max-h-12 rounded
`);

const Body = styled.div(tw`
	flex-1 \
	ml-4
`);

const Title = styled.h1(tw`
	text-xl font-extrabold line-clamp-1 tracking-wide overflow-ellipsis \
	text-gray-900 dark:text-white
`);

const Description = styled.p(tw`
	mt-1 \
	text-xs tracking-wide font-medium \
	text-gray-500 dark:text-gray-400
`);

const Divider = styled.hr(tw`
	h-0.5 \
	bg-gray-100 dark:bg-gray-600 \
	border-none \
	rounded-full
`);

const UnknownActivityIcon = styled(Icon)(tw`
	w-12 h-12 \
	p-1 \
	text-gray-200 dark:text-gray-400
`);

const AnimatedIcon = styled(Icon)(tw`
	w-6 h-6 \
	mx-3 \
	text-gray-200 dark:text-gray-400 \
	animate-pulse
`);

export function Widget() {
	const { color, loading, status } = useStatus();

	if (loading) return <Loading />;

	if (!status || !status) return <Error />;

	const items: Array<Activity | null> = [
		{
			avatar: {
				alt: 'Discord Avatar',
				url: `https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.webp?size=256`,
			},
			title: status.discord_user.username,
			description: `#${status.discord_user.discriminator}`,
			icon: (
				<Status.Indicator
					color={color}
					pulse={status.discord_status !== DiscordStatus.OFFLINE}
				/>
			),
		},
		...(status.spotify && status.listening_to_spotify
			? [
					{
						avatar: {
							alt: `${status.spotify.song} - ${status.spotify.artist}`,
							href: `https://open.spotify.com/track/${status.spotify.track_id}`,
							url: status.spotify.album_art_url,
						},
						title: status.spotify.song,
						description: status.spotify.artist,
						icon: 'feather:music',
					},
			  ]
			: []),
		...(status.activities.length > 0
			? status.activities.map((activity) => {
					if (activity.id === 'custom' || activity.id.includes('spotify')) return null;

					const hasAsset = activity.assets && activity.assets.large_image ? true : false;
					const avatar = hasAsset
						? {
								alt: activity.details,
								url: `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.webp`,
						  }
						: {
								alt: activity.name,
								icon: true,
								url: '',
						  };

					return {
						avatar,
						title: activity.name,
						description: [
							activity.details,
							...(activity.state ? [activity.state] : []),
						],
					};
			  })
			: []),
	].filter((item) => item !== null);

	return (
		<Container>
			{items.map((item, index) => (
				<>
					<ActivityContainer>
						<AssetContainer>
							{item.avatar.icon ? (
								<UnknownActivityIcon icon="feather:help-circle" />
							) : item.avatar.href ? (
								<a
									href={item.avatar.href}
									target="_blank"
									rel="noreferrer noopener">
									<Asset
										alt={item.avatar.alt}
										height={48}
										src={item.avatar.url}
										width={48}
									/>
								</a>
							) : (
								<Asset
									alt={item.avatar.alt}
									height={48}
									src={item.avatar.url}
									width={48}
								/>
							)}
						</AssetContainer>

						<Body>
							<Title>{item.title}</Title>

							{item.avatar.icon ? (
								<Description>Unknown Activity</Description>
							) : Array.isArray(item.description) ? (
								item.description.map((description) => (
									<Description>{description}</Description>
								))
							) : (
								<Description>{item.description}</Description>
							)}
						</Body>

						{item.icon &&
							(typeof item.icon === 'string' ? (
								<AnimatedIcon icon={item.icon} />
							) : (
								item.icon
							))}
					</ActivityContainer>

					{index + 1 !== items.length && <Divider />}
				</>
			))}
		</Container>
	);
}
