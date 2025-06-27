import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Peter Dinis | Full Stack Developer",
	description:
		"Portfolio of Peter Dinis – a passionate full stack developer specializing in modern web technologies like React, Next.js, Node.js, and more.",
	keywords: [
		"Peter Dinis",
		"Full Stack Developer",
		"Web Developer",
		"React Developer",
		"Next.js Portfolio",
		"JavaScript Developer",
		"Frontend",
		"Backend",
		"Software Engineer",
	],
	authors: [{ name: "Peter Dinis", url: "https://yourdomain.com" }],
	creator: "Peter Dinis",
	publisher: "Peter Dinis",
	metadataBase: new URL("https://yourdomain.com"),
	openGraph: {
		title: "Peter Dinis | Full Stack Developer",
		description:
			"Explore the portfolio of Peter Dinis, showcasing modern web projects, skills, and experiences.",
		url: "https://yourdomain.com",
		siteName: "Peter Dinis Portfolio",
		images: [
			{
				url: "https://yourdomain.com/og-image.png",
				width: 1200,
				height: 630,
				alt: "Peter Dinis Portfolio Preview",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Peter Dinis | Full Stack Developer",
		description:
			"Explore the portfolio of Peter Dinis – React, Next.js, Node.js, and beyond.",
		creator: "@yourtwitterhandle",
		images: ["https://yourdomain.com/og-image.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<ScrollToTop />
			</body>
		</html>
	);
}
