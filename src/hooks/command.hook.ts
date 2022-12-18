import { useContext } from 'react';

import { CommandContext } from '~/components/Command/context';

import type { CommandContextValue } from '~/components/Command/context';

export function useCommand(): CommandContextValue {
	const value = useContext(CommandContext);
	if (!value)
		throw new Error(
			'No CommandContext value. Did you forget to wrap your component in <CommandContextProvider>?',
		);

	return value;
}
