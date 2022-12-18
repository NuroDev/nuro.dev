'use client';

import { createContext, useState } from 'react';

import type { WithChildren } from '~/types/react';

export interface CommandContextValue {
	open: boolean;
	setOpen: (open: boolean) => void;
}

export const CommandContext = createContext<CommandContextValue | null>(null);

interface CommandContextProviderProps extends WithChildren {}

export function CommandContextProvider({ children }: CommandContextProviderProps): JSX.Element {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<CommandContext.Provider
			value={{
				open,
				setOpen,
			}}
		>
			{children}
		</CommandContext.Provider>
	);
}
