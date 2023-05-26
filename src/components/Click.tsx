import { makeAudioPlayer } from '@solid-primitives/audio';
import { onCleanup, onMount } from 'solid-js';

export function Click(): null {
	const { play, setVolume } = makeAudioPlayer('/sounds/click.ogg');

	onMount((): void => {
		setVolume(0.5);
		document.addEventListener('mousedown', play);
		document.addEventListener('mouseup', play);
	});

	onCleanup((): void => {
		document.removeEventListener('mousedown', play);
		document.removeEventListener('mouseup', play);
	});

	return null;
}
