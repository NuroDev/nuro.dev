import { Button } from '~/components';
import { NavigationItemType } from '~/types';

interface XButtonProps {
	external?: boolean;
	href: string;
	icon?: string;
	label: string;
}

export function XButton({ external, href, icon, label }: XButtonProps) {
	return (
		<Button.Standard type={NavigationItemType.LINK} external={external} href={href} icon={icon}>
			{label}
		</Button.Standard>
	);
}
