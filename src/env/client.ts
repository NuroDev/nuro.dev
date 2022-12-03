import { envsafe, str } from 'envsafe';

export const clientEnv = envsafe({
	/**
	 * @name NEXT_PUBLIC_DISCORD_ID
	 *
	 * @description Discord account ID
	 *
	 * @example 'tim#0001'
	 */
	NEXT_PUBLIC_DISCORD_ID: str({
		allowEmpty: true,
		desc: 'Discord account ID',
		example: 'tim#0001',
		input: process.env.NEXT_PUBLIC_DISCORD_ID,
	}),
});
