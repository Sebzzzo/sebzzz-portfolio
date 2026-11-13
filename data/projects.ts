export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  href: string;
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    id: "control-core",
    number: "01",
    name: "CONTROL CORE",
    category: "SITIO WEB CORPORATIVO & STARTUP",
    href: "https://github.com/juansgarcia1704",
    image: "/projects/project-1.jpg",
    imageAlt: "Control Core - Plataforma corporativa desarrollada con React, TypeScript y Tailwind CSS",
  },
  {
    id: "ai-automation-agents",
    number: "02",
    name: "AI AGENTS & AUTOMATION",
    category: "AGENTES DE IA & INTEGRACIÓN CON APIS",
    href: "https://github.com/juansgarcia1704",
    image: "/projects/project-2.jpg",
    imageAlt: "Flujos de automatización de procesos e integración de modelos LLM",
  },
  {
    id: "digital-ecosystems",
    number: "03",
    name: "ECOSISTEMAS DIGITALES",
    category: "DESARROLLO DE SOFTWARE & WEB",
    href: "https://github.com/juansgarcia1704",
    image: "/projects/project-3.jpg",
    imageAlt: "Soluciones web modernas orientadas a rendimiento y experiencia de usuario",
  },
];
