/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		domains: [
			// Discord assets
			'cdn.discordapp.com',

			// GitHub assets
			'raw.githubusercontent.com',

			// Spotify Album Art
			'i.scdn.co',

			// Streamable thumbnails
			'cdn-cf-east.streamable.com',

			// Unsplash
			'source.unsplash.com',
			'images.unsplash.com',
		],
	},
	// Inspired by: https://github.com/leerob/leerob.io/blob/main/next.config.js#L44-L81
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
					{
						key: 'Content-Security-Policy',
						value: ContentSecurityPolicy.replace(/\n/g, ''),
					},
					// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
					// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains; preload',
					},
					// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
					// Opt-out of Google FLoC: https://amifloced.org/
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
					},
				],
			},
		];
	},
	reactStrictMode: true,
	webpack: (config, { dev, isServer }) => {
		// Replace React with Preact only in client production build
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat',
			});
		}

		return config;
	},
};

const ContentSecurityPolicy = `
  child-src *.google.com streamable.com;
  connect-src *;
  default-src 'self';
  font-src 'self';
  img-src * blob: data:;
  media-src 'none';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.splitbee.io;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  worker-src 'self' 'unsafe-inline' blob:;
`;
