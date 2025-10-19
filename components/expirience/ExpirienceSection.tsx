import { Briefcase, Calendar } from "lucide-react";

export const ExperienceSection = () => {
	const experiences = [
		{
			company: "Meditorial - Prague",
			position: "React Developer",
			period: "October 2024 - July 2025",
			description:
				"Development and modification of front-end internal applications",
			technologies: ["React", "Typescript", "Tailwind", "Nextjs", "Docker"],
		},
		{
			company: "Jumpsoft - Bratislava",
			position: "Full stack developer",
			period: "March 2023 - May 2024",
			description:
				"Developed MVP from scratch and scaled to support rapid user growth. Built both web and mobile applications.",
			technologies: [
				"React",
				"Typescript",
				"Spring Boot",
				"Twinzu",
				"Postgresql",
				"Mysql",
				"Docker",
				"AWS",
			],
		},
		{
			company: "Navysis - Brno",
			position: "Backend Developer",
			period: "February 2022 - January 2023",
			description:
				"The company was creating an e-shop where licenses for software products can be sold. I could be a seller or a producer. I was able to create different relationships in the application (seller - manufacturer). After logging in to the application, the person was able to view various licenses, and then was able to purchase the given license from a specific person (Seller, Ressler, Distributor) Technologies that were used: Nx(Monorepo) Vuejs, Nestjs, Docker, Postgresql, Jest. I was in a small 7-member team that created that application.",
			technologies: [
				"Nestjs",
				"Postgresql",
				"Sequelize",
				"Jest",
				"Nx",
				"Postgresql",
				"Docker",
			],
		},
		{
			company: "Think Easy s.r.o",
			position: "Frontend Developer Intership",
			period: "April 2021 - June 2021",
			description:
				"I was in this company during university (I didn't finish university, I was at university in Žilina for 1 year). Technologies React Typescript Redux (later React-Query). I worked on applications for the Retirement Home (the application was called Legato). The application, which is probably still under development, worked in such a way that the clients had bracelets on their hands and in that application the employee could see whether the client was in the room, or with family, or with the doctor).",
			technologies: ["React", "Typescript", "Bootstrap", "React-Query"],
		},
		{
			company: "Frontend Developer",
			position: "Fronted Developer, Think Easy s.r.o (Erasmus Project)",
			period: "October 2019",
			description:
				"Thanks to the Erasmus program, I had the opportunity to join Think Easy as a React developer. I was part of a 10‑member team. I used these technologies React Javascript Styled‑Components, Redux. I worked on applications for the company Carter s.r.o. (the company deals with printing).The application worked in such a way that the person who wanted to print something clicked on the link where the form was displayed, uploaded the necessary documents and through the backend and zoho hooks this information reached the Carter company employee.",
			technologies: [
				"React",
				"Node.js",
				"Javascript",
				"Redux",
				"Styled-Components",
			],
		},
		{
			company: "Fullstack Developer",
			position: "SPŠT Bardejov (work through school in one competition)",
			period: "September 2019 - July 2020",
			description:
				"A school competition organized by Unicorn, which has a branch in Prešov. My high school, which I attended, also got involved. It worked on the principle that the school chose a topic and an assigned worker from the unicorn company created the given application with the students. The frontend was made in React, the backend was Node.js and MongoDB (database) (the Unicorn company uses a modified version of react and node and mongo ). The result of almost a year's work was that a school library was created, where a student can borrow a book and return it. The teacher can do CRUD operations for books and categories and the admin (administrator) can give permissions to teachers (manage the library). I created the application myself",
			technologies: [
				"React",
				"Uuapp",
				"Nodejs",
				"Javascript",
				"Bootstrap",
				"Jest",
				"MongoDB",
			],
		},
	];

	return (
		<section id="expirience" className="py-20 bg-slate-900">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Professional Experience
					</h2>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						My journey in software development and the impact I&apos;ve made
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					{experiences.map((exp, index) => (
						<div key={index} className="relative mb-12 last:mb-0">
							{index !== experiences.length - 1 && (
								<div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
							)}

							<div className="flex items-start gap-6">
								<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
									<Briefcase className="w-6 h-6 text-white" />
								</div>

								<div className="flex-grow bg-slate-800/50 rounded-xl p-6 border border-slate-700">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
										<div>
											<h3 className="text-xl font-semibold text-white mb-1">
												{exp.position}
											</h3>
											<p className="text-blue-400 font-medium">{exp.company}</p>
										</div>
										<div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
											<Calendar size={16} />
											<span>{exp.period}</span>
										</div>
									</div>

									<p className="text-gray-300 mb-4">{exp.description}</p>

									<div className="flex flex-wrap gap-2">
										{exp.technologies.map((tech, techIndex) => (
											<span
												key={techIndex}
												className="px-3 py-1 bg-slate-700 text-blue-400 rounded-full text-sm"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
