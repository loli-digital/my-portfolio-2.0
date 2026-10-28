import TechLayout from "./layout/TechLayout";
import ToolsLayout from "./layout/ToolsLayout";
import SoftSkillsLayout from "./layout/SoftSkillsLayout";
import { type SvgIconComponent } from "@mui/icons-material";
import "./SkillCard.scss";

type SkillCardProps = {
  title: {
    id: number;
    icon: SvgIconComponent;
    title: string;
  };
  items: Array<{
    id: number;
    icon?: SvgIconComponent;
    title: string;
    subtitle: string;
  }>;
  finalSentence: string;
};

export const SkillCard = ({ title, items, finalSentence }: SkillCardProps) => {
  const Icon = title.icon;

  return (
    <div className="article__wrapper">
      <article className="article">
        {/* Title and icon */}

        <h3 className="article__title">
          <span className={`title__icon title__icon--${title.id}`}>
            <Icon />
          </span>{" "}
          {title.title}
        </h3>

        {/* Cards */}
        <div className={`article__items article__items--${title.id}`}>
          {items.map((item) => {
            if (title.id === 1) {
              return (
                <TechLayout
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              );
            }

            if (title.id === 2) {
              if (!item.icon) {
                throw new Error(`Falta el icono de "${item.title}"`);
              }
              return (
                <ToolsLayout
                  key={item.id}
                  id={item.id}
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              );
            }

            if (!item.icon) {
              throw new Error(`Falta el icono de "${item.title}"`);
            }

            return (
              <SoftSkillsLayout
                key={item.id}
                id={item.id}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            );
          })}
        </div>

        {/* Final Sentence */}
        <p className="article__final-sentence">{finalSentence}</p>
      </article>
    </div>
  );
};
