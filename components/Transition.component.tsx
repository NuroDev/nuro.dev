import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Transition as HeadlessUiTransition } from '@headlessui/react';

import type { WithChildren, WithProps } from '~/types';

type TransitionProps = WithChildren &
	WithProps<typeof HeadlessUiTransition> & {
		delay?: number;
	};

const StyledTransition = styled(HeadlessUiTransition)<Pick<TransitionProps, 'delay'>>`
	&.enter {
		${tw`transition ease-in-out duration-1000`}

		transition-delay: ${({ delay }) => delay}ms;
	}
	&.enterFrom {
		${tw`transform scale-95 opacity-0`}
	}
	&.enterTo {
		${tw`transform scale-100 opacity-100`}
	}
	&.leave {
		${tw`transition ease-in-out duration-1000`}
	}
	&.leaveFrom {
		${tw`transform scale-100 opacity-100`}
	}
	&.leaveTo {
		${tw`transform scale-95 opacity-0`}
	}
`;

export function Transition({ delay = 0, children }: TransitionProps) {
	return (
		<StyledTransition
			delay={delay}
			appear={true}
			enter="enter"
			enterFrom="enterFrom"
			enterTo="enterTo"
			leave="leave"
			leaveFrom="leaveFrom"
			leaveTo="leaveTo"
			show={true}>
			{children}
		</StyledTransition>
	);
}
