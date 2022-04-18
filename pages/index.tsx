import { differenceInYears, isSameDay, isSameMonth } from 'date-fns';
import { Icon } from '@iconify/react';

import { Button, Event, Pill, Transition, Wave } from '~/components';
import { EventType, NavigationItemType } from '~/types';
import { Layout } from '~/layouts';
import { usePersistantState } from '~/lib';

import type { NavigationItem } from '~/types';

const ACTIONS: Array<NavigationItem> = [
	{
		type: NavigationItemType.LINK,
		href: '/blog',
		icon: <Icon className="mr-3" icon="feather:edit-3" />,
		text: 'Blog',
	},
	{
		type: NavigationItemType.LINK,
		href: '/projects',
		icon: <Icon className="mr-3" icon="feather:copy" />,
		text: 'Projects',
	},
	{
		type: NavigationItemType.LINK,
		external: true,
		href: 'https://github.com/nurodev',
		icon: <Icon className="mr-3" icon="feather:github" />,
		text: 'GitHub',
	},
];

export default function HomePage() {
	const { animations: animations } = usePersistantState().get();

	const today = new Date();
	const birthday = new Date('1997-08-09');
	const age = differenceInYears(today, birthday);
	const isBirthday = isSameDay(today, birthday) && isSameMonth(today, birthday);

	const description = `I am a ${age} year old software engineer & games developer`;

	return (
		<Layout.Default>
			{isBirthday && <Event event={EventType.BIRTHDAY} />}
			<div className="min-h-screen flex items-center justify-center py-12">
				<div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center">
					<Transition duration={1000} enabled={animations}>
						<h1 className="text-gray-500 dark:text-white text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold">
							Hey <Wave>👋</Wave> I&apos;m Ben, <br className="hidden sm:block" />a{' '}
							<Pill.Standard className="mt-4">developer</Pill.Standard>
						</h1>
					</Transition>

					<Transition delay={500} duration={1000} enabled={animations}>
						<p className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-300 sm:text-lg md:text-xl md:max-w-3xl">
							{description}
						</p>
					</Transition>

					<div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4">
						{ACTIONS.map((action, index) => {
							if (action.type !== NavigationItemType.LINK) return null;

							return (
								<Transition
									className="w-full sm:w-auto"
									delay={1000 + index * 100}
									key={index}
									duration={1000}
									enabled={animations}>
									<Button.Outline href={action.href}>
										{action.icon}
										<span className="-mt-1 py-1">{action.text}</span>
									</Button.Outline>
								</Transition>
							);
						})}
					</div>
				</div>
			</div>
		</Layout.Default>
	);
}
