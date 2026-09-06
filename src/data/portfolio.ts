import { CertificationItem } from "@/types/certification-item";
import { Education } from "@/types/education";
import { ExperienceItem } from "@/types/experience-item";
import { Metric } from "@/types/metric";
import { NavItem } from "@/types/nav-item";
import { Profile } from "@/types/profile";
import { ProjectItem } from "@/types/project-item";
import { SkillGroup } from "@/types/skill-group";
import { SocialLink } from "@/types/social-link";

export const profile: Profile = {
  name: "Rubén",
  lastName: "Suárez David",
  title: "Junior Fullstack Developer",
  summary:
    "Full Stack Developer con experiencia en Vue.js, Angular, Node.js, TypeScript y MongoDB. Diseño APIs REST optimizadas, automatizo pruebas y construyo herramientas Open Source con foco en escalabilidad, mantenibilidad y entrega continua.",
  location: "Sevilla, España",
};

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/ruben-suarez-david" },
  { label: "GitHub", href: "https://github.com/rubsuadav" },
  { label: "Email", href: "mailto:rsuarezdavid@gmail.com" },
  { label: "Teléfono", href: "tel:+34628074495" },
];

export const metrics: Metric[] = [
  { value: "+5%", label: "menos tiempo de integración con iframes" },
  { value: "-20%", label: "errores 503 por timeout en APIs y consultas" },
  { value: "92%", label: "de cobertura alcanzada en tests" },
  { value: "+1.100", label: "descargas para express-api-rest-gen en NPM" },
];

