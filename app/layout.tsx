import type { Metadata } from "next";
import "./globals.css";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { Ubuntu } from "next/font/google";

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
	authors: [
		{ name: "Peter Dinis", url: "https://portfolio-peter-dinis.vercel.app/" },
	],
	creator: "Peter Dinis",
	publisher: "Peter Dinis",
	metadataBase: new URL("https://portfolio-peter-dinis.vercel.app/"),
	openGraph: {
		title: "Peter Dinis | Full Stack Developer",
		description:
			"Explore the portfolio of Peter Dinis, showcasing modern web projects, skills, and experiences.",
		url: "https://portfolio-peter-dinis.vercel.app/",
		siteName: "Peter Dinis Portfolio",
		locale: "en_US",
		type: "website",
	},
};

const ubuntu = Ubuntu({
	weight: "500",
	adjustFontFallback: true,
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased ${ubuntu.className}`}>
				{children}
				<ScrollToTop />
			</body>
		</html>
	);
}
