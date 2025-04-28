import Header from '@/features/layout/Header';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<main className="flex flex-col flex-1 items-center w-full">{children}</main>
		</>
	);
}
