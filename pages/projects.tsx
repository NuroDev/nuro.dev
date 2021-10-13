import styled from '@emotion/styled';
import tw from 'twin.macro';

import { Layout } from '~/layouts';

const Container = styled.div(tw`
	mt-24 mb-20 mx-4 sm:mx-6 lg:mb-28 lg:mx-8
`);

const Content = styled.div(tw`
	relative max-w-6xl mx-auto
`);

const ProjectsList = styled.ul(tw`
	grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3
`);

const ProjectCard = styled.li<{ $color: string }>`
	${tw`
		flex flex-col col-span-1 \
		bg-white bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-15 \
		backdrop-filter backdrop-blur-sm \
		text-center \
		rounded-lg hover:shadow-xl divide-y divide-gray-200 cursor-pointer \
		transform hover:-translate-y-1 \
		transition ease-in-out duration-300
	`}

	border-width: 0.125rem;
	border-color: ${({ $color }) => $color};
`;

const people = [
	{
		color: '#f1e05a',
		name: 'Jane Cooper',
		title: 'Paradigm Representative',
		role: 'Admin',
		email: 'janecooper@example.com',
		telephone: '+1-202-555-0170',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	{
		color: '#0060ac',
		name: 'Jane Cooper',
		title: 'Paradigm Representative',
		role: 'Admin',
		email: 'janecooper@example.com',
		telephone: '+1-202-555-0170',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	{
		color: '#f34b7d',
		name: 'Jane Cooper',
		title: 'Paradigm Representative',
		role: 'Admin',
		email: 'janecooper@example.com',
		telephone: '+1-202-555-0170',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	{
		color: '#555555',
		name: 'Jane Cooper',
		title: 'Paradigm Representative',
		role: 'Admin',
		email: 'janecooper@example.com',
		telephone: '+1-202-555-0170',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	{
		color: '#00ADD8',
		name: 'Jane Cooper',
		title: 'Paradigm Representative',
		role: 'Admin',
		email: 'janecooper@example.com',
		telephone: '+1-202-555-0170',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
];

export default function Projects() {
	return (
		<Layout.Default>
			<Container>
				<Content>
					<ProjectsList>
						{people.map((person) => (
							<ProjectCard $color={person.color} key={person.email}>
								<div tw="flex-1 flex flex-col p-8">
									<img
										tw="w-8 h-8 flex-shrink-0 mx-auto rounded-full"
										src={person.imageUrl}
										alt=""
									/>
									<h3 tw="mt-6 text-gray-900 dark:text-white text-sm font-medium">
										{person.name}
									</h3>
									<dl tw="mt-1 flex-grow flex flex-col justify-between">
										<dt tw="sr-only">Title</dt>
										<dd tw="text-gray-500 dark:text-gray-300 text-sm">
											{person.title}
										</dd>
										<dt tw="sr-only">Role</dt>
										<dd tw="mt-3">
											<span tw="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
												{person.role}
											</span>
										</dd>
									</dl>
								</div>

								{/* <div>
									<div tw="-mt-px flex divide-x divide-gray-200 dark:divide-gray-500">
										<div tw="w-0 flex-1 flex">
											<a
												href={`mailto:${person.email}`}
												tw="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
												<Icon
													icon="feather:mail"
													tw="w-5 h-5 text-gray-400"
													aria-hidden="true"
												/>
												<span tw="ml-3">Email</span>
											</a>
										</div>
										<div tw="-ml-px w-0 flex-1 flex">
											<a
												href={`tel:${person.telephone}`}
												tw="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
												<Icon
													icon="feather:phone"
													tw="w-5 h-5 text-gray-400"
													aria-hidden="true"
												/>
												<span tw="ml-3">Call</span>
											</a>
										</div>
									</div>
								</div> */}
							</ProjectCard>
						))}
					</ProjectsList>
				</Content>
			</Container>
		</Layout.Default>
	);
}
