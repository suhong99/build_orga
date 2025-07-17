const JsonLD = () => {
	const OrgJsonLD = {
		'@context': 'http://schema.org',
		'@type': 'Organization',
		name: 'GrayPick',
		url: 'https://graypick.co.kr',
		sameAs: ['https://www.instagram.com/gray_pick', 'https://www.threads.com/@gray_pick'],
	};

	const ItemListJsonLD = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: [
			{
				'@type': 'SiteNavigationElement',
				name: '홈',
				url: 'https://graypick.co.kr/',
			},
			{
				'@type': 'SiteNavigationElement',
				name: '법안 피드',
				url: 'https://graypick.co.kr/bill',
			},
			{
				'@type': 'SiteNavigationElement',
				name: '검색',
				url: 'https://graypick.co.kr/search',
			},
		],
	};

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(OrgJsonLD) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ItemListJsonLD) }} />
		</>
	);
};

export default JsonLD;
