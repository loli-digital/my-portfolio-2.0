import "./HeroSection.scss";
import { Button } from "@/components";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1 className="hero__title">Loli G.F.</h1>
        <p className="hero__role">Desarrolladora web Front-end</p>
        <p className="hero__description">
          Construyo interfaces web modernas, accesibles y de alto rendimiento
          utilizando <span className="hero__description--tech">React</span>,{" "}
          <span className="hero__description--tech">JavaScript</span> y{" "}
          <span className="hero__description--tech">Tailwind</span>
        </p>
        <p className="hero__description">
          Apasionada por la arquitectura de componentes limpios y la experiencia
          de usuario cuidada al detalle
        </p>
        <Button />
      </div>

      {/* Avatar */}
      <div className="hero__wrapper">
        <picture className="hero__image--bg">
          <img
            loading="lazy"
            src="/svg-blob-cyan.svg"
            alt="Blob de color cyan"
          ></img>
        </picture>
        <picture className="hero__image">
          <img
            loading="lazy"
            src="/loli-guerrero-avatar.png"
            alt="Avatar de mujer con gafas y jersey negro"
          ></img>
        </picture>
      </div>
    </section>
  );
}
