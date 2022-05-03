namespace NodeJS {
	interface ProcessEnv extends NodeJS.ProcessEnv {
		/**
		 * `DOMAIN`
		 *
		 * @description Root domain for the application
		 *
		 * @default localhost:3000
		 */
		DOMAIN: string;

		/**
		 * `NEXT_PUBLIC_DISCORD_ID`
		 *
		 * @description My personal Discord user / profile ID
		 *
		 * @example `00000000000000000`
		 */
		NEXT_PUBLIC_DISCORD_ID: string;
	}
}
