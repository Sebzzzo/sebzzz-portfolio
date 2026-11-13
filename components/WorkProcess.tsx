import { Search, Lightbulb, PenTool, Code2, Send } from "lucide-react";
import { steps, type ProcessStep } from "@/data/process";
import Reveal from "./Reveal";

const iconMap = {
  search: Search,
  lightbulb: Lightbulb,
  pen: PenTool,
  code: Code2,
  send: Send,
};

export default function WorkProcess() {
  return (
    <div className="p-8 lg:px-10 lg:py-14 w-full">
      <Reveal>
        <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl md:text-3xl tracking-[0.02em] text-[var(--text)] mb-8">
          PROCESO DE TRABAJO
        </h2>
      </Reveal>

      <ol
        role="list"
        className="relative [--num-w:32px] md:[--num-w:40px] [--gap:12px] md:[--gap:16px] [--circle:48px]"
      >
        {steps.map((step: ProcessStep, index: number) => {
          const Icon = iconMap[step.icon];
          const isLast = index === steps.length - 1;

          return (
            <li
              key={step.number}
              className={`relative grid grid-cols-[var(--num-w)_var(--circle)_1fr] gap-[var(--gap)] items-start group ${
                isLast ? "pb-0" : "pb-7"
              }`}
            >
              {/* CONNECTING VERTICAL LINE (Steps 1 to 4) */}
              {!isLast && (
                <div
                  className="absolute top-[48px] w-[1px] bg-gradient-to-b from-[var(--accent)] to-[var(--line-accent)] z-0 pointer-events-none animate-line-draw"
                  style={{
                    left: "calc(var(--num-w) + var(--gap) + (var(--circle) / 2) - 0.5px)",
                    height: "calc(100% - 48px)",
                    animationDelay: `${index * 100}ms`,
                  }}
                  aria-hidden="true"
                />
              )}

              {/* NUMBER (Vertical alignment with circle center via 48px line-height) */}
              <span className="font-[family-name:var(--font-display)] text-xl text-[var(--accent)] leading-[48px] tabular-nums select-none">
                {step.number}
              </span>

              {/* ICON CIRCLE (z-10 sits above connecting line) */}
              <div className="relative z-10 w-12 h-12 rounded-full border border-[var(--accent)] bg-[var(--bg)] flex items-center justify-center transition-all duration-250 group-hover:bg-[rgba(214,20,30,0.15)] group-hover:shadow-[0_0_24px_rgba(214,20,30,0.35)] shrink-0">
                <Icon
                  className="w-5 h-5 text-[var(--text)]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              {/* STEP TEXT */}
              <div className="min-w-0">
                <h3 className="label text-[var(--accent)] transition-colors duration-250 group-hover:text-[var(--text)] mt-1">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-[var(--muted)] mt-1.5 max-w-[260px] break-words">
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

