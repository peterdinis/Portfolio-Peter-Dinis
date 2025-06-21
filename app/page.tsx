import { ContactSection } from "@/components/home/ContactSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ExperienceSection } from "@/components/expirience/ExpirienceSection";
import { ProjectsSection } from "@/components/projects/ProjectSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import type { NextPage } from "next";

const Homepage: NextPage = () => {
	return (
		<div className="min-h-screen">
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<ExperienceSection />
			<ContactSection />
		</div>
	);
};

export default Homepage;
