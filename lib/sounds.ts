import { useSound } from 'use-sound';
import { usePersistantState } from '.';

export function useClick() {
	const state = usePersistantState();
	const result = useSound('/sounds/click.ogg', {
		volume: 0.05,
	});

	if (!state.get().sound) return [() => {}, null];

	return result;
}
