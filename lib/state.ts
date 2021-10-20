import { createState, useState } from '@hookstate/core';
import { Persistence } from '@hookstate/persistence';
import { useEffect } from 'react';

import type { Settings } from '~/types';

const defaultStatus = createState<Settings>({
	animations: true,
	sound: true,
});

export const STATE_KEY = 'settings';

export function usePersistantState() {
	const persistance = Persistence(STATE_KEY);
	const state = useState<Settings>(defaultStatus);

	useEffect(() => {
		state.attach(persistance);
	}, [state]);

	return state;
}
