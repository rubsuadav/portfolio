import { Navbar } from "@/components/navbar";
import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { LanguagesSection } from "@/components/portfolio/languages-section";
import { PortfolioShell } from "@/components/portfolio/portfolio-shell";
import { ProfileSection } from "@/components/portfolio/profile-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import {
  certifications,
  education,
  experience,
  languages,
  metrics,
  profile,
  projects,
  skills,
  socialLinks,
} from "@/data/portfolio";

export default function Home() {
  return (
    <PortfolioShell>
      <Navbar />
      <HeroSection
        profile={profile}
        socialLinks={socialLinks}
        metrics={metrics}
      />
      <ProfileSection />
      <ExperienceSection items={experience} />
      <ProjectsSection items={projects} />
      <SkillsSection groups={skills} />
      <EducationSection education={education} certifications={certifications} />
      <LanguagesSection items={languages} />
    </PortfolioShell>
  );
}
