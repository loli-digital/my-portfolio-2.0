import { type SvgIconComponent } from "@mui/icons-material";
import "./ContactLink.scss";

type ContactInfoProps = {
  id: number;
  icon: SvgIconComponent;
  platform: string;
  address: string;
  link: string;
  titleLink: string;
  iconLink: SvgIconComponent;
};

export const ContactLink = ({
  id,
  icon,
  platform,
  address,
  link,
  titleLink,
  iconLink,
}: ContactInfoProps) => {
  const Icon = icon;
  const IconLink = iconLink;
  return (
    <a href={link} target="_blank" className="contact-link">
      <div className="contact-link__details">
        <span className={`contact-link__icon contact-link__icon--${id}`}>
          <Icon />
        </span>
        <div className="contact-link__info">
          <span className="contact-link__platform">{platform}</span>
          <span className="contact-link__address">{address}</span>
        </div>
      </div>
      <span className="contact-link__anchor" title={titleLink}>
        <IconLink />
      </span>
    </a>
  );
};
