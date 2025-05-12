import Footer from '@/features/layout/Footer';
import Header from '@/features/layout/Header';

export default function Layout({
	children,
	overlay,
}: Readonly<{
	children: React.ReactNode;
	overlay: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<main className="flex flex-col flex-1 items-center w-full">{children}</main>
			<Footer />
			{overlay}
		</>
	);
}
