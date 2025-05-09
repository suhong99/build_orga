import Header from '@/features/layout/Header';

export default function Layout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<main className="flex flex-col flex-1 items-center w-full">{children}</main>
			{modal}
		</>
	);
}
