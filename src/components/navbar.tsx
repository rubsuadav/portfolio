import { navItems, socialLinks } from "@/data/portfolio";

import styles from "./navbar.module.css";
import Link from "next/link";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <header className={styles.navbar__container}>
        <div className={styles.navbar__brand}>
          <p className={styles.navbar__brandTitle}>Ruben Suarez David</p>
          <p className={styles.navbar__brandCaption}>Junior Fullstack Developer</p>
        </div>

        <nav className={styles.navbar__links} aria-label="Secciones del portfolio">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navbar__link}>
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          className={styles.navbar__cta}
          href={socialLinks[0].href}
          target="_blank"
          rel="noreferrer"
        >
          Contacto
        </Link>
      </header>
    </div>
  );
}
