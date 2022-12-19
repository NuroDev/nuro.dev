'use client';

import { Fragment, useState } from 'react';
import { Combobox, Dialog, Transition } from '@headlessui/react';

import { cn } from '~/utils/cn';
import { Icon } from '~/components/Icon';
import { useCommand } from '~/hooks/command.hook';

import type { ArrayElement } from '~/types/util';

const people = [
	{ id: 1, name: 'Leslie Alexander', url: '#' },
	// More people...
];

export function CommandBar(): JSX.Element {
	const { open, setOpen } = useCommand();

	const [query, setQuery] = useState('');

	const filteredPeople =
		query === ''
			? []
			: people.filter((person) => {
					return person.name.toLowerCase().includes(query.toLowerCase());
			  });

	return (
		<Transition.Root show={open} as={Fragment} afterLeave={(): void => setQuery('')} appear>
			<Dialog as="div" className="relative z-10" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500/25 transition-opacity dark:bg-black/25" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Dialog.Panel className="default-transition mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 dark:divide-gray-700 dark:border-2 dark:border-gray-800 dark:bg-gray-900">
							<Combobox
							// onChange={(person: ArrayElement<typeof people>) => {}}
							>
								<div className="relative">
									<Icon
										aria-hidden={true}
										className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
										name="Search"
									/>
									<Combobox.Input
										className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 dark:text-white sm:text-sm"
										placeholder="Search"
										onChange={(event): void => setQuery(event.target.value)}
									/>
								</div>

								{filteredPeople.length > 0 && (
									<Combobox.Options
										static
										className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
									>
										{filteredPeople.map((person) => (
											<Combobox.Option
												key={person.id}
												value={person}
												className={({ active }): string =>
													cn(
														'cursor-default select-none px-4 py-2',
														active && 'bg-indigo-600 text-white',
													)
												}
											>
												{person.name}
											</Combobox.Option>
										))}
									</Combobox.Options>
								)}

								{query !== '' && filteredPeople.length === 0 && (
									<p className="p-4 text-sm text-gray-500">No people found.</p>
								)}
							</Combobox>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
