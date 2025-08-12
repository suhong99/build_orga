import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '약관 및 정책',
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
