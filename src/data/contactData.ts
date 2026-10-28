import { type SvgIconComponent } from "@mui/icons-material";
import {
  EmailOutlinedIcon,
  SendIcon,
  BusinessCenterOutlinedIcon,
  TerminalIcon,
  OpenInNewIcon,
} from "@/icons";

export type Contact = {
  id: number;
  icon: SvgIconComponent;
  platform: string;
  address: string;
  link: string;
  titleLink: string;
  iconLink: SvgIconComponent;
};

export const contactInfo: Contact[] = [
  {
    id: 1,
    icon: EmailOutlinedIcon,
    platform: "Email",
    address: "loli.guerrero.dev@gmail.com",
    link: "loli.guerrero.dev@gmail.com",
    titleLink: "Enviar email",
    iconLink: SendIcon,
  },
  {
    id: 2,
    icon: BusinessCenterOutlinedIcon,
    platform: "LinkedIn",
    address: "in/loli-guerrero",
    link: "https://www.linkedin.com/in/loli-guerrero/",
    titleLink: "Ver mi perfil de LinkedIn",
    iconLink: OpenInNewIcon,
  },
  {
    id: 3,
    icon: TerminalIcon,
    platform: "GitHub",
    address: "github.com/loli-digital",
    link: "https://github.com/loli-digital",
    titleLink: "Ver mi perfil de GitHub",
    iconLink: OpenInNewIcon,
  },
];
