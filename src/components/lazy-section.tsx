"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./lazy-section.module.css";

interface LazySectionProps {
  children: ReactNode;
  id?: string;
  threshold?: number;
}

export function LazySection({
  children,
  id,
  threshold = 0.1,
}: LazySectionProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold,
    rootMargin: "50px",
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      id={id}
      className={`${styles.lazySection} ${isVisible ? styles.lazySection__visible : ""}`}
    >
      {children}
    </div>
  );
}
