import { Navbar } from "@/components/navbar";
import { LazySection } from "@/components/lazy-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { Footer } from "@/components/portfolio/footer";
import { HeroSection } from "@/components/portfolio/hero-section";
import { PortfolioShell } from "@/components/portfolio/portfolio-shell";
import { ProfileSection } from "@/components/portfolio/profile-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import shellStyles from "@/components/portfolio/portfolio-shell.module.css";
import {
  certifications,
  educations,
  experience,
  metrics,
  navItems,
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
      <hr />
      <section id="sobre-mi" className={shellStyles.portfolioShell__about}>
        <LazySection id="perfil" threshold={0.2}>
          <ProfileSection />
        </LazySection>
        <hr />
        <LazySection id="experiencia" threshold={0.2}>
          <ExperienceSection items={experience} />
        </LazySection>
        <hr />
        <LazySection id="formacion" threshold={0.2}>
          <EducationSection
            educations={educations}
            certifications={certifications}
          />
        </LazySection>
      </section>
      <hr />
      <LazySection id="proyectos" threshold={0.2}>
        <ProjectsSection items={projects} />
      </LazySection>
      <hr />
      <LazySection id="competencias" threshold={0.2}>
        <SkillsSection groups={skills} />
      </LazySection>
      <Footer
        fullName={`${profile.name} ${profile.lastName}`}
        navigationItems={navItems}
        socialLinks={socialLinks}
      />
    </PortfolioShell>
  );
}
