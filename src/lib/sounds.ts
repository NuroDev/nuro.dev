import { useSound } from 'use-sound';
import { usePersistantState } from '.';

import type { ReturnedValue } from 'use-sound/dist/types';

export function useClick(): ReturnedValue | [() => void, null] {
	const state = usePersistantState();
	const result = useSound('/sounds/click.ogg', {
		volume: 0.05,
	});

	if (!state.get().sound)
		return [
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			(): void => {},
			null,
		];

	return result;
}
