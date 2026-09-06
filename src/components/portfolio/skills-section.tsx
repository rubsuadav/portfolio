import { SectionHeading } from "@/components/section-heading";
import { Tag } from "@/components/tag";
import { SkillGroup } from "@/types/skill-group";

import { skillIcons } from "./skill-icons";
import styles from "./skills-section.module.css";

interface SkillsSectionProps {
  groups: SkillGroup[];
}

export function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <section className={styles.skillsSection} id="competencias">
      <SectionHeading eyebrow="Habilidades" title="Stack tecnico" />
      <div className={styles.skillsSection__grid}>
        {groups.map((group) => (
          <article key={group.title} className={styles.skillsSection__card}>
            <h3 className={styles.skillsSection__title}>{group.title}</h3>
            <div className={styles.skillsSection__tags}>
              {group.items.map((item) => (
                <Tag key={item.label} icon={skillIcons[item.icon]}>
                  {item.label}
                </Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
