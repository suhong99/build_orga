import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'graydang-bucket.s3.ap-northeast-2.amazonaws.com',
				pathname: '/default/images/**',
			},
		],
	},
};

export default nextConfig;
