import { type SvgIconComponent } from "@mui/icons-material";

type ToolsLayoutProps = {
  id: number;
  icon: SvgIconComponent;
  title: string;
  subtitle: string;
};

export default function ToolsLayout({
  id,
  icon: Icon,
  title,
  subtitle,
}: ToolsLayoutProps) {
  return (
    <div className="tool-card">
      <span className={`tool-card__icon--${id}`}>{Icon && <Icon />}</span>
      <span className="tool-card__title">{title}</span>{" "}
      <span className="tool-card__subtitle">{subtitle}</span>
    </div>
  );
}
