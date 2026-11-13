export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: "search" | "lightbulb" | "pen" | "code" | "send";
}

export const steps: ProcessStep[] = [
  {
    number: "01",
    title: "DESCUBRIR",
    description: "Comprensión de objetivos, usuarios y requerimientos del proyecto.",
    icon: "search",
  },
  {
    number: "02",
    title: "IDEAR",
    description: "Planificación, arquitectura y conceptualización de la solución.",
    icon: "lightbulb",
  },
  {
    number: "03",
    title: "DISEÑAR",
    description: "Diseño visual moderno centrado en la experiencia de usuario.",
    icon: "pen",
  },
  {
    number: "04",
    title: "DESARROLLAR",
    description: "Construcción de software rápido, responsivo y de alto rendimiento.",
    icon: "code",
  },
  {
    number: "05",
    title: "ENTREGAR",
    description: "Pruebas rigurosas, optimización continua y despliegue a producción.",
    icon: "send",
  },
];
