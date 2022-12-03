import { useSound } from 'use-sound';
import { usePersistantState } from '.';

export function useClick() {
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
