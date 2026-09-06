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
      <h1 className={styles.sectionHeading__eyebrow}>{eyebrow}</h1>
      {title ? <h3 className={styles.sectionHeading__title}>{title}</h3> : null}
      {description ? (
        <p className={styles.sectionHeading__description}>{description}</p>
      ) : null}
    </div>
  );
}