export const experience: ExperienceItem[] = [
  {
    title: "FULL STACK DEVELOPER",
    company: "Bipi",
    period: "Oct. 2025 - Actualidad",
    type: "Jornada completa",
    description:
      "Desarrollo de nuevas funcionalidades en producto, con foco en calidad de implementación, colaboración con equipo y evolución sostenida de la plataforma.",
    achievements: [
      "Desarrollo de nuevas funcionalidades utilizando Vue.js, Node.js, TypeScript, Express y MongoDB.",
      "Diseño y optimización de APIs REST y modelos de datos para mejorar eficiencia y mantenibilidad.",
      "Participación activa en planificación, desarrollo, testing y despliegue CI/CD bajo metodologías Ágiles.",
      "Colaboración en code reviews, pair programming y cultura DevOps para sostener releases estables.",
    ],
  },
  {
    title: "FRONTEND DEVELOPER",
    company: "AhoraCrypto",
    period: "Oct. 2024 - Dic. 2024",
    type: "Becario - Jornada parcial",
    description:
      "Colaboración en frontend y componentes reutilizables con integración en plataformas existentes.",
    achievements: [
      "Desarrollé componentes web reutilizables e integraciones vía iframes con Angular.",
      "Reduje el tiempo de integración en un 5%.",
      "Colaboración en tareas de frontend bajo la supervisión de ingenieros senior.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "CLI para Generación de APIs Express",
    period: "Ago. 2025 - Jul. 2026",
    description:
      "Herramienta Open Source para automatizar el arranque de proyectos Node.js con una arquitectura preparada para crecer.",
    highlights: [
      "Publicada en NPM con más de 1.100 descargas.",
      "Generación de proyectos Node.js en JS/TS con soporte para MongoDB, PostgreSQL, MySQL y ORMs como Mongoose y Sequelize.",
      "Integración de Jest y Supertest para dejar el proyecto listo para testing desde el inicio.",
    ],
    stack: [
      { label: "Node.js", icon: "node" },
      { label: "Express", icon: "express" },
      { label: "TypeScript", icon: "typescript" },
      { label: "MongoDB", icon: "mongodb" },
      { label: "PostgreSQL", icon: "postgresql" },
      { label: "MySQL", icon: "mysql" },
      { label: "Jest", icon: "jest" },
      { label: "Supertest", icon: "supertest" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/rubsuadav/express-api-rest-gen",
      },
      {
        label: "NPM",
        href: "https://www.npmjs.com/package/express-api-rest-gen",
      },
    ],
  },
  {
    title: "GoodMenu - Gestión para Hostelería (TFG)",
    period: "Ene. 2024 - Jun. 2024",
    description:
      "Aplicación Full Stack para la gestión integral de hostelería como Trabajo de Fin de Grado.",
    highlights: [
      "Arquitectura backend con Node.js y Express.",
      "Frontend interactivo con React y Tailwind CSS.",
      "Integración de Firebase para datos en tiempo real y autenticación.",
    ],
    stack: [
      { label: "React", icon: "react" },
      { label: "Tailwind CSS", icon: "tailwind" },
      { label: "Node.js", icon: "node" },
      { label: "Express", icon: "express" },
      { label: "Firebase", icon: "firebase" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/orgs/TFG-nicsanmen-rubsuadav/repositories",
      },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { label: "HTML", icon: "html" },
      { label: "CSS", icon: "css" },
      { label: "JavaScript", icon: "javascript" },
      { label: "Vue.js", icon: "vue" },
      { label: "Angular", icon: "angular" },
      { label: "React", icon: "react" },
      { label: "TypeScript", icon: "typescript" },
      { label: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", icon: "node" },
      { label: "Express", icon: "express" },
      { label: "REST APIs", icon: "architecture" },
      { label: "Firebase", icon: "firebase" },
    ],
  },
  {
    title: "Bases de datos",
    items: [
      { label: "MongoDB", icon: "mongodb" },
      { label: "PostgreSQL", icon: "postgresql" },
      { label: "MySQL", icon: "mysql" },
    ],
  },
  {
    title: "Testing y DevOps",
    items: [
      { label: "Jest", icon: "jest" },
      { label: "Supertest", icon: "supertest" },
      { label: "Git", icon: "git" },
      { label: "GitHub", icon: "github" },
      { label: "CI/CD", icon: "cicd" },
    ],
  },
  {
    title: "Metodologías",
    items: [
      { label: "Scrum", icon: "scrum" },
      { label: "Agile", icon: "scrum" },
      { label: "Code Review", icon: "github" },
      { label: "Pair Programming", icon: "pairing" },
    ],
  },
  {
    title: "Herramientas y especialización",
    items: [
      { label: "Open Source", icon: "opensource" },
      { label: "GitHub Copilot", icon: "github" },
      { label: "OpenAI API", icon: "openai" },
      { label: "Arquitectura escalable", icon: "architecture" },
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Construcción asistente de búsqueda con Node usando API de OpenAI",
    issuer: "LinkedIn Learning",
    period: "Ago. 2026",
    description:
      "Configuración de almacenes vectoriales para búsquedas avanzadas en documentos, gestión de hilos de conversación y uso de Code Interpreter.",
  },
  {
    title: "Cisco Network Security",
    issuer: "Cisco / LinkedIn Learning",
    period: "Jun. 2026",
    description:
      "Seguridad en redes, prevención de amenazas, criptografía y conceptos de CCNA 200-301.",
  },
  {
    title: "Domina GitHub Copilot",
    issuer: "LinkedIn Learning",
    period: "Jun. 2026",
    description:
      "Desarrollo asistido por IA, prompts avanzados y automatización de pruebas unitarias.",
  },
  {
    title: "TypeScript Avanzado",
    issuer: "LinkedIn Learning",
    period: "Jun. 2026",
    description:
      "Generics, decoradores, código modular escalable y flujos asíncronos.",
  },
];

export const educations: Education[] = [
    {
    title: "Curso de Nanotraining en Inteligencia Artificial",
    subtitle: "Área: Informática, Tecnología de la Información y Robótica",
    institution: "Escuela de Empresa - Universidad de Nebrija",
    period: "Abr. 2026 - Oct. 2026",
  },
  {
    title: "Grado en Ingeniería Informática",
    subtitle: "Ingeniería del Software",
    institution: "Universidad de Sevilla (US)",
    period: "Sep. 2019 - Jul. 2024",
  },
];

export const navItems: NavItem[] = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#competencias" },
  { label: "Contacto", href: "mailto:rsuarezdavid@gmail.com" },
  { label: "Descargar CV", href: "#descargar-cv", isDownload: true },
];
