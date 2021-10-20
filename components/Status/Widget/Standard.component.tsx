import Image from 'next/image';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';
import { Fragment } from 'react';

import { Error, Loading } from '..';
import { Status } from '~/components';
import { useStatus } from '~/lib';

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

const Artist = styled.div(tw`
	mt-1 \
	text-xs text-gray-500 dark:text-gray-400
`);

export function Widget() {
	const { loading, status } = useStatus();

	console.log('status', status);

	if (loading) return <Loading />;

	if (!status || !status) return <Error />;

	return (
		<Container>
			<ActivityContainer>
				<AssetContainer>
					<Asset
						alt="Discord Avatar"
						height={48}
						src={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.webp?size=256`}
						width={48}
					/>
				</AssetContainer>

				<Body>
					<Title>{status.discord_user.username}</Title>
					<Description>#{status.discord_user.discriminator}</Description>
				</Body>

				<Status.Indicator />
			</ActivityContainer>

			{status.spotify && status.listening_to_spotify && (
				<>
					<Divider />
					<ActivityContainer>
						<a href={`https://open.spotify.com/track/${status.spotify.track_id}`}>
							<AssetContainer>
								<Asset
									alt={`${status.spotify.song} - ${status.spotify.artist}`}
									height={48}
									src={status.spotify.album_art_url}
									width={48}
								/>
							</AssetContainer>
						</a>

						<Body>
							<Title aria-label={status.spotify.song}>{status.spotify.song}</Title>
							<Artist>
								{status.spotify.album === status.spotify.artist && (
									<p>{status.spotify.album}</p>
								)}
								<p tw="tracking-wide">{status.spotify.artist}</p>
							</Artist>
						</Body>

						<Icon icon="feather:music" tw="w-6 h-6 mx-3 animate-pulse" />
					</ActivityContainer>
				</>
			)}

			{status.activities.length > 0 &&
				status.activities.map((activity) => {
					if (activity.id === 'custom' || activity.id.includes('spotify')) return null;

					return (
						<Fragment key={activity.name}>
							<Divider />
							<ActivityContainer>
								<AssetContainer>
									{activity.assets && activity.assets.large_image ? (
										<Asset
											aria-label={activity.details}
											height={48}
											layout="fixed"
											src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.webp`}
											tw="p-2"
											width={48}
										/>
									) : (
										<Icon
											icon="feather:help-circle"
											tw="w-12 h-12 p-1 text-gray-200 dark:text-gray-400"
										/>
									)}
								</AssetContainer>

								<Body>
									<Title aria-label={activity.name}>{activity.name}</Title>
									<Description aria-label={activity.details}>
										{activity.details}
									</Description>
									{activity.state && (
										<Description aria-label={activity.state}>
											{activity.state}
										</Description>
									)}
								</Body>
							</ActivityContainer>
						</Fragment>
					);
				})}
		</Container>
	);
}
