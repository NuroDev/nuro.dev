import { Combobox, Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useMount, useUnmount } from 'react-use';

import { cn } from '~/utils/cn';
import { Icon } from '~/components/Icon';

const people = [
	{ id: 1, name: 'Leslie Alexander', url: '#' },
	// More people...
];

export function Commander(): JSX.Element {
	const [query, setQuery] = useState<string>('');

	const [open, setOpen] = useState<boolean>(false);

	const filteredPeople =
		query === ''
			? []
			: people.filter((person) => {
					return person.name.toLowerCase().includes(query.toLowerCase());
			  });

	function onKeyDown(event: KeyboardEvent): void {
		if (event.key === 'k' && event.metaKey) setOpen((open) => !open);
	}

	useMount(() => document.addEventListener('keydown', onKeyDown));

	useUnmount(() => document.removeEventListener('keydown', onKeyDown));

	return (
		<>
			<div className="animate-in slide-in-from-left duration-1000">
				<button
					className="default-transition default-focus flex w-full max-w-md items-center justify-between rounded-lg border-2 border-gray-100/50 bg-gray-100/25 px-4 py-2 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/25 dark:hover:border-gray-700 dark:hover:bg-gray-700/50"
					onClick={(): void => setOpen(true)}
					type="button"
				>
					<div className="inline-flex items-center justify-center space-x-2">
						<Icon name="Search" />
						<span>Search</span>
					</div>
					<span>⌘K</span>
				</button>
			</div>

			<Transition.Root
				afterLeave={(): void => setQuery('')}
				appear={true}
				as={Fragment}
				show={open}
			>
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
						<div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity dark:bg-opacity-75" />
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
							<Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur-md transition-all dark:border dark:border-gray-800 dark:bg-gray-800/50">
								<Combobox
								// onChange={(person): void => (window.location = person?.url)}
								>
									<div className="relative font-sans">
										<Icon
											aria-hidden={true}
											className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
											name="Search"
										/>
										<Combobox.Input
											className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
											placeholder="Search..."
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
										<p className="p-4 text-sm text-gray-500">
											No people found.
										</p>
									)}
								</Combobox>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
}
