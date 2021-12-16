import splitbee from '@splitbee/web';

import { getProducts } from '~/lib';

import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { products, error } = await getProducts();
	if (error)
		return {
			redirect: error,
		};

	if (!params.name)
		return {
			redirect: {
				destination: '/store',
				permanent: true,
			},
		};

	const paramName = Array.isArray(params.name) ? params.name[0] : params.name;

	const product = products.find(
		(product) =>
			product.name.toLowerCase() === paramName.toLowerCase() ||
			product.id === paramName ||
			product.url.endsWith(paramName),
	);
	if (!product)
		return {
			redirect: {
				destination: '/store',
				permanent: false,
			},
		};

	splitbee.track(product.name, {
		id: product.id,
		type: 'gumroad',
		url: product.url,
	});

	return {
		redirect: {
			destination: product ? product.url : '/store',
			permanent: true,
		},
	};
};

export default function ReferralRedirectPage() {
	return null;
}
