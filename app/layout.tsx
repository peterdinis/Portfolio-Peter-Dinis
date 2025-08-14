import type { Metadata } from "next";
import "./globals.css";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { Ubuntu } from "next/font/google";

export const metadata: Metadata = {
	title: "Peter Dinis | Full Stack Developer",
	description:
		"Discover the portfolio of Peter Dinis, a full stack web developer specializing in React, Next.js, Node.js, and modern web technologies. Explore projects, skills, and real-world applications.",
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
		"Fullstack Development",
	],
	authors: [
		{ name: "Peter Dinis", url: "https://portfolio-peter-dinis.vercel.app/" },
	],
	creator: "Peter Dinis",
	publisher: "Peter Dinis",
	metadataBase: new URL("https://portfolio-peter-dinis.vercel.app/"),
	openGraph: {
		title: "Peter Dinis – Full Stack Web Developer",
		description:
			"Explore the portfolio of Peter Dinis, showcasing projects in React, Next.js, Node.js, and more.",
		url: "https://portfolio-peter-dinis.vercel.app/",
		siteName: "Peter Dinis Portfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://portfolio-peter-dinis.vercel.app/og-image.png",
				width: 1200,
				height: 630,
				alt: "Peter Dinis Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Peter Dinis – Full Stack Web Developer",
		description:
			"Discover the portfolio of Peter Dinis, a full stack web developer specializing in modern web technologies like React, Next.js, and Node.js.",
		images: ["https://portfolio-peter-dinis.vercel.app/og-image.png"],
		creator: "@peter_dinis",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: "https://portfolio-peter-dinis.vercel.app/",
	},
};

const ubuntu = Ubuntu({
	weight: "500",
	adjustFontFallback: true,
	subsets: ["latin-ext"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${ubuntu.className}`}>
				{children}
				<ScrollToTop />
			</body>
		</html>
	);
}
