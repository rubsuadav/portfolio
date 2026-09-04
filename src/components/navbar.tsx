"use client";

import { useState } from "react";
import { navItems, socialLinks } from "@/data/portfolio";

import styles from "./navbar.module.css";
import Link from "next/link";
import { NavLink } from "./nav-link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <header className={styles.navbar__container}>
        <button
          type="button"
          className={styles.navbar__menuButton}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`${styles.navbar__links} ${isMenuOpen ? styles.navbar__linksOpen : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className={styles.navbar__link}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          className={`${styles.navbar__cta} ${isMenuOpen ? styles.navbar__ctaOpen : ""}`}
          href={socialLinks[0].href}
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsMenuOpen(false)}
        >
          Contacto
        </Link>
      </header>
    </div>
  );
}
