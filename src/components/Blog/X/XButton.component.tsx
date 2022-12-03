import { Button } from '~/components';
import { NavigationItemType } from '~/types';

import type { ButtonHTMLAttributes } from 'react';

interface XButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	external?: boolean;
	href: string;
	icon?: string;
	label: string;
}

export function XButton({ external, href, icon, label }: XButtonProps): JSX.Element {
	return (
		<Button.Standard type={NavigationItemType.LINK} external={external} href={href} icon={icon}>
			{label}
		</Button.Standard>
	);
}
