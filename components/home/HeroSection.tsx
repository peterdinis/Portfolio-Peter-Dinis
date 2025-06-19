"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { ProgrammingScene3D } from "../3D/ProgrammingScene3D";

export const HeroSection = () => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const downloadCV = () => {
		const link = document.createElement("a");
		link.href = "/docs/cv-peter-dinis.pdf";
		link.download = "Peter-Dinis-CV.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const downloadEnCV = () => {
		const link = document.createElement("a");
		link.href = "/docs/cv-peter-dinis-en.pdf";
		link.download = "Peter-Dinis-CV-EN.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
			<div className="absolute inset-0">
				{/* Matrix-style background */}
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute top-0 left-0 w-full h-full bg-repeat opacity-30"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
							backgroundSize: "40px 40px",
						}}
					></div>
				</div>

				<div className="absolute inset-0 overflow-hidden">
					<motion.div
						className="absolute top-20 left-10 text-blue-400/20 font-mono text-sm"
						animate={{ y: [-10, 10, -10] }}
						transition={{
							duration: 6,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
					>
						{'{ "name": "developer" }'}
					</motion.div>
					<motion.div
						className="absolute top-40 right-20 text-green-400/20 font-mono text-sm"
						animate={{ y: [10, -10, 10] }}
						transition={{
							duration: 6,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
							delay: 0.5,
						}}
					>
						const skills = ["React", "Typescript", "Html", "Css", "Scss", "C#",
						"Docker", "AWS", "Nestjs", "Javascript", "Git", "Graphql", "Figma",
						"Nextjs", "TailwindCss", "Linux" ];
					</motion.div>
					<motion.div
						className="absolute bottom-40 left-20 text-purple-400/20 font-mono text-sm"
						animate={{ y: [-15, 15, -15] }}
						transition={{
							duration: 6,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
							delay: 1,
						}}
					>
						{"function buildAmazingApps() {"}
					</motion.div>
					<motion.div
						className="absolute bottom-60 right-10 text-yellow-400/20 font-mono text-sm"
						animate={{ y: [15, -15, 15] }}
						transition={{
							duration: 6,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
							delay: 0.7,
						}}
					>
						{'return "innovation";'}
					</motion.div>
					<motion.div
						className="absolute top-60 left-1/3 text-cyan-400/20 font-mono text-sm"
						animate={{ y: [-8, 8, -8] }}
						transition={{
							duration: 6,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
							delay: 0.3,
						}}
					>
						{'=> { code: "art" }'}
					</motion.div>
					<motion.div
						className="absolute bottom-20 right-1/3 text-pink-400/20 font-mono text-sm"
						animate={{ y: [12, -12, 12] }}
						transition={{
							duration: 6,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
							delay: 0.8,
						}}
					>
						{'console.log("Hello World");'}
					</motion.div>
				</div>

				{/* Glowing orbs */}
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
			</div>

			<div className="relative z-10 container mx-auto px-6 py-20">
				<div className="text-center mb-8">
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
							Full Stack
							<span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
								Developer
							</span>
							<span className="block font-mono text-green-400">&gt;</span>
						</h1>
					</motion.div>

					<motion.p
						className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						Transforming ideas into powerful digital solutions through clean
						code and innovative design.
						<span className="block mt-2 text-blue-400 font-mono">
							{"// Building the future, one line at a time"}
						</span>
					</motion.p>

					{/* Tech stack highlight */}
					<motion.div
						className="flex flex-wrap justify-center gap-3 mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						{[
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
						].map((tech, index) => (
							<motion.span
								key={index}
								className="px-4 py-2 bg-slate-800/50 text-blue-400 rounded-lg text-sm border border-blue-500/20 font-mono hover:bg-slate-700/50 transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{tech}
							</motion.span>
						))}
					</motion.div>

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
							whileTap={{ scale: 0.95 }}
						>
							<span className="font-mono">{"<ViewWork />"}</span>
						</motion.button>

						<motion.button
							onClick={() => scrollToSection("contact")}
							className="px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<span className="font-mono">{"{ contact: true }"}</span>
						</motion.button>

						<motion.button
							onClick={downloadCV}
							className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold transition-transform duration-200 hover:shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Download className="w-4 h-4" />
							<span className="font-mono">Download CV</span>
						</motion.button>

						<motion.button
							onClick={downloadEnCV}
							className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold transition-transform duration-200 hover:shadow-lg hover:shadow-orange-500/25 flex items-center gap-2"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Download className="w-4 h-4" />
							<span className="font-mono">Download EN CV</span>
						</motion.button>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className="mb-8"
				>
					<ProgrammingScene3D />
				</motion.div>

				{/* Programming Stats */}
				<motion.div
					className="flex justify-center gap-8"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1.2 }}
				>
					<motion.div
						className="text-center group cursor-pointer"
						whileHover={{ scale: 1.1 }}
					>
						<div className="text-2xl font-bold text-green-400 font-mono">
							50+
						</div>
						<div className="text-white/70 text-sm">Projects</div>
					</motion.div>
					<motion.div
						className="text-center group cursor-pointer"
						whileHover={{ scale: 1.1 }}
					>
						<div className="text-2xl font-bold text-yellow-400 font-mono">
							3+
						</div>
						<div className="text-white/70 text-sm">Years</div>
					</motion.div>
				</motion.div>
			</div>

			{/* Enhanced scroll indicator */}
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
