import { useRouter } from 'next/router';

import { Button, Navbar } from '..';

export function Back() {
	const router = useRouter();

	const goBack = () => router.back();

	return (
		<>
			<Button.Icon aria-label="Back" className="group" onClick={goBack}>
				<Navbar.Icon icon={'feather:arrow-left'} />
				<Navbar.Tooltip>Back</Navbar.Tooltip>
			</Button.Icon>
		</>
	);
}
