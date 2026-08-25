import { ReactNode } from "react";

import styles from "./tag.module.css";

interface TagProps {
  children: ReactNode;
  icon?: ReactNode;
}

export function Tag({ children, icon }: TagProps) {
  return (
    <span className={styles.tagBadge}>
      {icon ? (
        <span className={styles.tagBadge__icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span className={styles.tagBadge__label}>{children}</span>
    </span>
  );
}
