import Footer from '@/features/layout/Footer';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<main className="flex flex-col flex-1 items-center w-full">{children}</main>
			<Footer />
		</>
	);
}
