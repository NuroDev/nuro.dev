import styled from '@emotion/styled';
import tw from 'twin.macro';

import { Error, Loading } from '..';
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
	inline-flex
`);

const AvatarContainer = styled.div(tw`
	w-12 h-12 \
	my-auto \
	bg-gray-100 dark:bg-gray-600 \
	rounded-full
`);

const Avatar = styled.img(tw`
	rounded-full select-none pointer-events-none \
	ring-2 ring-gray-200 dark:ring-gray-500
`);

const TextContainer = styled.div(tw`
	flex-1 \
	ml-4
`);

const Title = styled.h1(tw`
	text-xl font-extrabold tracking-wide overflow-ellipsis \
	text-gray-900 dark:text-white
`);

const Description = styled.p(tw`
	mt-1 \
	text-xs tracking-wide \
	text-gray-500 dark:text-gray-400
`);

const Divider = styled.hr(tw`
	h-0.5 \
	bg-gray-100 dark:bg-gray-600 \
	border-none \
	rounded-full
`);

const ArtworkContainer = styled.div(tw`
	max-w-md max-h-12 \
	my-auto \
	rounded pointer-events-none select-none \
	ring-2 ring-gray-200 dark:ring-gray-500
`);

const Artwork = styled.img(tw`
	w-full max-h-12 rounded
`);

const Song = styled.div(tw`
	flex-1 \
	ml-4
`);

const Artist = styled.div(tw`
	mt-1 \
	text-xs text-gray-500 dark:text-gray-400
`);

export function Widget() {
	const status = useStatus();

	if (!status || !status.data) return <Error />;

	if (status.loading) return <Loading />;

	return (
		<Container>
			<ActivityContainer>
				<AvatarContainer>
					<Avatar
						src={`https://cdn.discordapp.com/avatars/84300695947218944/88e90d3ac8424a04c216b5a0d315abea.webp?size=80`}
						alt="Discord Avatar"
					/>
				</AvatarContainer>

				<TextContainer>
					<Title>Title</Title>
					<Description>Description</Description>
				</TextContainer>
			</ActivityContainer>

			{status.data.spotify && status.data.listening_to_spotify && (
				<>
					<Divider />
					<ActivityContainer>
						<ArtworkContainer>
							<Artwork
								src={status.data.spotify.album_art_url}
								alt={`${status.data.spotify.song} - ${status.data.spotify.artist}`}
							/>
						</ArtworkContainer>

						<Song>
							<Title>{status.data.spotify.song}</Title>
							<Artist>
								{status.data.spotify.album === status.data.spotify.artist && (
									<p>{status.data.spotify.album}</p>
								)}
								<p tw="tracking-wide">{status.data.spotify.artist}</p>
							</Artist>
						</Song>
					</ActivityContainer>
				</>
			)}
		</Container>
	);
}
