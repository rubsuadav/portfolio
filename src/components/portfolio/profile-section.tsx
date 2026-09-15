import { SectionHeading } from "@/components/section-heading";

import styles from "./profile-section.module.css";

export function ProfileSection() {
  return (
    <section className={styles.profileSection} id="perfil">
      <SectionHeading
        eyebrow="Sobre mí"
        title="Aprendiendo rápido, construyendo productos completos de principio a fin."
      />
      <div className={styles.profileSection__contentCard}>
        <p className={styles.profileSection__paragraph}>
          He trabajado con <strong>Vue.js</strong>, <strong>Angular</strong>,{" "}
          <strong>React</strong>, <strong>Node.js</strong>,{" "}
          <strong>Express</strong>, <strong>TypeScript</strong> y{" "}
          <strong>MongoDB</strong>, con foco en calidad, mantenibilidad y
          escalabilidad.
        </p>
        <p className={styles.profileSection__paragraph}>
          Tambien he impulsado iniciativas Open Source, integracion de servicios
          de IA, testing con <strong>Jest</strong> y <strong>Supertest</strong>,
          y practicas de <strong>CI/CD</strong> dentro de equipos agiles.
        </p>
      </div>
    </section>
  );
}
