import { NowRequest, NowResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async function (_req: NowRequest, res: NowResponse) {
	// Get all repositoryż
	const response = await fetch('https://api.github.com/users/nurodev/repos');
	let repos = await response.json();

	// Remove the profile README repo
	repos = repos.filter((repo: any) => !'NuroDev/NuroDev'.includes(repo.full_name));

	res.send(JSON.stringify(repos));
}
