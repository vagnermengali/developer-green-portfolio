import { 
  RiComputerLine, 
  RiBillLine,
  RiBallPenLine,
  RiAspectRatioLine
} from "react-icons/ri";

export const serviceData = [
  {
    id: "service1",
    icon: <RiComputerLine key="desktop" />,
    title: "Desenvolvedor",
    description: "Transformando designs em realidade interativa.",
  },
  {
    id: "service2",
    icon: <RiAspectRatioLine key="aspectRatio" />,
    title: "Thumbmaker",
    description: "Domínio de design gráfico e estratégias de destaque visual",
  },
  {
    id: "service3",
    icon: <RiBallPenLine key="pen" />,
    title: "Editor VFX",
    description: "Habilidades em efeitos visuais para contar histórias de forma cinematográfica",
  }
];
