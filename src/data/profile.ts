export const profile = {
	name: 'Ben',
	twitterHandle: '@nurodev',
	discordUserId: '84300695947218944',
} satisfies Profile;

interface Profile {
	/**
	 * The name you want to be referred by.
	 *
	 * Usually this can be your first name.
	 *
	 * @example 'Ben'
	 */
	name: string;
	/**
	 * Your Twitter handle.
	 *
	 * @example '@nurodev'
	 */
	twitterHandle: `@${string}`;
	/**
	 * Your Discord user ID.
	 *
	 * @example '84300695947218944'
	 *
	 * @see https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-
	 *
	 */
	discordUserId: string;
}
