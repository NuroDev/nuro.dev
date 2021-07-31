import splitbee from '@splitbee/web';

export function install(): void {
	if (!import.meta.env.PROD) return;

	splitbee.init({
		disableCookie: true,
	});
}
