import { SectionHeading } from "@/components/section-heading";
import { CertificationItem } from "@/types/certification-item";
import { Education } from "@/types/education";

import styles from "./education-section.module.css";

interface EducationSectionProps {
  educations: Education[];
  certifications: CertificationItem[];
}

export function EducationSection({
  educations,
  certifications,
}: EducationSectionProps) {
  return (
    <section className={styles.educationSection} id="formacion">
      <SectionHeading eyebrow="Formación" />

      <div className={styles.educationSection__educationGrid}>
        {educations.map((item) => (
          <article
            key={`${item.title}-${item.institution}`}
            className={styles.educationSection__educationCard}
          >
            <h3 className={styles.educationSection__title}>{item.title}</h3>
            <p className={styles.educationSection__subtitle}>{item.subtitle}</p>
            <p className={styles.educationSection__text}>{item.institution}</p>
            <p className={styles.educationSection__text}>{item.period}</p>
            <p className={styles.educationSection__text}>Nota: {item.mark}</p>
          </article>
        ))}
      </div>

      <hr />
      <div className={styles.educationSection__certifications}>
        <h1 className={styles.educationSection__label}>Certificaciones</h1>
        <div className={styles.educationSection__certificationList}>
          {certifications.map((certification) => (
            <article
              key={certification.title}
              className={styles.educationSection__certificationCard}
            >
              <div>
                <p className={styles.educationSection__label}>
                  {certification.issuer}
                </p>
                <h3 className={styles.educationSection__title}>
                  {certification.title}
                </h3>
              </div>
              <p className={styles.educationSection__meta}>
                {certification.period}
              </p>
              <p className={styles.educationSection__text}>
                {certification.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
