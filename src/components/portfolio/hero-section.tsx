import Link from "next/link";
import SlotCounter from "react-slot-counter";

import { Metric } from "@/types/metric";
import { Profile } from "@/types/profile";
import { SocialLink } from "@/types/social-link";

import styles from "./hero-section.module.css";

interface HeroSectionProps {
  profile: Profile;
  socialLinks: SocialLink[];
  metrics: Metric[];
}

export function HeroSection({
  profile,
  socialLinks,
  metrics,
}: HeroSectionProps) {
  return (
    <section className={styles.heroSection} id="inicio">
      <div className={styles.heroSection__introCard}>
        <p className={styles.heroSection__kicker}>Portfolio profesional</p>
        <h1 className={styles.heroSection__title}>{profile.name}</h1>
        <p className={styles.heroSection__role}>{profile.title}</p>
        <p className={styles.heroSection__summary}>{profile.summary}</p>

        <div className={styles.heroSection__actions}>
          <Link
            className={styles.heroSection__actionPrimary}
            href={socialLinks[0].href}
            target="_blank"
            rel="noreferrer"
          >
            Ver LinkedIn
          </Link>
          <Link
            className={styles.heroSection__actionSecondary}
            href={socialLinks[1].href}
            target="_blank"
            rel="noreferrer"
          >
            Ver GitHub
          </Link>
        </div>

        <div className={styles.heroSection__metricGrid}>
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className={styles.heroSection__metricCard}
            >
              <strong className={styles.heroSection__metricValue}>
                <SlotCounter
                  value={metric.value}
                  isSeparatorCharacter={null}
                  animateOnVisible={{
                    triggerOnce: false,
                    rootMargin: "0px 0px -10% 0px"
                  }}
                />
              </strong>
              <span className={styles.heroSection__metricLabel}>
                {metric.label}
              </span>
            </article>
          ))}
        </div>
      </div>

      <aside className={styles.heroSection__profileCard}>
        <div className={styles.heroSection__avatar} aria-hidden="true">
          RS
        </div>

        <div className={styles.heroSection__location}>
          <p className={styles.heroSection__locationLabel}>Ubicacion</p>
          <p className={styles.heroSection__locationValue}>
            {profile.location}
          </p>
        </div>

        <div className={styles.heroSection__contactList}>
          {socialLinks.map((link) => (
            <Link
              className={styles.heroSection__contactItem}
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span>{link.label}</span>
              <span
                className={styles.heroSection__contactSymbol}
                aria-hidden="true"
              >
                {"+"}
              </span>
            </Link>
          ))}
        </div>

        <p className={styles.heroSection__note}>
          Enfoque en arquitectura mantenible, buenas practicas, testing
          automatizado y entrega continua.
        </p>
      </aside>
    </section>
  );
}
