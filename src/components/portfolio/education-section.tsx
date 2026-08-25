import { SectionHeading } from "@/components/section-heading";
import { CertificationItem } from "@/types/certification-item";
import { Education } from "@/types/education";

import styles from "./education-section.module.css";

interface EducationSectionProps {
  education: Education;
  certifications: CertificationItem[];
}

export function EducationSection({
  education,
  certifications,
}: EducationSectionProps) {
  return (
    <section className={styles.educationSection} id="formacion">
      <SectionHeading eyebrow="Formacion" title="Educacion y certificaciones" />

      <div className={styles.educationSection__grid}>
        <article className={styles.educationSection__educationCard}>
          <p className={styles.educationSection__label}>Educacion</p>
          <h3 className={styles.educationSection__title}>{education.title}</h3>
          <p className={styles.educationSection__subtitle}>{education.subtitle}</p>
          <p className={styles.educationSection__text}>{education.institution}</p>
          <p className={styles.educationSection__text}>{education.period}</p>
        </article>

        <div className={styles.educationSection__certificationList}>
          {certifications.map((certification) => (
            <article
              key={certification.title}
              className={styles.educationSection__certificationCard}
            >
              <div>
                <p className={styles.educationSection__label}>{certification.issuer}</p>
                <h3 className={styles.educationSection__title}>{certification.title}</h3>
              </div>
              <p className={styles.educationSection__meta}>{certification.period}</p>
              <p className={styles.educationSection__text}>{certification.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
