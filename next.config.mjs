import { withContentlayer } from 'next-contentlayer'

export default withContentlayer({
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: '@next/font/google', options: {
          subsets: ['latin']
        }
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
});
