import { SectionHeading } from "@/components/section-heading";
import { Tag } from "@/components/tag";

import styles from "./languages-section.module.css";

interface LanguagesSectionProps {
  items: string[];
}

export function LanguagesSection({ items }: LanguagesSectionProps) {
  return (
    <section className={styles.languagesSection} id="idiomas">
      <SectionHeading eyebrow="Idiomas" title="Comunicacion" />
      <div className={styles.languagesSection__row}>
        {items.map((language) => (
          <Tag key={language}>{language}</Tag>
        ))}
      </div>
    </section>
  );
}
