type TechLayoutProps = {
  id: number;
  title: string;
  subtitle: string;
};

export default function TechLayout({ id, title, subtitle }: TechLayoutProps) {
  return (
    <p className="tech">
      <span className={`tech__title tech__title--${id}`}>{title}</span>{" "}
      <span className="tech__subtitle">{subtitle}</span>
    </p>
  );
}
