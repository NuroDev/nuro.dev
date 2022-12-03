// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace NodeJS {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface ProcessEnv extends NodeJS.ProcessEnv {
		/**
		 * Discord ID
		 *
		 * @description Your personal Discord account ID
		 *
		 * @see https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-
		 */
		NEXT_PUBLIC_DISCORD_ID: string;

		/**
		 * GitHub Personal Access Token (PAT)
		 *
		 * @description Token used for fetching repositories
		 */
		GITHUB_PAT: string;
	}
}
