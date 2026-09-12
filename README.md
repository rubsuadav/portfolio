# Portfolio personal

Portfolio de **Rubén Suárez David**, Junior Fullstack Developer de Sevilla.

Aquí puedes conocer mi experiencia, los proyectos en los que he trabajado y las tecnologías que utilizo en mi día a día. El portfolio está hecho con Next.js y React.

## ✨ Características

- Página de portfolio responsive en español.
- Secciones de perfil, experiencia, formación, certificaciones, proyectos y competencias.
- Navegación interna y enlaces a LinkedIn, GitHub, email y teléfono.
- Carga diferida de secciones mediante `IntersectionObserver`.
- Iconos tecnológicos reutilizables para stacks y habilidades.
- Métricas destacadas y contadores animados.
- Analítica integrada con Vercel Analytics.
- Tipografía optimizada con `next/font` usando Manrope y Fraunces.

## 🧰 Stack tecnológico

- [Next.js 16](https://nextjs.org/) con App Router.
- [React 19](https://react.dev/) y TypeScript.
- CSS Modules y CSS global para los estilos.
- [React Slot Counter](https://www.npmjs.com/package/react-slot-counter) para los contadores.
- [Vercel Analytics](https://vercel.com/docs/analytics) para analítica.
- ESLint con la configuración de Core Web Vitals de Next.js.

## 📋 Requisitos

- Node.js 22.x
- npm 10.x

## 💻 Verlo en local

Primero, instala las dependencias:

```bash
npm install
```

Después, arranca el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## ⚙️ Scripts disponibles

| Comando              | Descripción                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `npm run dev`        | Inicia Next.js en modo desarrollo.                                 |
| `npm run lint`       | Ejecuta ESLint sobre el proyecto.                                  |
| `npm run build`      | Genera la compilación de producción.                               |
| `npm run start`      | Sirve la compilación de producción.                                |
| `npm run deploy-pre` | Expone el servidor local mediante un túnel temporal de Cloudflare. |

Para probar la versión de producción localmente:

```bash
npm run build
npm run start
```

## 🗂️ Estructura principal

```text
src/
├── app/                 # Layout, página principal y estilos globales
├── components/          # Componentes reutilizables y secciones del portfolio
├── data/                # Contenido del perfil, experiencia, proyectos y skills
├── hooks/               # Hooks compartidos, como el observer de intersección
├── types/               # Tipos TypeScript del dominio del portfolio
└── utils/               # Utilidades, como la descarga del CV
```

La página principal compone las secciones desde `src/app/page.tsx`. Para actualizar la información del portfolio, modifica principalmente `src/data/portfolio.ts`; la interfaz y los estilos se encuentran en `src/components/*`.

## 🚀 Despliegue

El portfolio está desplegado en [Vercel](https://vercel.com/) y disponible públicamente en [https://ruben-suarez-dev.vercel.app/](https://ruben-suarez-dev.vercel.app/).

Para compartir temporalmente el entorno local durante el desarrollo, ejecuta primero `npm run dev` y después `npm run deploy-pre` en otra terminal.
