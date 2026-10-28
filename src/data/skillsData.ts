import { type SvgIconComponent } from "@mui/icons-material";
import {
  CodeIcon,
  TerminalIcon,
  FlashOnIcon,
  BugReportIcon,
  PaletteIcon,
  ViewInArIcon,
  QuestionAnswerIcon,
  WorkspacesIcon,
  EventAvailableIcon,
  SavedSearchIcon,
  FavoriteIcon,
  PsychologyIcon,
} from "../icons";

/* Section title */

export type Title = {
  id: number;
  icon: SvgIconComponent; 
  title: string;
};

export const titles: Title[] = [
  {
    id: 1,
    icon: CodeIcon,
    title: "Technologies",
  },
  {
    id: 2,
    icon: TerminalIcon,
    title: "Tools",
  },
  {
    id: 3,
    icon: PsychologyIcon,
    title: "Soft Skills",
  },
];

/* Technologies */
export type Technology = {
  id: number;
  title: string;
  subtitle: string;
};

export const technologies: Technology[] = [
  {
    id: 1,
    title: "Html5",
    subtitle: "Semántico y A11y",
  },
  {
    id: 2,
    title: "Css3",
    subtitle: "Flexbox, Grid y SaSS",
  },
  {
    id: 3,
    title: "JS",
    subtitle: "JavaScript (ES6+)",
  },
  {
    id: 4,
    title: "React",
    subtitle: "Hooks, Router, State",
  },
  {
    id: 5,
    title: "Tw",
    subtitle: "Tailwind CSS",
  },
  {
    id: 6,
    title: "Fb",
    subtitle: "Firebase · Auth / DB",
  },
];

/* Tools */
export type Tool = {
  id: number;
  icon: SvgIconComponent;
  title: string;
  subtitle: string;
};

export const tools: Tool[] = [
  {
    id: 1,
    icon: TerminalIcon,
    title: "Git y GitHub",
    subtitle: "Control de versiones",
  },
  {
    id: 2,
    icon: CodeIcon,
    title: "VSCode",
    subtitle: "Editor principal",
  },
  {
    id: 3,
    icon: FlashOnIcon,
    title: "Vite",
    subtitle: "Bundler & Fast Refresh",
  },
  {
    id: 4,
    icon: BugReportIcon,
    title: "Chrome DevTools",
    subtitle: "Inspección & Debug",
  },
  {
    id: 5,
    icon: PaletteIcon,
    title: "Figma",
    subtitle: "Implementación UI",
  },
  {
    id: 6,
    icon: ViewInArIcon,
    title: "pnpm / Packages",
    subtitle: "Gestión librerías",
  },
];

/* Soft Skills */
export type SoftSkill = {
  id: number;
  icon: SvgIconComponent;
  title: string;
  subtitle: string;
};

export const softSkills: SoftSkill[] = [
  {
    id: 1,
    icon: QuestionAnswerIcon,
    title: "Comunicación Efectiva",
    subtitle: "Comunicación clara y estructurada",
  },
  {
    id: 2,
    icon: WorkspacesIcon,
    title: "Trabajo en Equipo",
    subtitle: "Colaboración remota fluida",
  },
  {
    id: 3,
    icon: EventAvailableIcon,
    title: "Organización y Gestión",
    subtitle: "Priorización metódica de tareas",
  },
  {
    id: 4,
    icon: SavedSearchIcon,
    title: "Atención al Detalle",
    subtitle: "Alta fidelidad visual",
  },
  {
    id: 5,
    icon: FavoriteIcon,
    title: "Empatía y Enfoque Usuario/a",
    subtitle: "Experiencia en integración social",
  },
];

/* Final sentence */
export type FinalSentence = {
  id: number;
  text: string;
};

export const finalSentences: FinalSentence[] = [
  {
    id: 1,
    text: "Arquitectura basada en componentes modulares",
  },
  {
    id: 2,
    text: "Flujo ágil con despliegues en Cloudfare y GitHub",
  },
  {
    id: 3,
    text: "Capacidad constante de aprendizaje y adaptación",
  },
];

/* Skills Cards */
export const skillsCards = [
  {
    id: 1,
    title: titles[0],
    items: technologies,
    finalSentences: finalSentences[0].text,
  },
  {
    id: 2,
    title: titles[1],
    items: tools,
    finalSentences: finalSentences[1].text,
  },
  {
    id: 3,
    title: titles[2],
    items: softSkills,
    finalSentences: finalSentences[2].text,
  },
];