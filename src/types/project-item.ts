import type { SocialLink } from "./social-link";

export type ProjectItem = {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: SocialLink[];
};
