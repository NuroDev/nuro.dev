import { profile } from '~/data/profile';

export function getCanonicalUrl(): string {
	if (profile.domain) return `https://${profile.domain}`;

	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

	return `http://localhost:${process.env.PORT ?? 3000}`;
}
