export type SkillIcon =
  | "html"
  | "css"
  | "javascript"
  | "vue"
  | "angular"
  | "react"
  | "typescript"
  | "tailwind"
  | "node"
  | "express"
  | "mongodb"
  | "postgresql"
  | "mysql"
  | "firebase"
  | "jest"
  | "supertest"
  | "cicd"
  | "scrum"
  | "git"
  | "github"
  | "opensource"
  | "copilot"
  | "openai"
  | "architecture"
  | "pairing";

export type SkillItem = {
  label: string;
  icon: SkillIcon;
};

export type SkillGroup = {
  title: string;
  items: SkillItem[];
};

/**
 * Mapeo de rutas de iconos para habilidades técnicas
 * Utiliza SVGs almacenados en public/icons/skills/
 * Siguiendo buenas prácticas de modularidad y mantenibilidad
 */
export const SKILL_ICON_PATHS: Record<SkillIcon, string> = {
  html: "/icons/skills/html.svg",
  css: "/icons/skills/css.svg",
  javascript: "/icons/skills/javascript.svg",
  vue: "/icons/skills/vue.svg",
  angular: "/icons/skills/angular.svg",
  react: "/icons/skills/react.svg",
  typescript: "/icons/skills/typescript.svg",
  tailwind: "/icons/skills/tailwind.svg",
  node: "/icons/skills/node.svg",
  express: "/icons/skills/express.svg",
  mongodb: "/icons/skills/mongodb.svg",
  postgresql: "/icons/skills/postgresql.svg",
  mysql: "/icons/skills/mysql.svg",
  firebase: "/icons/skills/firebase.svg",
  jest: "/icons/skills/jest.svg",
  supertest: "/icons/skills/supertest.svg",
  cicd: "/icons/skills/cicd.svg",
  scrum: "/icons/skills/scrum.svg",
  git: "/icons/skills/git.svg",
  github: "/icons/skills/github.svg",
  opensource: "/icons/skills/opensource.svg",
  copilot: "/icons/skills/copilot.svg",
  openai: "/icons/skills/openai.svg",
  architecture: "/icons/skills/architecture.svg",
  pairing: "/icons/skills/pairing.svg",
};
