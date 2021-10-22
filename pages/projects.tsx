import styled from '@emotion/styled';
import containsEmoji from 'contains-emoji';
import tw from 'twin.macro';
import GithubColors from 'github-colors';

import { Layout } from '~/layouts';
import { List } from '~/components';
import { ListActionType } from '~/types';

import type { GetServerSideProps } from 'next';

import type { GitHubRepos, ListAction, Project, Projects, ProjectPost } from '~/types';

interface ProjectProps {
	projects: string;
}

const Container = styled.div(tw`
	mt-24 mb-20 mx-2 sm:mx-6 lg:mb-28 lg:mx-8
`);

const Content = styled.div(tw`
	relative max-w-xl mx-auto
`);

const ProjectIcon = styled.span(tw`
	text-xl
`);

export const getServerSideProps: GetServerSideProps<ProjectProps> = async () => {
	const response = await fetch('https://api.github.com/users/nurodev/repos');
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

	return {
		props: {
			projects: JSON.stringify(projects),
		},
	};
};

export default function ProjectsPage({ projects: serialisedProjects }: ProjectProps) {
	const projects = JSON.parse(serialisedProjects) as Projects;

	return (
		<Layout.Default seo={{ title: 'nuro ─ projects' }}>
			<Container>
				<Content>
					<List.Container
						item={(project, index) => (
							<List.Item
								actions={[
									...(project.post
										? [
												{
													type: ListActionType.LINK,
													external: false,
													href: project.post,
													icon: 'feather:edit-3',
													label: `Blog post about ${project.name}`,
												} as ListAction,
										  ]
										: []),
									...(project.homepage
										? [
												{
													type: ListActionType.LINK,
													href: project.homepage,
													icon: 'feather:home',
													label: `${project.name} homepage`,
												} as ListAction,
										  ]
										: []),
									{
										type: ListActionType.LINK,
										href: project.url,
										icon: 'feather:github',
										label: 'GitHub Repository',
									},
								]}
								description={project.description}
								icon={<ProjectIcon>{project.icon}</ProjectIcon>}
								key={index}
								title={project.name}
							/>
						)}
						items={projects}
					/>
				</Content>
			</Container>
		</Layout.Default>
	);
}
