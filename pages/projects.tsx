import styled from '@emotion/styled';
import containsEmoji from 'contains-emoji';
import tw from 'twin.macro';
import GithubColors from 'github-colors';

import { Layout } from '~/layouts';

import type { GetServerSideProps } from 'next';

import type { GitHubRepos, Project, Projects } from '~/types';

interface ProjectProps {
	serialisedProjects: string;
}

const Container = styled.div(tw`
	mt-24 mb-20 mx-2 sm:mx-6 lg:mb-28 lg:mx-8
`);

const Content = styled.div(tw`
	relative max-w-6xl mx-auto
`);

const ProjectsList = styled.ul(tw`
	grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3
`);

const ProjectCard = styled.li<{
	$color: string;
}>`
	${tw`
		flex flex-col col-span-1 \
		bg-white bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-15 \
		backdrop-filter backdrop-blur-sm \
		border \
		text-center \
		rounded-lg hover:shadow-lg divide-y divide-gray-200 cursor-pointer \
		transform motion-safe:hover:-translate-y-1 \
		transition ease-in-out duration-300
	`}

	border-color: ${({ $color }) => $color};
`;

export const getServerSideProps: GetServerSideProps<ProjectProps> = async () => {
	const response = await fetch('https://api.github.com/users/nurodev/repos');
	const json = (await response.json()) as GitHubRepos;

	const projects: Projects = json
		.map((repo) => {
			// @TODO: Check if the repo tags include portfolio tag
			// if (!repo.tags.includes("portfolio")) return

			if (repo.archived) return null;

			return {
				description: repo.description,
				icon: (() => {
					if (!repo.description) return undefined;

					const char = repo.description.split(' ')[0];

					return containsEmoji(char) ? char : undefined;
				})(),
				language: repo.language ? GithubColors.get(repo.language).color : undefined,
				name: repo.name,
				template: false,
				url: repo.html_url.toLowerCase(),
			} as Project;
		})
		.filter((project) => project !== null);

	return {
		props: {
			serialisedProjects: JSON.stringify(projects),
		},
	};
};

export default function ProjectsPage({ serialisedProjects }: ProjectProps) {
	const deserialisedProjects = JSON.parse(serialisedProjects) as Projects;

	return (
		<Layout.Default seo={{ title: 'nuro ─ projects' }}>
			<Container>
				<Content>
					<ProjectsList>
						{deserialisedProjects.map((project, index) => {
							if (!project.icon) return null;

							const trimmedDescription = project.description.split(' ');
							trimmedDescription.shift();
							const description = trimmedDescription.join(' ');

							return (
								<a
									href={project.url}
									key={index}
									rel="noreferrer noopener"
									target="_blank">
									<ProjectCard $color={project.language} key={project.name}>
										<div tw="flex-1 flex flex-col px-2 py-8">
											<h1 tw="mx-auto text-4xl">{project.icon}</h1>
											<h3 tw="mt-6 text-gray-900 dark:text-white text-sm font-medium">
												{project.name}
											</h3>
											<p tw="mt-2 text-gray-300">{description}</p>
										</div>
									</ProjectCard>
								</a>
							);
						})}
					</ProjectsList>
				</Content>
			</Container>
		</Layout.Default>
	);
}
