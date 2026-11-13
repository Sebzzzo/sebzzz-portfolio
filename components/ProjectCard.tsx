"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <Link
      href={project.href}
      aria-label={`${project.name}, ${project.category}`}
      className="block group rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)]"
    >
      {/* IMAGE FRAME */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--bg-elevated)] transition-colors duration-300 group-hover:border-[var(--line-accent)]">
        {!hasError ? (
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-600 ease-out group-hover:scale-105"
            onError={() => setHasError(true)}
          />
        ) : (
          /* Missing Image Fallback Placeholder */
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-[var(--bg-elevated)]"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(214,20,30,0.18), transparent 70%)",
            }}
          >
            <span className="label text-[var(--muted)] text-center break-all">
              {project.image}
            </span>
          </div>
        )}

        {/* Hover Red Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgba(214,20,30,0.18)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* INFO ROW */}
      <div className="mt-5 grid grid-cols-[auto_1fr_auto] items-start gap-4">
        {/* Number */}
        <span className="font-[family-name:var(--font-display)] text-4xl text-[var(--accent)] leading-none min-w-[56px] select-none">
          {project.number}
        </span>

        {/* Text Details (min-w-0 prevents overflow on long names) */}
        <div className="min-w-0">
          <h3 className="font-[family-name:var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.08em] text-[var(--text)] leading-snug break-words">
            {project.name}
          </h3>
          <span className="label text-[var(--muted)] mt-1 block">
            {project.category}
          </span>
        </div>

        {/* Arrow Action */}
        <ArrowRight
          className="w-6 h-6 text-[var(--muted)] ml-auto shrink-0 transition-all duration-200 group-hover:text-[var(--accent)] group-hover:translate-x-[6px]"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}

