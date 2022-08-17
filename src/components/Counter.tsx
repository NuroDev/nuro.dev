import { createSignal, onCleanup } from 'solid-js';

export function Counter() {
	const [count, setCount] = createSignal<number>(0);

	const interval = setInterval(() => setCount((c) => c + 1), 1000);

	onCleanup(() => clearInterval(interval));

	return <>Count: {count()}</>;
}
