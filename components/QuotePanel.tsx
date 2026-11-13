import Reveal from "./Reveal";

const QUOTE_LINES = [
  "El buen diseño",
  "no es solo cómo se ve,",
  "sino cómo funciona",
  "en cada detalle.",
];

const SIGNATURE = "Sebastián";

const CLOSING = "CREEMOS ALGO EXTRAORDINARIO JUNTOS.";

export default function QuotePanel() {
  return (
    <aside
      aria-label="Filosofía de diseño"
      className="relative overflow-hidden h-full min-h-[420px] lg:min-h-[520px] flex flex-col justify-between p-8 lg:p-10"
      style={{
        background: `
          radial-gradient(ellipse at 20% 10%, rgba(255, 90, 90, 0.35), transparent 55%),
          repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.03) 0 2px, transparent 2px 14px),
          linear-gradient(160deg, #B5101A 0%, var(--accent-dark) 55%, #3A0509 100%)
        `,
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.12)",
      }}
    >
      {/* TOP & MIDDLE CONTENT: QUOTE MARK + BLOCKQUOTE + SIGNATURE */}
      <Reveal delay={100}>
        <div className="flex flex-col items-start">
          {/* QUOTE MARK */}
          <svg
            width="28"
            height="24"
            viewBox="0 0 24 18"
            fill="currentColor"
            className="text-white/85 mb-6 shrink-0"
            aria-hidden="true"
          >
            <path d="M0 10.8C0 4.8 4 1.2 8.4 0L9.6 2.4C6.4 3.6 4.8 6 4.8 8.4H9.6V18H0V10.8ZM14.4 10.8C14.4 4.8 18.4 1.2 22.8 0L24 2.4C20.8 3.6 19.2 6 19.2 8.4H24V18H14.4V10.8Z" />
          </svg>

          {/* BLOCKQUOTE */}
          <blockquote className="mb-7">
            <p className="text-[20px] lg:text-[22px] font-normal leading-[1.45] text-[var(--text)] max-w-[220px]">
              {QUOTE_LINES.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </blockquote>

          {/* SIGNATURE WITH HANDWRITTEN UNDERLINE */}
          <div className="inline-flex flex-col items-start select-none">
            <span className="font-[family-name:var(--font-script)] text-5xl lg:text-6xl text-[var(--text)] -rotate-6 inline-block origin-bottom-left tracking-normal pl-1">
              {SIGNATURE}
            </span>
            <svg
              width="120"
              height="12"
              viewBox="0 0 120 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible -mt-1 ml-1"
              aria-hidden="true"
            >
              <path
                d="M2 9C35 2 85 2 118 8"
                stroke="var(--text)"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="animate-underline-draw"
              />
            </svg>
          </div>
        </div>
      </Reveal>

      {/* SPACER (Ensures closing is pushed to bottom and card fills row) */}
      <div className="flex-1 min-h-[48px] lg:min-h-[64px]" aria-hidden="true" />

      {/* BOTTOM CONTENT: CLOSING PHRASE + 4-POINT STAR */}
      <Reveal delay={250}>
        <div className="pt-6">
          <p className="label text-[var(--text)] max-w-[160px] leading-[1.8] font-medium">
            {CLOSING}
          </p>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-4 text-[#FF4B55] shrink-0"
            aria-hidden="true"
          >
            <path d="M7 0C7 3.866 3.866 7 0 7C3.866 7 7 10.134 7 14C7 10.134 10.134 7 14 7C10.134 7 7 3.866 7 0Z" />
          </svg>
        </div>
      </Reveal>
    </aside>
  );
}

