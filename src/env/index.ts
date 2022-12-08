import { envsafe, str } from 'envsafe';

export const env = envsafe({
	/**
	 * @name DOMAIN
	 *
	 * @description Domain name for the site
	 *
	 * @example example.com
	 */
	DOMAIN: str({
		allowEmpty: true,
		desc: 'Domain name for this site',
		devDefault: 'localhost:3000',
		example: 'example.com',
		input: process.env.DOMAIN,
	}),

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
