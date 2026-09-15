"use client";

import { useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { downloadCV } from "@/utils/downloadCV";

import styles from "./navbar.module.css";
import { NavLink } from "./nav-link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const firstName = profile.name;
  const lastName = profile.lastName;

  const firstLetterFirstLastName = lastName.charAt(0);
  const firstLetterSecondLastName = lastName.split(" ")[1]?.charAt(0) || "";

  const result =
    firstName +
    " " +
    firstLetterFirstLastName +
    ". " +
    firstLetterSecondLastName +
    ".";

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
          {result}
        </NavLink>

        <nav
          className={`${styles.navbar__links} ${isMenuOpen ? styles.navbar__linksOpen : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          {navItems.map((item) =>
            item.isDownload ? (
              <button
                key={item.href}
                type="button"
                className={styles.navbar__cvButton}
                onClick={downloadCV}
              >
                {item.label}
              </button>
            ) : (
              <NavLink
                key={item.href}
                href={item.href}
                className={styles.navbar__link}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </header>
    </div>
  );
}
