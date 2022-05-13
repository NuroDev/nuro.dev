import { fetchProjects } from '~/lib/projects';
import { Layout } from '~/layouts';
import { List } from '~/components';
import { ListActionType } from '~/types';

import type { GetStaticProps } from 'next';

import type { ListAction, Project } from '~/types';

interface ProjectProps {
	stringifiedProjects: string;
}

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
	const projects = await fetchProjects();

	return {
		props: {
			stringifiedProjects: JSON.stringify(projects),
		},
		revalidate: 3600,
	};
};

export default function ProjectsPage({ stringifiedProjects }: ProjectProps) {
	const projects = JSON.parse(stringifiedProjects) as Array<Project>;

	return (
		<Layout.Default seo={{ title: 'nuro ─ projects' }}>
			<div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
				<div className="relative max-w-xl mx-auto">
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
								icon={<span className="text-xl">{project.icon}</span>}
								key={index}
								title={project.name}
							/>
						)}
						items={projects}
					/>
				</div>
			</div>
		</Layout.Default>
	);
}
