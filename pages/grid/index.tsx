import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useCallback, useState } from 'react';

import { Animate } from '~/components';
import { Layout } from '~/layouts';
import { Theme } from '~/types';

import type { WithChildren, WithClassName } from '~/types';
import { Icon } from '@iconify/react';

interface CardProps extends WithChildren, WithClassName {}

function Card({ children, className }: CardProps) {
	return (
		<div
			className={clsx(
				'flex justify-center items-center h-64 bg-white dark:(bg-gray-800 ring-gray-700 text-white) ring ring-gray-100 rounded-3xl hover:shadow-sm text-gray-700 text-2xl font-extrabold',
				className,
			)}>
			{children}
		</div>
	);
}

const cards = [
	null,
	{ className: 'md:col-span-2' },
	null,
	{ className: 'md:col-span-2' },
	null,
	null,
];

const THEME_ICON: Record<Theme, string> = {
	[Theme.SYSTEM]: 'feather:monitor',
	[Theme.LIGHT]: 'feather:sun',
	[Theme.DARK]: 'feather:moon',
};

export default function GridIndexPage() {
	const { setTheme, theme } = useTheme();

	const [themeCycle, setThemeCycle] = useState<number>(0);

	const handleThemeChange = useCallback(() => {
		let nextThemeCycle = themeCycle + 1;
		if (nextThemeCycle >= Object.keys(Theme).length) nextThemeCycle = 0;
		setThemeCycle(nextThemeCycle);

		setTheme(Object.values(Theme)[nextThemeCycle]);
	}, [setTheme, themeCycle]);

	return (
		<Layout.Base className="min-h-screen p-8 overflow-hidden">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{cards.map((card, i) => (
					<Animate
						as="button"
						animation={{ y: [50, 0], opacity: [0, 1] }}
						className={clsx(card?.className, 'bg-transparent cursor-pointer')}
						key={i}
						transition={{ delay: 0.1 * (i + 1), duration: 0.5, repeat: 0 }}
						onClick={handleThemeChange}>
						<Card className="flex-col space-y-2">
							<div className="space-x-4">
								<Icon icon={THEME_ICON[theme]} />
								<span>
									{theme?.charAt(0).toUpperCase() + theme?.slice(1)} Theme
								</span>
							</div>
							<p className="text-xs text-gray-400 tracking-wide">
								Click to cycle through
							</p>
						</Card>
					</Animate>
				))}
			</div>
		</Layout.Base>
	);
}
