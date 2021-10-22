import styled from '@emotion/styled';
import toast from 'react-hot-toast';
import tw from 'twin.macro';
import { useCopyToClipboard } from 'react-use';
import { useTheme } from 'next-themes';

import TailwindCSS from '~/tailwind.config';
import { List } from '~/components';
import { Layout } from '~/layouts';
import { ListAction, ListActionType, Theme } from '~/types';

import type { CSSProperties } from 'react';
import type { GetStaticProps } from 'next';

import type { Referrals } from '~/types';

interface ReferralsProps {
	referrals?: Referrals;
}

const Container = styled.div(tw`
	flex items-start sm:items-center justify-center w-full h-screen
`);

const Content = styled.div(tw`
	max-w-3xl overflow-hidden \
	py-16 sm:py-0
`);

export const getStaticProps: GetStaticProps<ReferralsProps> = async () => {
	const { default: rawReferrals } = await import('~/data/referrals.json');

	const referrals = (rawReferrals as Referrals).sort((a, b) => {
		const nameA = a.name.toUpperCase();
		const nameB = b.name.toUpperCase();

		if (nameA < nameB) return -1;
		if (nameA > nameB) return 1;
		return 0;
	});

	return {
		props: {
			referrals,
		},
	};
};

export default function ReferralsPage({ referrals }: ReferralsProps) {
	const { theme } = useTheme();
	const [state, copyToClipboard] = useCopyToClipboard();

	const grayColors = TailwindCSS.theme.extend.colors.gray;
	const isDark = theme === Theme.DARK;
	const toastOptions = {
		style: {
			background: isDark ? grayColors[800] : grayColors[50],
			color: isDark ? grayColors[400] : grayColors[700],
			borderWidth: '1px',
			borderColor: isDark ? grayColors[500] : grayColors[100],
		} as CSSProperties,
	};

	function onCopy(code: string) {
		copyToClipboard(code);

		if (state.error) {
			toast.error('Failed to copy code', toastOptions);
			return;
		}

		toast.success('Copied code', toastOptions);
	}

	return (
		<Layout.Default>
			<Container>
				<Content>
					<List.Container
						item={(referral, index) => (
							<List.Item
								actions={[
									{
										type: ListActionType.LINK,
										icon: 'feather:home',
										label: `${referral.name} homepage`,
										href: referral.homepage,
									},
									...(referral.code
										? [
												{
													type: ListActionType.BUTTON,
													icon: 'feather:hash',
													label: 'Copy Referral Code',
													onClick: () => onCopy(referral.code),
												} as ListAction,
										  ]
										: []),
									{
										type: ListActionType.LINK,
										icon: 'feather:external-link',
										label: 'Referral Link',
										href: referral.url,
									},
								]}
								description={referral.description}
								icon={referral.icon}
								iconColor={referral.color}
								key={index}
								title={referral.name}
							/>
						)}
						items={referrals}
					/>
				</Content>
			</Container>
		</Layout.Default>
	);
}
