import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';

import { Pill } from '~/components';

import type { WithChildren, WithClassName } from '~/types';

interface IconPillProps extends WithClassName, WithChildren {
	icon: string;
	small?: boolean;
}

const StyledIcon = styled(Icon)<{ small: boolean }>`
	${tw`mt-0.5`}

	/* @TODO: Getting a "Received 'true' for a non-boolean attribute 'small'." warning here that needs fixing */
	${({ small }) => (small ? tw`mr-1.5` : tw`mr-3`)}
`;

export function IconPill({ children, className, icon, small = false }: IconPillProps) {
	return (
		<Pill.Standard className={className} small={small}>
			<StyledIcon icon={icon} small={small} />
			{children}
		</Pill.Standard>
	);
}
