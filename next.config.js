// @ts-check

const WindiCSS = require('windicss-webpack-plugin')
const { withContentlayer } = require('next-contentlayer')

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
	images: {
		domains: [
			'cdn.discordapp.com',
			'raw.githubusercontent.com',
			'i.scdn.co', // (Spotify Album Art)
			'source.unsplash.com',
			'images.unsplash.com',
		],
	},
	headers: async () => [
		{
			source: '/(.*)',
			headers: headers.map(([key, value]) => ({ key, value })),
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
		// @ts-expect-error
		config.plugins.push(new WindiCSS())

		return config;
	},
});

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

const headers = [
	['Content-Security-Policy', ContentSecurityPolicy.replace(/\n/g, '')], // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
	['Referrer-Policy', 'origin-when-cross-origin'], // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
	['Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload'], // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
	['Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()'], // https://amifloced.org/ | https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
]
