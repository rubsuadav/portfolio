import type { SocialLink } from "./social-link";
import type { SkillItem } from "./skill-group";

export type ProjectItem = {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  stack: SkillItem[];
  links: SocialLink[];
};
