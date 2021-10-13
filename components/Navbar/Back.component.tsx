import { useRouter } from 'next/router';

import { Button, Navbar, Tooltip } from '..';

export function Back() {
	const router = useRouter();

	const goBack = () => router.back();

	return (
		<Tooltip text="Back">
			<Button.Icon aria-label="Back" className="group" onClick={goBack}>
				<Navbar.Icon icon={'feather:arrow-left'} />
			</Button.Icon>
		</Tooltip>
	);
}
