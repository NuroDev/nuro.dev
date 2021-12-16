import Image from 'next/image';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { getProducts } from '~/lib';
import { Layout } from '~/layouts';
import { List } from '~/components';
import { ListActionType } from '~/types';

import type { GetServerSideProps } from 'next';

import type { StrippedGumroadProduct } from '~/types';

interface StoreProps {
	products: Array<StrippedGumroadProduct>;
}

const Container = styled.div(tw`
	my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8
`);

const Content = styled.div(tw`
	relative max-w-xl mx-auto
`);

const ThumbnailContainer = styled.div(tw`
	relative h-32 sm:h-48 \
	border-b border-gray-100 dark:border-gray-500
`);

export const getServerSideProps: GetServerSideProps<StoreProps> = async () => {
	const { products, error } = await getProducts();
	if (error)
		return {
			redirect: error,
		};

	return {
		props: {
			products,
		},
	};
};

export default function StorePage({ products }: StoreProps) {
	return (
		<Layout.Default seo={{ title: 'nuro ─ store' }}>
			<Container>
				<Content>
					<List.Container
						item={(product, index) => (
							<List.Item
								actions={[
									{
										type: ListActionType.LINK,
										href: product.url,
										icon: 'feather:dollar-sign',
										label: 'Buy Now',
									},
								]}
								childrenBefore={true}
								description={product.description}
								key={index}
								title={product.name}>
								<ThumbnailContainer>
									<Image
										alt={product.name}
										draggable={false}
										layout="fill"
										objectFit="cover"
										loading="lazy"
										src={product.thumbnail}
										tw="rounded-t-lg"
									/>
								</ThumbnailContainer>
							</List.Item>
						)}
						items={products}
					/>
				</Content>
			</Container>
		</Layout.Default>
	);
}
