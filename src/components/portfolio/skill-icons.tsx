import { ReactNode } from "react";

import { SkillIcon } from "@/types/skill-group";

export const skillIcons: Record<SkillIcon, ReactNode> = {
  vue: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path d="M12 19 3.5 4.5H8l4 6.8 4-6.8h4.5L12 19Z" fill="currentColor" />
      <path
        d="M12 19 8 11.3 5.8 15h2.7L12 20.5 15.5 15h2.7L12 19Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  ),
  angular: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="m12 3 8 2.8-1.3 10.2L12 21l-6.7-5-1.3-10.2L12 3Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="m12 5 5.8 2-1 8.2L12 18l-4.8-2.8-1-8.2L12 5Z"
        fill="currentColor"
      />
      <path
        d="m12 7.2 3.6 7.6h-1.7l-.8-1.8H11l-.8 1.8H8.5L12 7.2Zm0 2.9-1 2.2h2l-1-2.2Z"
        fill="#08111f"
      />
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="8.5" ry="3.2" stroke="currentColor" />
      <ellipse
        cx="12"
        cy="12"
        rx="8.5"
        ry="3.2"
        stroke="currentColor"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="8.5"
        ry="3.2"
        stroke="currentColor"
        transform="rotate(-60 12 12)"
      />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path d="M4 4h16v16H4V4Z" fill="currentColor" opacity="0.18" />
      <path d="M7.5 9.2V8h9v1.2H13V16h-1.4V9.2H7.5Z" fill="currentColor" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="M6 12c1.3-2.7 3-4 5-4 3 0 3.5 3 5 3 1 0 1.8-.7 2.3-2 0 2.7-1.2 4-3.5 4-3 0-3.5-3-5-3-1 0-1.8.7-2.3 2 0-2.7 1.2-4 3.5-4 3 0 3.5 3 5 3 1 0 1.8-.7 2.3-2-.7 3.7-3 6-6.5 6-2.8 0-4.5-1.2-5.5-4Z"
        fill="currentColor"
      />
    </svg>
  ),
  node: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z"
        fill="currentColor"
        opacity="0.16"
      />
      <path d="m12 5 6.2 3.5v7L12 19l-6.2-3.5v-7L12 5Z" fill="currentColor" />
      <path d="M11 8h2v8h-2V8Z" fill="#08111f" />
    </svg>
  ),
  express: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="M4 8h5.2l2.4 3 2.4-3H20l-5.1 6 5.1 6h-5.2l-2.4-3-2.4 3H4l5.1-6L4 8Z"
        fill="currentColor"
      />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="M12 3.5c2.5 2.8 4.1 5.7 4.1 9.3 0 4.2-2 7-4.1 8.7-2.1-1.7-4.1-4.5-4.1-8.7 0-3.6 1.6-6.5 4.1-9.3Z"
        fill="currentColor"
      />
      <path
        d="M12 6.7v10.9"
        stroke="#08111f"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="m7 20 2.1-13.5 3 5.1L17 5l-1.6 10.2L12 21l-5-1Z"
        fill="currentColor"
      />
      <path
        d="m7.4 19.2 4.3-7.1 1.1 1.8 2.8-4.8-1.1 7-3.6 4.4-3.5-1.3Z"
        fill="currentColor"
        opacity="0.42"
      />
    </svg>
  ),
  jest: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" fill="currentColor" />
      <path d="M7 13h10l-1.5 7H8.5L7 13Z" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  supertest: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path d="M5 6h14v12H5V6Z" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m8 12 2.2 2.2L16 8.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  cicd: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="M6 6h5v5H6V6Zm7 0h5v5h-5V6ZM6 13h5v5H6v-5Zm7 3.5 2-2 2 2-2 2-2-2Z"
        fill="currentColor"
      />
    </svg>
  ),
  scrum: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path d="M12 4 20 9l-8 5-8-5 8-5Z" fill="currentColor" opacity="0.2" />
      <path d="M12 9 7.8 6.5 12 4l4.2 2.5L12 9Z" fill="currentColor" />
      <path
        d="M7.8 17.5 12 20l4.2-2.5-4.2-2.5-4.2 2.5Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  ),
  devops: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="M5 12c0-2.8 2.2-5 5-5h2c2.8 0 5 2.2 5 5s-2.2 5-5 5h-2c-2.8 0-5-2.2-5-5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 12h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 9v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  opensource: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="M12 4a8 8 0 0 0-2.4 15.6l.7-2.6A5.3 5.3 0 1 1 17 12h2a7 7 0 0 0-7-8Z"
        fill="currentColor"
      />
      <path
        d="M9 15.5 12 12l3 3.5-1.2 3.8H10.2L9 15.5Z"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  ),
  copilot: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="M8 5.5c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2V7h1.5c1.1 0 2 .9 2 2v3.5c0 2.5-2 4.5-4.5 4.5H11c-2.8 0-5-2.2-5-5V9c0-1.1.9-2 2-2h0V5.5Z"
        fill="currentColor"
      />
      <path
        d="M9 11h6"
        stroke="#08111f"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M10 14.5c.6.5 1.3.7 2 .7s1.4-.2 2-.7"
        stroke="#08111f"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  openai: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="M12 3.5 16.8 6l.9 5.2-3.7 3.7H10l-3.7-3.7.9-5.2L12 3.5Z"
        fill="currentColor"
      />
      <path
        d="M7.4 7.2 12 10l4.6-2.8M8.2 16.6 12 14l3.8 2.6"
        stroke="#08111f"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  architecture: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="M5 7h5v5H5V7Zm9 0h5v5h-5V7Zm-9 9h5v5H5v-5Zm9-2h5v7h-5v-7Z"
        fill="currentColor"
      />
    </svg>
  ),
  pairing: (
    <svg viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="M8.5 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        fill="currentColor"
      />
      <path
        d="M5 19c0-2.8 2.2-5 5-5h4c2.8 0 5 2.2 5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
};
