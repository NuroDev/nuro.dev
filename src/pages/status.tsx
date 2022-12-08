import { Layout } from '~/layouts';
import { Status } from '~/components';

import profile from '~/data/profile.json';
import type { Profile } from '~/types/profile';
const { alias } = profile as unknown as Profile;

export default function StatusPage(): JSX.Element {
	return (
		<Layout.Default seo={{ title: `${alias} ─ status` }}>
			<div className="flex flex-grow min-h-screen pt-16 pb-12">
				<div className="flex-grow flex flex-col justify-center max-w-sm sm:max-w-lg w-full mx-auto px-0 sm:px-16">
					<Status.Widget />
				</div>
			</div>
		</Layout.Default>
	);
}
