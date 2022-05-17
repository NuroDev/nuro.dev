// @ts-check

const WindiCSS = require('windicss-webpack-plugin')

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
	images: {
		domains: [
			// Discord assets
			'cdn.discordapp.com',

			// GitHub assets
			'raw.githubusercontent.com',

			// Spotify Album Art
			'i.scdn.co',

			// Unsplash
			'source.unsplash.com',
			'images.unsplash.com',
		],
	},
	headers: () => [
		{
			source: '/(.*)',
			headers: [
				/**
				 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
				 */
				{ key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\n/g, '') },

				/**
				 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
				 */
				{ key: 'Referrer-Policy', value: 'origin-when-cross-origin' },

				/**
				 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
				 */
				{ key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },

				/**
				 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
				 * @see Opt-out of Google FLoC: https://amifloced.org/
				 */
				{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
			],
		},
	],
	reactStrictMode: true,
	rewrites: async () => [
		{ source: "/bee.js", destination: "https://cdn.splitbee.io/sb.js" },
		{ source: "/_hive/:slug", destination: "https://hive.splitbee.io/:slug" },
	],
	webpack: (config, { dev, isServer }) => {
		// Replace React with Preact only in client production build
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat',
			});
		}

		// Load GLSL shaders as raw text
		config.module.rules.push({
			test: /\.(glsl|vs|fs|vert|frag)$/,
			use: {
				loader: 'raw-loader'
			}
		})

		// Inject WindiCSS
		config.plugins.push(new WindiCSS())

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
