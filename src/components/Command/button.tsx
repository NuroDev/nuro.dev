'use client';

import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import { useCommand } from '~/hooks/command.hook';

export function CommandButton(): JSX.Element {
	const { open, setOpen } = useCommand();

	return (
		<div className="animate-in duration-1000 ease-spring motion-safe:slide-in-from-left-96">
			<Button
				className="-ml-24 inline-flex h-12 w-32 items-center justify-end rounded-l-none border-l-0 lg:-ml-32"
				border={true}
				onClick={(): void => setOpen(!open)}
				type="button"
			>
				<Icon className="mx-4 inline-block h-6 w-6" name="Command" />
				<span className="sr-only">Open command palette</span>
			</Button>
		</div>
	);
}
