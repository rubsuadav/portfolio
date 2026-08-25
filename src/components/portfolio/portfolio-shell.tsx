import { ReactNode } from "react";

import styles from "./portfolio-shell.module.css";

interface PortfolioShellProps {
  children: ReactNode;
}

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <main className={styles.portfolioShell}>
      <div className={styles.portfolioShell__paperTexture} aria-hidden="true" />
      {children}
    </main>
  );
}
