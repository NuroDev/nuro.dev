'use client';

import { useEvent } from 'react-use';
import useSound from 'use-sound';

export function Click(): null {
	const [playClickSound] = useSound('/sounds/click.ogg', {
		volume: 0.05, // TODO: Make this configurable via user settings
	});

	useEvent('mousedown', playClickSound);
	useEvent('mouseup', playClickSound);

	return null;
}
