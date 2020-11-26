import { NowRequest, NowResponse } from '@vercel/node';
import { SplitbeeAnalytics } from '@splitbee/node';
import fetch from 'node-fetch';

const analytics = new SplitbeeAnalytics(process.env.SPLITBEE_PROJECT_ID as string);

export default async function (_req: NowRequest, res: NowResponse) {
	// Get all repositoryż
	const response = await fetch('https://api.github.com/users/nurodev/repos');
	let repos = await response.json();

	// Remove the profile README repo
	repos = repos.filter((repo: any) => !'NuroDev/NuroDev'.includes(repo.full_name));

	analytics.track({
		userId: 'myunique@user.id',
		event: 'api/get_portfolio_repos',
		data: {
			response: JSON.stringify(repos),
		},
	});

	res.send(JSON.stringify(repos));
}
