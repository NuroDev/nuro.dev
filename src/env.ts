import { envsafe, str } from 'envsafe';

export const env = envsafe(
	{
		/**
		 * @name DOMAIN
		 *
		 * @description Domain or hostname of the website
		 */
		DOMAIN: str({
			allowEmpty: false,
			default: 'nuro.dev',
			desc: 'Domain or hostname of the website',
			devDefault: 'localhost:3000',
			example: 'google.com',
			input: process.env.VERCEL === '1' ? process.env.VERCEL_URL : process.env.DOMAIN,
		}),

		/**
		 * @name NODE_ENV
		 *
		 * @description Node.js runtime environment
		 */
		NODE_ENV: str({
			choices: ['development', 'test', 'production'],
			default: 'production',
			desc: 'Node.js runtime environment',
			devDefault: 'development',
		}),
	},
	{
		strict: true,
	},
);
