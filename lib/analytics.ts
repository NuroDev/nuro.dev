import splitbee from '@splitbee/web';
import { useEffect } from 'react';

export function useAnalytics() {
	useEffect(() => {
		splitbee.init({
			disableCookie: false,
		});
	}, []);
}
