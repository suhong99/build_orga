import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

export const metadata: Metadata = {
	title: {
		template: '%s | 그래, 이 픽',
		default: '그래, 이 픽',
	},
	description: '3초면 끝. 당신의 일상에 딱, 바로 이 픽!',
};

const pretendard = localFont({
	src: [
		{
			path: '../../public/fonts/Pretendard-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Pretendard-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Pretendard-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${pretendard.className} antialiased flex flex-col items-center w-full  min-h-screen mx-auto`}>{children}</body>
		</html>
	);
}
