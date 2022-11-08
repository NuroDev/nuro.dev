import { envsafe, str } from 'envsafe';

export const env = envsafe(
	{
		DOMAIN: str({
			allowEmpty: false,
			default: 'nuro.dev',
			devDefault: 'localhost:3000',
			example: 'google.com',
			input: process.env.VERCEL === '1' ? process.env.VERCEL_URL : process.env.DOMAIN,
		}),
	},
	{
		strict: true,
	},
);
