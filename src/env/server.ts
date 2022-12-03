import { envsafe, str } from 'envsafe';

export const clientEnv = envsafe({
	/**
	 * @name GITHUB_PAT
	 *
	 * @description GitHub personal access token
	 */
	GITHUB_PAT: str({
		allowEmpty: true,
		desc: 'GitHub personal access token',
		input: process.env.GITHUB_PAT,
	}),
});
