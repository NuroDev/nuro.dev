import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

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

export default async function (_req: NextApiRequest, res: NextApiResponse) {
	try {
		const response = await fetch('http://ip-api.com/json');
		const json: Response = await response.json();
		res.send(json);
	} catch (error) {
		res.send(error);
	}
}
