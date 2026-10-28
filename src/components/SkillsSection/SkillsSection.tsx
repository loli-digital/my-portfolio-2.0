import { SkillCard } from "@/components";
import { skillsCards } from "@/data";
import "./SkillsSection.scss";

export function SkillsSection() {
  return (
    <section id="habilities" className="skills">
      <div className="skills__wrapper">
        {/* Efecto pulse */}
        <div className="skills__animation">
          <span className="skills__animation-bg">
            <span className="skills__animation-circle"></span>
          </span>
          <span className="skills__subtitle">Stack Técnico</span>
        </div>
        <h2 className="skills__title">Habilidades y Herramientas</h2>
        <p className="skills__description">
          Tecnologías, entornos de desarrollo y competencias interpersonales que
          aplico para construir productos digitales sólidos
        </p>
      </div>

      <div className="skills__articles-wrapper">
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
