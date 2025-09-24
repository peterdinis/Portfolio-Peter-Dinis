"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ProgrammingScene3D } from "../3D/ProgrammingScene3D";
import Typewriter from "../shared/TypeWritter";

export const HeroSection = () => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) element.scrollIntoView({ behavior: "smooth" });
	};

	const { scrollY } = useScroll();
	const y1 = useTransform(scrollY, [0, 500], [0, 50]);
	const y2 = useTransform(scrollY, [0, 500], [0, -50]);

	const techStack = [
		"React",
		"Typescript",
		"Html",
		"Css",
		"Scss",
		"C#",
		"Docker",
		"AWS",
		"Nestjs",
		"Javascript",
		"Git",
		"Graphql",
		"Figma",
		"Nextjs",
		"TailwindCss",
		"Linux",
	];

	return (
		<section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
			{/* Background floating blobs */}
			<motion.div
				className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
				animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
				transition={{
					duration: 4,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			/>
			<motion.div
				className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
				animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
				transition={{
					duration: 4,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
					delay: 1,
				}}
			/>
			<motion.div
				className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"
				animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
				transition={{
					duration: 4,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
					delay: 0.5,
				}}
			/>

			{/* Floating code snippets with parallax */}
			<motion.div
				style={{ y: y1 }}
				className="absolute top-20 left-10 text-blue-400/20 font-mono text-sm"
			>
				{'{ "name": "developer" }'}
			</motion.div>
			<motion.div
				style={{ y: y2 }}
				className="absolute top-40 right-20 text-green-400/20 font-mono text-sm"
			>
				{`const skills = ["React","Typescript","Html","Css","Scss","C#","Docker","AWS","Nestjs","Javascript","Git","Graphql","Figma","Nextjs","TailwindCss","Linux"];`}
			</motion.div>

			{/* Main container */}
			<div className="relative z-10 container mx-auto px-6 py-20 text-center">
				<motion.div
					className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span className="text-blue-400 text-sm font-medium">
						👨‍💻 Crafting Digital Solutions
					</span>
				</motion.div>

				{/* Name & Role */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
						<span className="block font-mono text-green-400">&lt;</span>
						<span className="block text-blue-400 font-light text-2xl md:text-3xl mb-2">
							Peter Dinis
						</span>
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 font-semibold">
							<Typewriter
								words={[
									"Full Stack Developer",
									"UI/UX Enthusiast",
									"React Specialist",
									"Node.js Specialist",
								]}
							/>
						</span>
						<span className="block font-mono text-green-400">/&gt;</span>
					</h1>
				</motion.div>

				{/* Subtitle */}
				<motion.p
					className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					Transforming ideas into powerful digital solutions through clean code
					and innovative design.
					<span className="block mt-2 text-blue-400 font-mono">
						{"// Building the future, one line at a time"}
					</span>
				</motion.p>

				{/* Tech badges */}
				<motion.div
					className="flex flex-wrap justify-center gap-3 mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					{techStack.map((tech) => (
						<motion.span
							key={tech}
							className="px-4 py-2 rounded-lg text-sm font-mono border border-blue-500/20 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-green-400 transition-all duration-500"
							whileHover={{ scale: 1.1 }}
						>
							{tech}
						</motion.span>
					))}
				</motion.div>

				{/* Buttons */}
				<motion.div
					className="flex flex-wrap gap-4 justify-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
				>
					<motion.button
						onClick={() => scrollToSection("projects")}
						className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold transition-transform duration-200 hover:shadow-lg hover:shadow-blue-500/25"
						whileHover={{ scale: 1.05 }}
					>
						<span className="font-mono">{`<ViewWork />`}</span>
					</motion.button>

					<motion.button
						onClick={() => scrollToSection("contact")}
						className="px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm"
						whileHover={{ scale: 1.05 }}
					>
						<span className="font-mono">{`<Contact />`}</span>
					</motion.button>

					<motion.button
						onClick={() => scrollToSection("expirience")}
						className="px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 text-white rounded-lg font-semibold transition-transform duration-200 hover:shadow-lg hover:shadow-green-500/25"
						whileHover={{ scale: 1.05 }}
					>
						<span className="font-mono">{`<Expirience />`}</span>
					</motion.button>
				</motion.div>

				{/* 3D Scene */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className="mb-8"
				>
					<ProgrammingScene3D />
				</motion.div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				animate={{ y: [0, 10, 0] }}
				transition={{
					duration: 2,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			>
				<div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
					<motion.div
						className="w-1 h-3 bg-white/50 rounded-full mt-2"
						animate={{ opacity: [0.5, 1, 0.5] }}
						transition={{
							duration: 2,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
					/>
				</div>
				<p className="text-white/50 text-xs mt-2 text-center font-mono">
					scroll()
				</p>
			</motion.div>
		</section>
	);
};
