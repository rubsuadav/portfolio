import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { Tag } from "@/components/tag";
import { ProjectItem } from "@/types/project-item";
import { skillIcons } from "./skill-icons";

import styles from "./projects-section.module.css";

interface ProjectsSectionProps {
  items: ProjectItem[];
}

export function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <section className={styles.projectsSection} id="proyectos">
      <SectionHeading eyebrow="Proyectos" title="Trabajo destacado" />
      <div className={styles.projectsSection__grid}>
        {items.map((project) => (
          <article key={project.title} className={styles.projectsSection__card}>
            <header className={styles.projectsSection__header}>
              <div className={styles.projectsSection__headingGroup}>
                <h3 className={styles.projectsSection__title}>{project.title}</h3>
                <p className={styles.projectsSection__period}>{project.period}</p>
              </div>
              <div className={styles.projectsSection__links}>
                {project.links.map((link) => (
                  <Link
                    className={styles.projectsSection__link}
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") ? "noreferrer" : undefined
                    }
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </header>

            <p className={styles.projectsSection__description}>{project.description}</p>

            <div
              className={styles.projectsSection__stack}
              aria-label={`Tecnologias de ${project.title}`}
            >
              {project.stack.map((stackItem) => (
                <Tag key={stackItem.label} icon={skillIcons[stackItem.icon]}>
                  {stackItem.label}
                </Tag>
              ))}
            </div>

            <ul className={styles.projectsSection__highlightList}>
              {project.highlights.map((highlight) => (
                <li className={styles.projectsSection__highlight} key={highlight}>
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
