import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useRouter } from 'next/router';
import { useSound } from 'use-sound';

import { Navbar } from '..';

const Button = styled.button(tw`
	relative inline-block \
	px-3 py-2 \
	bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 \
	text-gray-300 hover:text-gray-700 dark:hover:text-white \
	rounded-lg \
	text-sm font-medium \
	transition ease-in-out duration-300
	focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-100 dark:focus:ring-gray-500
`);

export function Back() {
	const router = useRouter();
	const [play] = useSound('/sounds/click.ogg', {
		volume: 0.25,
	});

	function goBack() {
		play();
		router.back();
	}

	return (
		<>
			<Button aria-label="Go back" className="group" onClick={goBack}>
				<Navbar.Icon icon={'feather:arrow-left'} />
				<Navbar.Tooltip>Go back</Navbar.Tooltip>
			</Button>
		</>
	);
}
