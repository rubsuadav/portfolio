"use client";

import { NavItem } from "@/types/nav-item";
import { SocialLink } from "@/types/social-link";

import styles from "./footer.module.css";

interface FooterProps {
  fullName: string;
  navigationItems: NavItem[];
  socialLinks: SocialLink[];
}

export function Footer({
  fullName,
  navigationItems,
  socialLinks,
}: FooterProps) {
  const visibleNavigationItems = navigationItems.filter(
    (item) => !item.isDownload,
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__intro}>
          <a className={styles.footer__brand} href="#inicio">
            {fullName}
          </a>
          <p className={styles.footer__description}>
            Desarrollo experiencias web sólidas, claras y preparadas para
            crecer.
          </p>
        </div>

        <nav
          className={styles.footer__navigation}
          aria-label="Enlaces del pie de página"
        >
          <p className={styles.footer__label}>Explorar</p>
          <ul className={styles.footer__list}>
            {visibleNavigationItems.map((item) => (
              <li key={item.href}>
                <a className={styles.footer__link} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.footer__contact}>
          <p className={styles.footer__label}>Conecta</p>
          <ul className={styles.footer__list}>
            {socialLinks.map((link) => {
              const isExternal = link.href.startsWith("http");

              return (
                <li key={link.href}>
                  <a
                    className={styles.footer__link}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <p>
          © {new Date().getFullYear()} {fullName}. Todos los derechos
          reservados.
        </p>
        <a className={styles.footer__backToTop} href="#inicio">
          Volver arriba <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
