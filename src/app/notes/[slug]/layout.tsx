import type { Metadata } from 'next';
import type { NextLayoutProps } from '~/types/next';

export const metadata: Metadata = {
	title: {
		default: 'note ─ nuro',
		template: '%s ─ nuro',
	},
	description: "Hey 👋 I'm Ben, a developer",
};

export default function PostsLayout({ children }: NextLayoutProps): JSX.Element {
	return <>{children}</>;
}
