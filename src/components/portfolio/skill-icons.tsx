import type { SkillIcon } from "@/types/skill-group";
import { SKILL_ICON_PATHS } from "@/types/skill-group";
import Image from "next/image";

/**
 * Componente SkillIconImage - Renderiza un ícono SVG de habilidad
 * 
 * Arquitectura:
 * - Carga iconos desde public/icons/skills/ (assets estáticos)
 * - Soporta lazy loading nativo del navegador
 * - Accesible con roles ARIA apropiados
 * - Escalable: agregar nuevos iconos es solo copiar un SVG a public
 */
export function SkillIconImage({
  icon,
  label,
  className,
}: {
  icon: SkillIcon;
  label: string;
  className?: string;
}) {
  const iconPath = SKILL_ICON_PATHS[icon];

  return (
    <Image
      src={iconPath}
      alt={`${label} icon`}
      className={className}
      loading="lazy"
      role="img"
      aria-label={`${label} icon`}
      width="24"
      height="24"
    />
  );
}

/**
 * Mapeo de iconos por tipo (mantenido para compatibilidad)
 * Nota: Este objeto ahora retorna componentes que cargan SVGs desde public
 * en lugar de SVG inline, mejorando mantenibilidad y rendimiento
 */
export const skillIcons: Record<SkillIcon, React.ReactNode> = {
  html: <SkillIconImage icon="html" label="HTML" />,
  css: <SkillIconImage icon="css" label="CSS" />,
  javascript: <SkillIconImage icon="javascript" label="JavaScript" />,
  vue: <SkillIconImage icon="vue" label="Vue" />,
  angular: <SkillIconImage icon="angular" label="Angular" />,
  react: <SkillIconImage icon="react" label="React" />,
  typescript: <SkillIconImage icon="typescript" label="TypeScript" />,
  tailwind: <SkillIconImage icon="tailwind" label="Tailwind CSS" />,
  node: <SkillIconImage icon="node" label="Node.js" />,
  express: <SkillIconImage icon="express" label="Express" />,
  mongodb: <SkillIconImage icon="mongodb" label="MongoDB" />,
  postgresql: <SkillIconImage icon="postgresql" label="PostgreSQL" />,
  mysql: <SkillIconImage icon="mysql" label="MySQL" />,
  firebase: <SkillIconImage icon="firebase" label="Firebase" />,
  jest: <SkillIconImage icon="jest" label="Jest" />,
  supertest: <SkillIconImage icon="supertest" label="Supertest" />,
  cicd: <SkillIconImage icon="cicd" label="CI/CD" />,
  scrum: <SkillIconImage icon="scrum" label="Scrum" />,
  git: <SkillIconImage icon="git" label="Git" />,
  github: <SkillIconImage icon="github" label="GitHub" />,
  opensource: <SkillIconImage icon="opensource" label="Open Source" />,
  copilot: <SkillIconImage icon="copilot" label="GitHub Copilot" />,
  openai: <SkillIconImage icon="openai" label="OpenAI" />,
  architecture: <SkillIconImage icon="architecture" label="Architecture" />,
  pairing: <SkillIconImage icon="pairing" label="Pair Programming" />,
};
