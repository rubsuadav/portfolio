"use client";

import { useState } from "react";
import { navItems, profile } from "@/data/portfolio";

import styles from "./navbar.module.css";
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

        <NavLink href="#inicio" className={styles.navbar__brand}>
          {profile.name + " " + profile.lastName.charAt(0) + "."}
        </NavLink>

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
      </header>
    </div>
  );
}
