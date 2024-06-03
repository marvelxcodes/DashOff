import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { PropsWithChildren } from 'react';

const inter = Poppins({
	subsets: ['latin'],
	weight: ['500', '600', '800', '400']
});

export const metadata: Metadata = {
	title: 'DashOff',
	description: 'Online multiplayer game'
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html
			className='antialiased'
			lang='en'
		>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
