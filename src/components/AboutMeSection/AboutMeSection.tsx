import "./AboutMeSection.scss";

export function AboutMeSection() {
  return (
    <section id="about-me" className="about-me">
      <h2 className="about-me__title">Sobre mí</h2>
      <p className="about-me__description">
        Soy Loli, desarrolladora Frontend especializada en{" "}
        <span className="about-me__description--role">React</span>,{" "}
        <span className="about-me__description--role">JavaScript</span> y{" "}
        <span className="about-me__description--role">Tailwind</span>.
      </p>
      <p className="about-me__description">
        Después de varios años trabajando en{" "}
        <span className="about-me__description--role">Integración Social</span>{" "}
        y <span className="about-me__description--role">Administración</span>,
        decidí orientar mi carrera hacia el desarrollo web, un ámbito donde
        puedo combinar creatividad, aprendizaje continuo y resolución de
        problemas.
      </p>
      <p className="about-me__description">
        Me apasiona construir interfaces accesibles, intuitivas y cuidadas al
        detalle. Disfruto colaborando en equipo, recibiendo feedback y mejorando
        constantemente tanto mis habilidades técnicas como la experiencia que
        ofrezco a las personas que utilizan mis aplicaciones.
      </p>
    </section>
  );
}
