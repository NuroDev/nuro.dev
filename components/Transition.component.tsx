import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Transition as HeadlessUiTransition } from '@headlessui/react';

import type { WithChildren, WithProps } from '~/types';

type TransitionProps = WithChildren &
	WithProps<typeof HeadlessUiTransition> & {
		delay?: number;
		duration?: number;
		show?: boolean;
	};

const StyledTransition = styled(HeadlessUiTransition)<Pick<TransitionProps, 'delay' | 'duration'>>`
	&.enter {
		${tw`transition ease-in-out`}

		transition-duration: ${({ duration }) => duration}ms;
		transition-delay: ${({ delay }) => delay}ms;
	}
	&.enterFrom {
		${tw`transform scale-95 opacity-0`}
	}
	&.enterTo {
		${tw`transform scale-100 opacity-100`}
	}
	&.leave {
		${tw`transition ease-in-out`}

		transition-duration: ${({ duration }) => duration}ms;
	}
	&.leaveFrom {
		${tw`transform scale-100 opacity-100`}
	}
	&.leaveTo {
		${tw`transform scale-95 opacity-0`}
	}
`;

/**
 * @TODO Fix the "Can't perform a React state update on an unmounted component." bug being caused here.
 */
export function Transition({ children, delay = 0, duration = 300, show = true }: TransitionProps) {
	return (
		<StyledTransition
			delay={delay}
			duration={duration}
			appear={true}
			enter="enter"
			enterFrom="enterFrom"
			enterTo="enterTo"
			leave="leave"
			leaveFrom="leaveFrom"
			leaveTo="leaveTo"
			show={show}
		>
			{children}
		</StyledTransition>
	);
}
