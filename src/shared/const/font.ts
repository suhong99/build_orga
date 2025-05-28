import localFont from 'next/font/local';

export const aggroFont = localFont({
	src: [
		{
			path: '../../../public/fonts/SBaggro-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/SBaggro-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
});
