import { SectionHeading } from "@/components/section-heading";
import { ExperienceItem } from "@/types/experience-item";

import styles from "./experience-section.module.css";

interface ExperienceSectionProps {
  items: ExperienceItem[];
}

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section className={styles.experienceSection} id="experiencia">
      <SectionHeading eyebrow="Experiencia" title="Trayectoria" />
      <div className={styles.experienceSection__timeline}>
        {items.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className={styles.experienceSection__card}
          >
            <header className={styles.experienceSection__header}>
              <div className={styles.experienceSection__headingGroup}>
                <h3 className={styles.experienceSection__title}>
                  {item.title} - {item.company}
                </h3>
                <p className={styles.experienceSection__type}>{item.type}</p>
              </div>
              <span className={styles.experienceSection__period}>{item.period}</span>
            </header>
            <p className={styles.experienceSection__description}>{item.description}</p>
            <ul className={styles.experienceSection__achievementList}>
              {item.achievements.map((achievement) => (
                <li className={styles.experienceSection__achievement} key={achievement}>
                  {achievement}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
