import splitbee from '@splitbee/web';
import { useEffect } from 'react';

export function useAnalytics() {
	useEffect(() => {
		if (process.env.NODE_ENV !== 'production') return;

		splitbee.init({
			disableCookie: true,
		});
	}, []);
}
