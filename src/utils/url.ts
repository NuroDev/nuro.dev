import { env } from '~/env';

export function getCanonicalUrl(): string {
	if (process.env.NEXTAUTH_URL) return process.env.NEXTAUTH_URL;

	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

	if (process.env.VERCEL) return `https://${env.DOMAIN}`;

	return `http://localhost:${process.env.PORT ?? 3000}`;
}
