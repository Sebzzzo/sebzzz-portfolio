import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="bg-[var(--bg)] py-16 md:py-24 border-b border-[var(--line)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* HEADER ROW */}
        <div className="flex items-center gap-6 mb-10">
          <h2
            id="projects-title"
            className="font-[family-name:var(--font-display)] uppercase text-2xl md:text-3xl tracking-[0.02em] text-[var(--text)] whitespace-nowrap"
          >
            PROYECTOS DESTACADOS
          </h2>

          {/* Flexible separator line (hidden on mobile < sm) */}
          <div
            className="flex-1 h-[1px] bg-[var(--line)] hidden sm:block"
            aria-hidden="true"
          />

          {/* Link: TODO change to /projects when that page exists */}
          <Link
            href="#contact"
            className="label text-[var(--muted)] hover:text-[var(--text)] transition-colors inline-flex items-center gap-2 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
          >
            <span>VER TODOS LOS PROYECTOS</span>
            <ArrowRight
              className="w-[18px] h-[18px] text-[var(--muted)] group-hover:text-[var(--text)] transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* PROJECTS GRID */}
        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {projects.map((project, index) => (
            <li key={project.id}>
              <Reveal delay={index * 100}>
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

