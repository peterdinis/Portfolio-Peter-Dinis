import { Cloud, Code, Database, Smartphone } from "lucide-react";

export const SkillsSection = () => {
	const skills = [
		{
			icon: Code,
			title: "Frontend Development",
			description:
				"Html, Css, Scss, Javascript, Typescript, React, Nextjs, TailwindCss, Tanstack Query",
			color: "from-blue-500 to-cyan-500",
		},
		{
			icon: Database,
			title: "Backend Development",
			description: "Node.js, MongoDB, Nestjs, Graphql, Mysql, Postgresql, C#",
			color: "from-green-500 to-emerald-500",
		},
		{
			icon: Cloud,
			title: "Cloud & DevOps",
			description: "AWS, Docker, Linux",
			color: "from-purple-500 to-pink-500",
		},
		{
			icon: Smartphone,
			title: "Mobile Development",
			description: "React Native, Progressive Web Apps",
			color: "from-orange-500 to-red-500",
		},
	];

	return (
		<section className="py-20 bg-slate-900">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Technical Expertise
					</h2>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						Full-stack capabilities across modern web technologies and cloud
						platforms
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{skills.map((skill, index) => {
						const Icon = skill.icon;
						return (
							<div
								key={index}
								className="group relative p-6 bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105"
							>
								<div
									className={`inline-flex p-3 rounded-lg bg-linear-to-r ${skill.color} mb-4`}
								>
									<Icon className="w-6 h-6 text-white" />
								</div>

								<h3 className="text-xl break-all font-semibold text-white mb-2">
									{skill.title}
								</h3>

								<p className="text-gray-400 leading-relaxed">
									{skill.description}
								</p>
								<div
									className={`absolute inset-0 bg-linear-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
								></div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
