import { Component, Show } from 'solid-js';
import useLanyard, {
	type DiscordUser,
	type SpotifyPresence,
	userAvatarUrl,
} from 'solid-use-lanyard';

type StatusStr = 'online' | 'idle' | 'dnd' | 'offline';

const READABLE_STATUS: Record<StatusStr, string> = {
	dnd: 'Do Not Disturb',
	idle: 'Idle',
	offline: 'Offline',
	online: 'Online',
};

export const Live: Component = () => {
	const { presence } = useLanyard({
		id: '84300695947218944',
		type: 'socket',
	});

	return (
		<>
			{/* <Show when={!presence()}>Loading...</Show> */}

			<Show when={presence()}>
				<div class="flex w-full max-w-2xl flex-col">
					{/* TODO: Fix reactivity */}
					<User
						status={presence()!.discord_status as StatusStr}
						user={presence()!.discord_user}
					/>

					<Show when={presence()!.spotify}>
						{/* TODO: Fix reactivity */}
						{/* TODO: Add animation delay */}
						<Spotify spotify={presence()!.spotify} />
					</Show>
				</div>
			</Show>
		</>
	);
};

const User: Component<{ status: StatusStr; user: DiscordUser }> = ({ status, user }) => (
	<div class="mt-4 flex items-center space-x-2 rounded-lg border border-gray-500 bg-gray-800/25 p-1 backdrop-blur-sm backdrop-filter duration-2000 ease-in-out animate-in fade-in slide-in-from-bottom">
		<div class="flex w-full divide-y divide-gray-200 text-center">
			<div class="flex flex-1 p-4">
				<div class="flex items-center">
					<img
						alt={`${user.username}'s avatar`}
						class="mx-auto h-16 w-16 flex-shrink-0 rounded-2xl"
						src={userAvatarUrl(user.id)}
					/>
				</div>

				<div class="flex flex-1 flex-col">
					<h3 class="text-lg font-bold text-white">{user.username}</h3>

					<dl class="flex flex-grow flex-col justify-between">
						<dd>
							<span class="inline-flex items-center rounded-full bg-gray-900/20 px-2 py-1 text-xs font-medium font-bold text-white ring-1 ring-inset ring-gray-600">
								{READABLE_STATUS[status]}
							</span>
						</dd>
					</dl>
				</div>
			</div>
		</div>
	</div>
);

const Spotify: Component<{ spotify: SpotifyPresence }> = ({ spotify }) => (
	<div class="mt-4 flex items-center space-x-2 rounded-lg border border-gray-500 bg-gray-800/25 p-1 backdrop-blur-sm backdrop-filter duration-2000 ease-in-out animate-in fade-in slide-in-from-bottom">
		<div class="flex w-full divide-y divide-gray-200 text-center">
			<div class="flex flex-1 p-4">
				<div class="flex items-center">
					<img
						alt={`${spotify.album}'s album cover`}
						class="mx-auto h-16 w-16 flex-shrink-0 rounded-2xl"
						src={spotify.album_art_url}
					/>
				</div>

				<div class="flex flex-1 flex-col">
					<h3 class="text-lg font-bold text-white">{spotify.song}</h3>

					<dl class="flex flex-grow flex-col justify-between">
						<dd>
							<span class="inline-flex items-center rounded-full bg-gray-900/20 px-2 py-1 text-xs font-medium font-bold text-white ring-1 ring-inset ring-gray-600">
								{spotify.artist}
							</span>
						</dd>
					</dl>
				</div>
			</div>
		</div>
	</div>
);
