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
			title: "E-Commerce Platform",
			description:
				"Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
			technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
			image: "/placeholder.svg",
			github: "#",
			demo: "#",
			status: "Production",
		},
		{
			title: "Task Management SaaS",
			description:
				"Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
			technologies: ["Next.js", "TypeScript", "Prisma", "WebSockets", "AWS"],
			image: "/placeholder.svg",
			github: "#",
			demo: "#",
			status: "Beta",
		},
		{
			title: "AI-Powered Analytics Dashboard",
			description:
				"Data visualization platform with machine learning insights, built with React and Python backend.",
			technologies: ["React", "Python", "TensorFlow", "D3.js", "Docker"],
			image: "/placeholder.svg",
			github: "#",
			demo: "#",
			status: "Development",
		},
		{
			title: "Mobile Banking App",
			description:
				"Secure mobile banking application with biometric authentication and real-time transaction processing.",
			technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Firebase"],
			image: "/placeholder.svg",
			github: "#",
			demo: "#",
			status: "Production",
		},
	];

	const getStatusColor = (status: string) => {
		switch (status) {
			case "Production":
				return "bg-green-500";
			case "Beta":
				return "bg-yellow-500";
			case "Development":
				return "bg-blue-500";
			default:
				return "bg-gray-500";
		}
	};

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
							<div className="relative overflow-hidden rounded-t-lg">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<div
									className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(project.status)}`}
								>
									{project.status}
								</div>
							</div>

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
									<a
										href={project.github}
										className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
									>
										<Github size={16} />
										Code
									</a>
									<a
										href={project.demo}
										className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
									>
										<ExternalLink size={16} />
										Demo
									</a>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center mt-12">
					<button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
						<Link href="https://github.com/peterdinis">
							View All Projects
						</Link>
					</button>
				</div>
			</div>
		</section>
	);
};
