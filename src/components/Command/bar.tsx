'use client';

import { useCommand } from '~/hooks/command.hook';

export function CommandBar(): JSX.Element {
	const { open } = useCommand();

	return <p>Open: {JSON.stringify(open)}</p>;
}
