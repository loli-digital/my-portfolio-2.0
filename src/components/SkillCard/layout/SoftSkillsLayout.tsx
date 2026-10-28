import { type SvgIconComponent } from "@mui/icons-material";

type SoftSkillsLayoutProps = {
  id: number;
  icon: SvgIconComponent;
  title: string;
  subtitle: string;
};

export default function SoftSkillLayout({
  id,
  icon: Icon,
  title,
  subtitle,
}: SoftSkillsLayoutProps) {
  return (
    <div className="soft-skill-card">
      <div className="soft-skill-card__icon">
        <span className={`soft-skill-card__icon--${id}`}>{Icon && <Icon />}</span>
      </div>
      <div className="soft-skill-card__text">
        <span className="soft-skill-card__text--title">{title}</span>{" "}
        <span className="soft-skill-card__text--subtitle">{subtitle}</span>
      </div>
    </div>
  );
}
