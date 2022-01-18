import containsEmoji from 'contains-emoji';
import GithubColors from 'github-colors';
import Redis from 'ioredis';

import type { Redirect } from 'next';

import type { GitHubRepos, Project, ProjectPost, Projects } from '~/types';

let redis;

/**
 * Fetch Projects
 *
 * Make a GET request to the GitHub API to gather all repositories
 * under my `nurodev` username & then filter them down to only
 * include those that contain the `portfolio` topic
 *
 * @TODO Switch to v3 API using GraphQL to save over-fetching
 */
async function fetchProjects(): Promise<Projects | null> {
	const response = await fetch('https://api.github.com/users/nurodev/repos', {
		headers: {
			...(process.env.GITHUB_PAT && {
				authorization: `token ${process.env.GITHUB_PAT}`,
			}),
		},
	});
	if (response.status !== 200) {
		const json = (await response.json()) as {
			documentation_url: string;
			message: string;
		};

		console.error({ error: json });

		return null;
	}

	const json = (await response.json()) as GitHubRepos;

	const { default: rawProjectPosts } = await import('~/data/projects.json');
	const projectPosts = rawProjectPosts as Array<ProjectPost>;

	const projects: Projects = json
		.map((repo) => {
			if (!repo.topics.includes('portfolio')) return null;

			if (repo.archived) return null;

			// Strip the emoji suffix from the repo description
			const trimmedDescription = repo.description.split(' ');
			trimmedDescription.shift();
			const description = trimmedDescription.join(' ');

			// Check if there is a matching blog post to attach
			const repoPost =
				projectPosts.length > 0 &&
				projectPosts.find(
					(post) => post.repository.toLowerCase() === repo.full_name.toLowerCase(),
				);

			return {
				description,
				icon: (() => {
					if (!repo.description) return undefined;

					const char = repo.description.split(' ')[0];

					return containsEmoji(char) ? char : undefined;
				})(),
				homepage: repo.homepage ?? undefined,
				language: repo.language ? GithubColors.get(repo.language).color : undefined,
				name: repo.name,
				post: repoPost ? `/blog/${repoPost.post}` : undefined,
				template: false,
				url: repo.html_url.toLowerCase(),
			} as Project;
		})
		.filter((project) => project !== null);

	return projects;
}

/**
 * Get projects
 *
 * Fetch all projects from my GitHub that contain the `portfolio`
 * topic.
 * Results are cached in Upstash (Redis) & attempted to be fetched
 * from there first & if not makes a request to GitHub.
 */
export async function getProjects(): Promise<Projects | Redirect> {
	if (!redis) redis = new Redis(process.env.REDIS_URL);

	try {
		const cache: string | null = await redis.get('projects');
		if (cache !== null) return JSON.parse(cache) as Projects;

		const projects = await fetchProjects();

		redis.set('projects', JSON.stringify(projects));

		return projects;
	} catch (err) {
		console.error('Request error', err);
		return {
			destination: '/error?status=500',
			permanent: false,
		};
	}
}
