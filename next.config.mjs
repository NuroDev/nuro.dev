// @ts-check

/** @type {import('next').NextConfig} */
const config = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		domains: [
			'cdn.discordapp.com', // Discord assets
			'raw.githubusercontent.com', // GitHub assets
			'i.scdn.co', // Spotify Album Art
			'cdn-cf-east.streamable.com', // Streamable thumbnails
			'source.unsplash.com', // Unsplash
			'images.unsplash.com', // Unsplash
		],
	},
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(glsl|vs|fs|frag|vert)$/,
			use: ['ts-shader-loader'],
		});

		return config;
	},
}

export default config;
