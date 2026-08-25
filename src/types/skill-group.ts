
export type SkillIcon =
  | "vue"
  | "angular"
  | "react"
  | "typescript"
  | "tailwind"
  | "node"
  | "express"
  | "mongodb"
  | "firebase"
  | "jest"
  | "supertest"
  | "cicd"
  | "scrum"
  | "devops"
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
