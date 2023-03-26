// @ts-check

import { withAxiom } from 'next-axiom';

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

const config = defineNextConfig({
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'cdn.discordapp.com',
      'i.scdn.co', // Spotify Album Art
    ],
  },
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/referrals/:path*',
      destination: '/api/refer/:path*',
    },
  ],
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|frag|vert)$/,
      use: ['ts-shader-loader'],
    });

    return config;
  },
});

export default withAxiom(config);
