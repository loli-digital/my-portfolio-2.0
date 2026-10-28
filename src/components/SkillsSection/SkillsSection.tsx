import { SkillCard } from "@/components";
import { skillsCards } from "@/data";
import "./SkillsSection.scss";

export function SkillsSection() {
  return (
    <section className="section">
      <div className="section__wrapper">
        {/* Efecto pulse */}
        <div className="section__animation">
          <span className="section__animation--bg">
            <span className="section__animation--circle"></span>
          </span>
          <span className="section__subtitle">Stack Técnico</span>
        </div>
        <h2 className="section__title">Habilidades y Herramientas</h2>
        <p className="section__description">
          Tecnologías, entornos de desarrollo y competencias interpersonales que
          aplico para construir productos digitales sólidos
        </p>
      </div>

      <div className="articles__wrapper">
        {skillsCards.map((card) => (
          <SkillCard
            key={card?.id}
            title={card?.title}
            items={card?.items}
            finalSentence={card?.finalSentences}
          />
        ))}
      </div>
    </section>
  );
}
