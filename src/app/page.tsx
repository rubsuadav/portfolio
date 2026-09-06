import { Navbar } from "@/components/navbar";
import { LazySection } from "@/components/lazy-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { LanguagesSection } from "@/components/portfolio/languages-section";
import { PortfolioShell } from "@/components/portfolio/portfolio-shell";
import { ProfileSection } from "@/components/portfolio/profile-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import shellStyles from "@/components/portfolio/portfolio-shell.module.css";
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
      <LazySection id="inicio" threshold={0.1}>
        <HeroSection
          profile={profile}
          socialLinks={socialLinks}
          metrics={metrics}
        />
      </LazySection>
      <section id="sobre-mi" className={shellStyles.portfolioShell__about}>
        <LazySection id="perfil" threshold={0.2}>
          <ProfileSection />
        </LazySection>
        <LazySection id="experiencia" threshold={0.2}>
          <ExperienceSection items={experience} />
        </LazySection>
        <LazySection id="formacion" threshold={0.2}>
          <EducationSection
            education={education}
            certifications={certifications}
          />
        </LazySection>
      </section>
      <LazySection id="proyectos" threshold={0.2}>
        <ProjectsSection items={projects} />
      </LazySection>
      <LazySection id="competencias" threshold={0.2}>
        <SkillsSection groups={skills} />
      </LazySection>
      <LazySection id="idiomas" threshold={0.2}>
        <LanguagesSection items={languages} />
      </LazySection>
    </PortfolioShell>
  );
}
