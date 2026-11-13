"use client";

import dynamic from "next/dynamic";
import { Globe } from "lucide-react";
import CountUp from "./CountUp";

// WebGL2 ReflectiveCard loaded dynamically on client-only
const ReflectiveCard = dynamic(() => import("./ReflectiveCard"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full h-full bg-[var(--bg-elevated)] border border-[var(--line)] rounded-[24px]"
      aria-hidden="true"
    />
  ),
});

const STATS = [
  { value: 6, suffix: "º", label: "SEMESTRE ING. SISTEMAS" },
  { value: 1, suffix: "", label: "STARTUP FUNDADA (CONTROL CORE)" },
  { value: 100, suffix: "%", label: "ENFOQUE EN REACT & IA" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[100svh] min-h-[760px] pt-[64px] md:pt-[72px] border-b border-[var(--line-accent)] flex flex-col justify-between"
      style={{
        backgroundColor: "var(--bg)",
        backgroundImage:
          "radial-gradient(ellipse at 50% 30%, rgba(214,20,30,0.18), transparent 60%)",
      }}
    >
      {/* STEP 2: Giant Title (z-0) */}
      <div
        className="absolute top-[6%] lg:top-[8%] left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none select-none animate-hero-title px-4"
        style={{
          maskImage: "linear-gradient(to bottom, #000 40%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000 40%, transparent 95%)",
        }}
        aria-hidden="true"
      >
        <span className="font-[family-name:var(--font-display)] uppercase text-[clamp(7rem,24vw,26rem)] leading-[0.85] text-[var(--accent)] tracking-tight whitespace-nowrap block">
          PORTAFOLIO
        </span>
      </div>

      {/* STEP 4: Bottom Fade (z-10, below card so card is not darkened) */}
      <div
        className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-[var(--bg)] to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* STEP 3 & 7: Reflective Card (z-20) */}
      {/* Absolute on desktop with -3deg tilt; relative in flow on mobile with 0deg */}
      <div
        className="z-20 pointer-events-auto relative lg:absolute left-0 lg:left-1/2 bottom-auto lg:bottom-[10%] translate-x-0 lg:-translate-x-1/2 rotate-0 lg:-rotate-3 w-[52vw] max-w-[220px] lg:w-[clamp(180px,15vw,240px)] lg:max-w-none h-[38svh] max-h-[340px] lg:max-h-none lg:h-[clamp(280px,24vw,375px)] mx-auto lg:mx-0 mt-8 mb-4 lg:my-0 shrink-0"
        aria-hidden="true"
      >
        <ReflectiveCard
          width="100%"
          height="100%"
          theme="dark"
          tint="#ff3b3b"
          metalness={1}
          roughness={0.35}
          blurStrength={6}
          grayscale={1}
          warp={0.6}
          shine={1.2}
          bevel={3}
          glare={0.6}
          enableTilt
          tiltStrength={12}
          intro
          radius={24}
          badge="Disponible"
          status="Disponible"
          statusColor="#D6141E"
          name="Juan Sebastián García"
          role="React · TypeScript · IA Aplicada"
          idLabel="Ubicación"
          idValue="Bogotá, Colombia"
        />
      </div>

      {/* STEP 5 & 7: Content (z-30) */}
      <div className="relative z-30 max-w-[1440px] mx-auto w-full px-6 md:px-12 flex-1 flex flex-col justify-end pointer-events-none pb-8 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">
          {/* LEFT BLOCK (Desktop: col-span-4, bottom-aligned / Mobile: centered) */}
          <div className="lg:col-span-4 space-y-4 animate-hero-left text-center lg:text-left flex flex-col items-center lg:items-start max-w-md lg:max-w-none mx-auto lg:mx-0">
            <span className="font-[family-name:var(--font-script)] text-4xl lg:text-5xl text-[var(--accent)] -rotate-4 inline-block select-none">
              Hola, soy
            </span>

            <h1 className="font-[family-name:var(--font-display)] uppercase text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] text-[var(--text)] tracking-tight">
              SEBASTIÁN<br />GARCÍA
            </h1>

            <p className="label text-[var(--accent)]">
              DESARROLLADOR WEB JUNIOR · REACT · TYPESCRIPT · IA
            </p>

            <p className="text-[14px] text-[var(--muted)] leading-[1.7] max-w-[340px]">
              Estudiante de ingeniería de sistemas y desarrollador web con React
              y TypeScript. Fundador de Control Core, enfocado en automatización
              de procesos, agentes de IA e interfaces web modernas.
            </p>

            <div className="inline-flex items-center gap-2 pt-2">
              <Globe
                className="w-[14px] h-[14px] text-[var(--accent)] shrink-0"
                aria-hidden="true"
              />
              <span className="label text-[var(--muted)]">
                BOGOTÁ, COLOMBIA · REMOTO
              </span>
            </div>
          </div>

          {/* CENTER SPACER for Desktop (col-span-4, leaves room for the card) */}
          <div className="hidden lg:block lg:col-span-4 h-full pointer-events-none" aria-hidden="true" />

          {/* RIGHT BLOCK (Desktop: col-span-4 / Mobile: stacked) */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-8 animate-hero-right w-full lg:pl-4">
            {/* Tagline Circle with 4-point star ✦ */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="w-9 h-9 rounded-full border border-[var(--line-accent)] flex items-center justify-center shrink-0">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[var(--accent)]"
                  aria-hidden="true"
                >
                  <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
                </svg>
              </div>
              <p className="text-[13px] text-[var(--muted)] leading-snug max-w-[160px] text-left">
                Transformando ideas en experiencias digitales de alto impacto.
              </p>
            </div>

            {/* STATS: Desktop (stacked vertically with 1px var(--line) dividers) */}
            <div className="hidden lg:flex flex-col border-t border-[var(--line)]">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="py-4 border-b border-[var(--line)] flex items-center gap-4"
                >
                  <span className="font-[family-name:var(--font-display)] text-5xl text-[var(--accent)] leading-none shrink-0 w-24">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="label text-[var(--muted)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* STATS: Mobile (< lg, 3-column grid with border-l dividers) */}
            <div className="grid lg:hidden grid-cols-3 w-full border-y border-[var(--line)] py-4 my-2">
              {STATS.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center px-2 ${
                    idx > 0 ? "border-l border-[var(--line)]" : ""
                  }`}
                >
                  <span className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-[var(--accent)] leading-none">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="label text-[var(--muted)] mt-1 text-[8px] sm:text-[10px] leading-tight text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
