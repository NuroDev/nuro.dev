import splitbee from '@splitbee/web';

export function install(): void {
	const { DEV, PROD } = import.meta.env;
	if (DEV && !PROD) return;

	splitbee.init({
		disableCookie: true,
	});

	// TODO: Add per-route `.track` call
}
