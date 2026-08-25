import styles from "./section-heading.module.css";

interface SectionHeadingProps {
  eyebrow: string;
  title?: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeading}>
      <span className={styles.sectionHeading__eyebrow}>{eyebrow}</span>
      {title ? <h2 className={styles.sectionHeading__title}>{title}</h2> : null}
      {description ? (
        <p className={styles.sectionHeading__description}>{description}</p>
      ) : null}
    </div>
  );
}
