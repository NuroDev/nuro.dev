import styled from '@emotion/styled';
import tw from 'twin.macro';

import { getProjects } from '~/lib/projects';
import { Layout } from '~/layouts';
import { List } from '~/components';
import { ListActionType } from '~/types';

import type { GetServerSideProps } from 'next';

import type { ListAction, Projects } from '~/types';

interface ProjectProps {
	projects: string;
}

const Container = styled.div(tw`
	my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8
`);

const Content = styled.div(tw`
	relative max-w-xl mx-auto
`);

const ProjectIcon = styled.span(tw`
	text-xl
`);

export const getServerSideProps: GetServerSideProps<ProjectProps> = async ({ res }) => {
	res.setHeader('Cache-Control', 'public, max-age=3600, immutable');

	const projects = await getProjects();

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
