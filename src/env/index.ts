import { envsafe, str } from 'envsafe';

export const env = envsafe({
	/**
	 * @name NODE_ENV
	 *
	 * @description Node.js runtime environment
	 */
	NODE_ENV: str({
		choices: ['development', 'production', 'staging', 'test'],
		desc: 'Node.js runtime environment',
		devDefault: 'development',
	}),
});
