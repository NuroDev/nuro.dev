import { NowRequest, NowResponse } from '@vercel/node';
import { SplitbeeAnalytics } from '@splitbee/node';
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

const analytics = new SplitbeeAnalytics(process.env.SPLITBEE_PROJECT_ID as string);

export default async function (_req: NowRequest, res: NowResponse) {
	try {
		const response = await fetch('http://ip-api.com/json');
		const json: Response = await response.json();

		analytics.track({
			userId: 'myunique@user.id',
			event: 'api/get_ip',
			data: {
				response: JSON.stringify(json),
			},
		});

		res.send(json);
	} catch (error) {
		res.send(error);
	}
}
