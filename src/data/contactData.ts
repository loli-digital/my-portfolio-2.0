import { type SvgIconComponent } from "@mui/icons-material";
import {
  EmailIcon,
  SendIcon,
  WorkIcon,
  TerminalIcon,
  OpenInNewIcon,
} from "@/icons";

export type Contact = {
  id: number;
  icon: SvgIconComponent;
  socialMedia: string;
  contactInfo: string;
  link: string;
  titleLink: string;
  iconLink: SvgIconComponent;
};

export const contactInfo: Contact[] = [
  {
    id: 1,
    icon: EmailIcon,
    socialMedia: "Email",
    contactInfo: "loli.guerrero.dev@gmail.com",
    link: "loli.guerrero.dev@gmail.com",
    titleLink: "Enviar email",
    iconLink: SendIcon,
  },
  {
    id: 2,
    icon: WorkIcon,
    socialMedia: "LinkedIn",
    contactInfo: "in/loli-guerrero",
    link: "https://www.linkedin.com/in/loli-guerrero/",
    titleLink: "Ver mi perfil de LinkedIn",
    iconLink: OpenInNewIcon,
  },
  {
    id: 3,
    icon: TerminalIcon,
    socialMedia: "GitHub",
    contactInfo: "github.com/loli-digital",
    link: "https://github.com/loli-digital",
    titleLink: "Ver mi perfil de GitHub",
    iconLink: OpenInNewIcon,
  },
];
