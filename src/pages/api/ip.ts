import fetch from 'node-fetch';

import type { NextApiRequest, NextApiResponse } from 'next';

interface Response {
	as: string;
	city: string;
	country: string;
	countryCode: string;
	isp: string;
	lat: number;
	lon: number;
	org: string;
	query: string;
	region: string;
	regionName: string;
	status: string;
	timezone: string;
	zip: string;
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
	try {
		const response = await fetch('http://ip-api.com/json');
		const json = (await response.json()) as Response;
		res.send(json);
	} catch (error) {
		res.send(error);
	}
}
