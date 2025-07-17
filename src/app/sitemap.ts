import { DEPLOY_URL } from '@/shared/const/url';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	return [
		// 메인 히어로 페이지
		{
			url: `${DEPLOY_URL}`,
			lastModified: now,
			priority: 1.0,
		},

		// 주요 노출 페이지
		{
			url: `${DEPLOY_URL}/bill`,
			lastModified: now,
			priority: 1,
		},
		{
			url: `${DEPLOY_URL}/search`,
			lastModified: now,
			priority: 0.8,
		},
	];
}
