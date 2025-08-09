import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export const ProjectsSection = () => {
	const projects = [
		{
			title: "Snake game",
			description: "Snake game make with html css javascript",
			technologies: ["Html", "Bootstrap 5", "Javascript"],
			demo: "https://modest-elion-018f87.netlify.app/",
			github: "https://github.com/peterdinis?tab=repositories",
		},

		{
			title: "Code editor",
			description:
				"Simple code editor, for html, css, javascript written in React and Typescript",
			technologies: ["React", "Vite", "Typescript", "Material UI"],
			demo: "https://react-code-editor-flame.vercel.app/",
			github: "https://github.com/peterdinis/React-Code-Editor",
		},

		{
			title: "CV-Vision",
			description: "Application for analyzing CVs",
			technologies: [
				"Nextjs",
				"Typescript",
				"TailwindCss",
				"ShadcnUI",
				"OpenAI API",
				"Server Actions",
			],
			demo: "https://cv-vision-gzur.vercel.app/",
			github: "https://github.com/peterdinis/CV-Vision",
		},

		{
			title: "Docu Nest",
			description: "App for writing notes with AI",
			technologies: [
				"Nextjs",
				"Typescript",
				"Prisma",
				"NextUi",
				"TailwindCss",
				"Next-Auth",
			],
			demo: "docu-nest.vercel.app",
			github: "https://github.com/peterdinis/DocuNest",
		},

		{
			title: "Box-Drop",
			description: "Application for uploading files photos and other files, with option for sharing files with connected users",
			technologies: [
				"Nextjs",
				"Typescript",
				"Shadcn",
				"Hono.js",
				"Clerkjs",
				"Tailwindcss",
				"Drizzle ORM",
			],
			demo: "#",
			github: "https://github.com/peterdinis/Box-Drop",
		},
		{
			title: "Doc Space Backend",
			description: "Backend API for my google application clone",
			demo: "#",
			technologies: ["Python Django", "Django Rest Framework", "Django Channels", "Sqlite"],
			github: "https://github.com/peterdinis/Doc-Space-Backend",
		},

		{
			title: "PDF Crafter",
			description: "Application for building PDFs",
			technologies: ["Nextjs", "typescript", "TailwindCss", "ShadcnUI"],
			github: "https://github.com/peterdinis/PDF-Crafter",
			demo: "https://pdf-crafter.vercel.app/",
		},

		{
			title: "Task Flow",
			description: "Application for managing tasks and projects",
			technologies: [
				"Nextjs",
				"Typescript",
				"TailwindCss",
				"ShadcnUI",
				"Supabase",
				"Drizzle ORM",
			],
			github: "https://github.com/peterdinis/Task-Flow",
			demo: "#",
		},

		{
			title: "Lexicon",
			description: "Application for taking notes, writing events to calendar and more",
			technologies: [
				"Nextjs",
				"Typescript",
				"Graphql",
				"Shadcn UI"
			],
			github: "https://github.com/peterdinis/Lexicon",
			demo: "#"
		},


		{
			title: "Lexicon API",
			description: "API for application Lexicon",
			technologies: [
				"Nestjs",
				"Graphql",
				"Typescript",
				"Prisma"
			],
			github: "https://github.com/peterdinis/Lexicon-Backend",
			demo: ""
		}
	];

	return (
		<section id="projects" className="py-20 bg-slate-800">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Featured Projects
					</h2>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						A showcase of my recent work in web development, mobile apps, and
						software solutions
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<Card
							key={index}
							className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-300 group"
						>
							<CardHeader>
								<CardTitle className="text-white text-xl">
									{project.title}
								</CardTitle>
								<CardDescription className="text-gray-400">
									{project.description}
								</CardDescription>
							</CardHeader>

							<CardContent>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="px-3 py-1 bg-slate-800 text-blue-400 rounded-full text-sm"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-4">
									<Link
										href={project.github}
										className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
									>
										<Github size={16} />
										Code
									</Link>
									<Link
										href={project.demo}
										className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
									>
										<ExternalLink size={16} />
										Demo
									</Link>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center mt-12">
					<Link
						className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
						href="https://github.com/peterdinis"
					>
						View All Projects
					</Link>
				</div>
			</div>
		</section>
	);
};
