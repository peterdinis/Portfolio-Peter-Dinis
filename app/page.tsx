import { ExperienceSection } from "@/components/expirience/ExpirienceSection";
import { ContactSection } from "@/components/home/ContactSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsSection } from "@/components/projects/ProjectSection";
import Footer from "@/components/shared/Footer";
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
			<Footer />
		</div>
	);
};

export default Homepage;
