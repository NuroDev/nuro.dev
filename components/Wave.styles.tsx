import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Wave = styled.span`
	&:hover {
		${tw`inline-block`}
		animation: wave 2.25s ease-in-out infinite;
		transform-origin: 70% 70%;
	}

	@keyframes wave {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(14deg);
		}
		20% {
			transform: rotate(-8deg);
		}
		30% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
`;
